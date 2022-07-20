<template>
  <div>
    <ModalIdle v-if="isIdle" />
    <router-view />
  </div>
</template>

<script>
  import ModalIdle from "@/views/componentes/ModalIdle.vue"
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'
  import jwt from 'jsonwebtoken'

  export default {
    name: 'App',
    components: {
      ModalIdle
    },
    data () {
      return {
        token: null,
        datosNav: {},
        idUsuario: null,
        idInstitucion: null
      }
    },
    methods: {
      async cargarDatosSesion() {
        let tokenDecodificado = jwt.decode(this.token)
        this.idUsuario = tokenDecodificado.id
        await axios
        .get(CONFIG.ROOT_PATH + 'login/usuario/institucion', { params: { idUsuario: this.idUsuario }})
        .then(response => {
          if (response.data.error){
            alert(response.data.mensaje + ' - Consulta Usuario Login')
            location.replace(CONFIG.ROOT_MODULO_LOGIN)
          } else{
            if (response.data.datos == 0) {
              alert('¡Lo sentimos!. El Usuario no tiene permisos asignados.')
              location.replace(CONFIG.ROOT_MODULO_LOGIN)
            } else {
              this.$store.commit('set', ['idUsuario', response.data.datos.id])
              this.$store.commit('set', ['usuario', response.data.datos.usuario])
              this.$store.commit('set', ['clave', response.data.datos.clave])
              this.$store.commit('set', ['idPersona', response.data.datos.id_persona])
              this.$store.commit('set', ['idRol', response.data.datos.id_rol])
              this.$store.commit('set', ['idDependencia', response.data.datos.id_dependencia])
              this.$store.commit('set', ['nombreUsuario', response.data.datos.nombre1])
              this.$store.commit('set', ['apellidoUsuario', response.data.datos.apellido1])
              this.$store.commit('set', ['rol', response.data.datos.rol])
              this.$store.commit('set', ['nemoRol', response.data.datos.nemo])
              this.$store.commit('set', ['dependencia', response.data.datos.dependencia])
              if (response.data.datos.foto == null || response.data.datos.foto == '') {
                this.$store.commit('set', ['foto', CONFIG.FOTO])
              } else {
                this.$store.commit('set', ['foto', response.data.datos.foto])
              }
              this.idInstitucion = response.data.datos.id_institucion
              this.datosPermisos()
              this.datosConfiguraciones()
              this.mensajeEmergente('success',CONFIG.TITULO_MSG,'Bienvenido ' + this.$store.state.nombreUsuario + ' ' + this.$store.state.apellidoUsuario)
            }
          }
        })
        .catch(err => {
          alert('Algo salio mal y no se pudo realizar: Consulta Usuario Colegio Login. Intente más tarde. ' + err)
          location.replace(CONFIG.ROOT_MODULO_LOGIN)
        })
        window.history.replaceState({},'','/colegio/')
      },
      async datosPermisos() {
        await axios
        .get(CONFIG.ROOT_PATH + 'login/permisos', { params: { idUsuario: this.idUsuario }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Datos de permisos del Usuario')
          } else{
            if (response.data.datos != 0) {
              // FALTAN LOS PERMISOS DE USUARIO DEL COLEGIO
              this.$store.commit('set', ['costosEducativos', response.data.datos.costosEducativos])
              this.datosNav.costosEducativos = response.data.datos.costosEducativos
              this.$store.commit('set', ['solicitudesInspeccion', response.data.datos.solicitudesInspeccion])
              this.datosNav.solicitudesInspeccion = response.data.datos.solicitudesInspeccion

              let tokenNav = jwt.sign(this.datosNav, CONFIG.SECRET_KEY, {expiresIn: '14400s'})
              sessionStorage.setItem('tokenNav', tokenNav)
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Datos de permisos del Usuario. Intente más tarde.' + err)
        })
      },
      async datosConfiguraciones() {
        await axios
        .get(CONFIG.ROOT_PATH + 'configuraciones/institucion', { params: { idInstitucion: this.idInstitucion }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Datos de configuración del colegio')
          } else{
            if (response.data.datos != 0) {
              alert('Permisos: '+JSON.stringify(response.data.datos))
              this.$store.commit('set', ['idInstitucion', this.idInstitucion])
              this.$store.commit('set', ['nombreInstitucion', response.data.datos.institucion])
              this.$store.commit('set', ['nemoInstitucion', response.data.datos.nemo])
              this.$store.commit('set', ['aLectivo', response.data.datos.a_lectivo])
              this.$store.commit('set', ['escudoInstitucion', response.data.datos.escudo])
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Datos de configuración del colegio. Intente más tarde.' + err)
        })
      },
      iniciarVista() {
        this.token = sessionStorage.getItem('token')
        if (this.token != null) {
          jwt.verify(this.token, CONFIG.SECRET_KEY, (err, data) => {
            if (err) {
              sessionStorage.clear()
              alert('¡El token ha expirado.! Es necesario iniciar una nueva sesión.')
              location.replace(CONFIG.ROOT_MODULO_LOGIN)
            } else {
              this.cargarDatosSesion()
            }
          })
        } else {
          let valores = window.location.search
          let urlParams = new URLSearchParams(valores)
          this.token = urlParams.get('token')
          jwt.verify(this.token, CONFIG.SECRET_KEY, (err, data) => {
            if (err) {
              sessionStorage.clear()
              alert('¡El token ha expirado.! Es necesario iniciar una nueva sesión.')
              location.replace(CONFIG.ROOT_MODULO_LOGIN)
            } else {
              sessionStorage.setItem('token', this.token)
              this.cargarDatosSesion()
            }
          })
        }
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    computed: {
      isIdle() {
        return this.$store.state.idleVue.isIdle
      }
    },
    beforeMount() {
      this.iniciarVista()
    }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
