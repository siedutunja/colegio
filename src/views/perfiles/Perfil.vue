<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="info" text-color="light">
            <h5 class="my-0">Perfil del Usuario</h5>
          </CCardHeader>
          <CCardBody>
            <b-row>
              <b-col lg="12">
                <b-tabs content-class="mt-3">
                  <b-tab title="Datos Personales" active>
                    <b-row class="p-3">
                      <b-col lg="3" md="6">
                        <b-form-group label="Primer Apellido*" label-for="ape1">
                          <b-form-input id="ape1" ref="ape1" v-model.trim="$v.infoFuncionario.apellido1.$model" :state="validateStateF('apellido1')" aria-describedby="feedApe1" autocomplete="off" maxlength="30" @keydown="soloLetras"></b-form-input>
                          <b-form-invalid-feedback id="feedApe1" >Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Segundo Apellido" label-for="ape2">
                          <b-form-input id="ape2" ref="ape2" v-model.trim="$v.infoFuncionario.apellido2.$model" :state="validateStateF('apellido2')" aria-describedby="feedApe2" autocomplete="off" maxlength="30" @keydown="soloLetras"></b-form-input>
                          <b-form-invalid-feedback id="feedApe2">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Primer Nombre*" label-for="nom1">
                          <b-form-input id="nom1" ref="nom1" v-model.trim="$v.infoFuncionario.nombre1.$model" :state="validateStateF('nombre1')" aria-describedby="feedNom1" autocomplete="off" maxlength="30" @keydown="soloLetras"></b-form-input>
                          <b-form-invalid-feedback id="feedNom1">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Segundo Nombre" label-for="nom2">
                          <b-form-input id="nom2" ref="nom2" v-model.trim="$v.infoFuncionario.nombre2.$model" :state="validateStateF('nombre2')" aria-describedby="feedNom2" autocomplete="off" maxlength="30" @keydown="soloLetras"></b-form-input>
                          <b-form-invalid-feedback id="feedNom2">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Número de Documento*" label-for="doc">
                          <b-form-input id="doc" ref="doc" v-model="$v.infoFuncionario.documento.$model" :state="validateStateF('documento')" aria-describedby="feedDoc" autocomplete="off" maxlength="20" disabled></b-form-input>
                          <b-form-invalid-feedback id="feedDoc">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Tipo Documento*" label-for="tipoDoc">
                          <b-form-select  id="tipoDoc" ref="tipoDoc" v-model="$v.infoFuncionario.id_tipo_documento.$model" :options="comboTiposDoc" :state="validateStateF('id_tipo_documento')" aria-describedby="feedTipoDoc"></b-form-select>
                          <b-form-invalid-feedback id="feedTipoDoc">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Municipio de Expedición del Documento*" label-for="muniDoc">
                          <b-form-select  id="muniDoc" ref="muniDoc" v-model="$v.infoFuncionario.id_municipio_documento.$model" :options="comboMunicipios" :state="validateStateF('id_municipio_documento')" aria-describedby="feedMuniDoc"></b-form-select>
                          <b-form-invalid-feedback id="feedMuniDoc">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Fecha de Nacimiento*" label-for="fechaN">
                          <b-form-datepicker id="fechaN" ref="fechaN" v-model.trim="$v.infoFuncionario.fecha_nacimiento.$model" :state="validateStateF('fecha_nacimiento')" aria-describedby="feedFechaN"></b-form-datepicker>
                          <b-form-invalid-feedback id="feedFechaN" >Campo requerido.</b-form-invalid-feedback>            
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Género*" label-for="genero">
                          <b-form-select  id="genero" ref="genero" v-model="$v.infoFuncionario.id_genero.$model" :options="comboGeneros" :state="validateStateF('id_genero')" aria-describedby="feedGenero"></b-form-select>
                          <b-form-invalid-feedback id="feedGenero">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Grupo y Factor RH*" label-for="rh">
                          <b-form-select  id="rh" ref="rh" v-model="$v.infoFuncionario.id_rh.$model" :options="comboRhs" :state="validateStateF('id_rh')" aria-describedby="feedRh"></b-form-select>
                          <b-form-invalid-feedback id="feedRh">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Dirección de Residencia*" label-for="dir">
                          <b-form-input id="dir" ref="dir" v-model.trim="$v.infoFuncionario.direccion.$model" :state="validateStateF('direccion')" aria-describedby="feedDir" autocomplete="off" maxlength="100"></b-form-input>
                          <b-form-invalid-feedback id="feedDir" >Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Municipio de Residencia*" label-for="muniRes">
                          <b-form-select  id="muniRes" ref="muniRes" v-model="$v.infoFuncionario.id_municipio_direccion.$model" :options="comboMunicipios" :state="validateStateF('id_municipio_direccion')" aria-describedby="feedMuniRes"></b-form-select>
                          <b-form-invalid-feedback id="feedMuniRes">Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Teléfono Principal*" label-for="tel1">
                          <b-form-input id="tel1" ref="tel1" v-model.trim="$v.infoFuncionario.telefono1.$model" :state="validateStateF('telefono1')" aria-describedby="feedTel1" autocomplete="off" maxlength="10" @keydown="soloNumeros"></b-form-input>
                          <b-form-invalid-feedback id="feedTel1" >El número debe contener 10 dígitos.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="3" md="6">
                        <b-form-group label="Teléfono Opcional" label-for="tel2">
                          <b-form-input id="tel2" ref="tel2" v-model.trim="$v.infoFuncionario.telefono2.$model" :state="validateStateF('telefono2')" aria-describedby="feedTel2" autocomplete="off" maxlength="10" @keydown="soloNumeros"></b-form-input>
                          <b-form-invalid-feedback id="feedTel2" >El número debe contener 10 dígitos.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Correo Electrónico*" label-for="correo">
                          <b-form-input id="correo" ref="correo" v-model.trim="$v.infoFuncionario.correo.$model" :state="validateStateF('correo')" aria-describedby="feedCorreo" autocomplete="off" maxlength="50"></b-form-input>
                          <b-form-invalid-feedback id="feedCorreo" >Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Cargo*" label-for="cargo">
                          <b-form-input id="cargo" ref="cargo" v-model.trim="$v.infoFuncionario.cargo.$model" :state="validateStateF('cargo')" aria-describedby="feedCargo" autocomplete="off" maxlength="50"></b-form-input>
                          <b-form-invalid-feedback id="feedCargo" >Campo requerido.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="12" md="12"><hr></b-col>
                      <b-col lg="12" md="12">
                        <div class="float-right small text-medium-emphasis">* Campo requerido</div>
                        <b-button class="small" variant="info" @click="validarDatosFuncionario">Actualizar Datos del Usuario</b-button>
                        <b-button class="small mx-3" variant="secondary" @click="cancelarFormulario">Cancelar</b-button>
                      </b-col>
                    </b-row>
                  </b-tab>
                  <b-tab title="Contraseña">
                    <b-row class="p-3">
                      <b-col lg="6" md="12">
                        <b-form-group label="Contraseña Actual*" label-for="claveActual">
                          <b-form-input id="claveActual" ref="claveActual" v-model.trim="$v.formC.claveActual.$model" :state="validateStateC('claveActual')" aria-describedby="claveA" autocomplete="off" maxlength="20"></b-form-input>
                          <b-form-invalid-feedback id="claveA" >Digita la contraseña actual.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Nueva Contraseña*" label-for="claveNueva">
                          <b-form-input id="claveNueva" ref="claveNueva" v-model.trim="$v.formC.claveNueva.$model" :state="validateStateC('claveNueva')" aria-describedby="claveN" autocomplete="off" maxlength="20"></b-form-input>
                          <b-form-invalid-feedback id="claveN" >La contraseña debe contener mínimo 10 caracteres.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="12"><hr></b-col>
                      <b-col lg="12">
                        <div class="float-right small text-medium-emphasis">* Campo requerido</div>
                        <b-button class="small" variant="info" @click="validarClaves">Actualizar Contraseña</b-button>
                        <b-button class="small mx-3" variant="secondary" @click="cancelarFormulario">Cancelar</b-button>
                      </b-col>
                    </b-row>
                  </b-tab>
                  <b-tab title="Usuario">
                    <b-row class="p-3">
                      <b-col lg="12">
                        <b-alert variant="info" show>
                          <h4><span class="text-muted mr-2" style="font-size: 14">Usuario Actual: </span> {{ this.usuarioActual }}</h4>
                        </b-alert>
                      </b-col>
                      <b-col lg="12"><hr></b-col>
                      <b-col lg="6" md="12">
                        <b-form-group label="Nuevo Usuario*" label-for="usuarioN">
                          <b-form-input id="usuarioN" ref="usuarioN" v-model.trim="$v.formU.usuarioNuevo.$model" :state="validateStateU('usuarioNuevo')" aria-describedby="feedUsuN" autocomplete="off" maxlength="50"></b-form-input>
                          <b-form-invalid-feedback id="feedUsuN" >El usuario debe contener mínimo 8 caracteres.</b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col lg="12"><hr></b-col>
                      <b-col lg="12">
                        <div class="float-right small text-medium-emphasis">* Campo requerido</div>
                        <b-button class="small" variant="info" @click="validarUsuarioNuevo">Actualizar Usuario</b-button>
                        <b-button class="small mx-3" variant="secondary" @click="cancelarFormulario">Cancelar</b-button>
                      </b-col>
                    </b-row>
                  </b-tab>
                  <b-tab title="Foto">
                    <b-row class="p-3">
                      <b-col lg="12" class="mt-3 text-center">
                        <img :src="foto" id="photo" alt="photo">
                      </b-col>
                      <b-col lg="12" class="mt-3 text-center">
                        <b-button class="small mx-3" variant="info" @click="cambiarFoto">Cambiar Foto</b-button>
                        <b-button class="small mx-3" variant="danger" @click="borrarFoto">Borrar Foto</b-button>
                      </b-col>
                      <b-col lg="12"><hr></b-col>
                      <b-col lg="12">
                        <div class="float-right small text-medium-emphasis">* Campo requerido</div>
                        <b-button class="small mx-3" variant="secondary" @click="cancelarFormulario">Cerrar</b-button>
                      </b-col>
                    </b-row>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <b-modal ref="modalEditarFoto" size="lg" scrollable hide-footer title="Editar Foto" ok-only>
      <div class="mx-3">
        <div>
          <EditarFoto @retorno="datosRecibidosFoto"/>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import axios from "axios"
  import { validationMixin } from "vuelidate";
  import { required, minLength } from "vuelidate/lib/validators";
  import * as CONFIG from '@/assets/config.js'
  import EditarFoto from '@/views/perfiles/EditarFoto'

  export default {
    name: 'Perfil',
    mixins: [validationMixin],
    components: {
      EditarFoto
    },
    data () {
      return {
        infoFuncionario: {
          id: null,
          documento: null,
          id_tipo_documento: null,
          id_municipio_documento: null,
          nombre1: null,
          nombre2: null,
          apellido1: null,
          apellido2: null,
          id_genero: null,
          fecha_nacimiento: null,
          id_rh: null,
          direccion: null,
          id_municipio_direccion: null,
          telefono1: null,
          telefono2: null,
          correo: null,
          cargo: null,
          estado: null
        },
        usuarioActual: null,
        comboMunicipios: [],
        comboTiposDoc: [],
        comboGeneros: [],
        comboRhs: [],
        formU: {
          idUsuario: null,
          usuarioNuevo: null
        },
        formC: {
          idUsuario: null,
          claveActual: null,
          claveNueva: null
        },
        foto: null
      }
    },
    validations: {
      infoFuncionario: {
        documento: { required },
        id_tipo_documento: { required },
        id_municipio_documento: { required },
        nombre1: { required },
        nombre2: { minLength: minLength(0) },
        apellido1: { required },
        apellido2: { minLength: minLength(0) },
        fecha_nacimiento: { required },
        id_genero: { required },
        id_rh: { required },
        direccion: { required },
        id_municipio_direccion: { required },
        telefono1: { required, minLength: minLength(10) },
        telefono2: { minLength: minLength(0) },
        correo: { required, minLength: minLength(5) },
        cargo: { required }
      },
      formU: {
        usuarioNuevo: { required, minLength: minLength(10) }
      },
      formC: {
        claveActual: { required },
        claveNueva: { required, minLength: minLength(10) }
      }
    },
    methods: {
      cambiarFoto() {
        this.$refs['modalEditarFoto'].show()
      },
      borrarFoto() {
        this.foto = null
        this.actualizarFoto()
        this.$store.state.foto = CONFIG.FOTO
        this.foto = CONFIG.FOTO
      },
      async actualizarFoto() {
        await axios
        .put(CONFIG.ROOT_PATH + 'personas/foto', JSON.stringify({id: this.infoFuncionario.id, foto: this.foto}), { headers: {"Content-Type": "application/json; charset=utf-8" }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Actualizar Foto Persona')
          } else{
            this.mensajeEmergente('success',CONFIG.TITULO_MSG,'Datos actualizados correctamente.')
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Actualizar Foto Persona. Intente más tarde. ' + err)
        })
      },
      datosRecibidosFoto(retorno) {
        this.$store.state.foto = retorno
        this.foto = retorno
        this.actualizarFoto()
        this.$refs['modalEditarFoto'].hide()
      },
      validarDatosFuncionario() {
        this.$v.infoFuncionario.$touch()
        if (this.$v.infoFuncionario.$anyError) {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algunos campos están incompletos.')
          return false
        } else {
          this.$bvModal.msgBoxConfirm('¿Esta seguro de actualizar los datos del usuario?', {
            title: 'Actualizar Datos del Usuario',
            size: '',
            buttonSize: '',
            okVariant: 'success',
            okTitle: 'Si, Actualizar Datos del Usuario',
            cancelTitle: 'Cancelar',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            if (value) {
              this.actualizarFuncionario()
            }
          })
        }
        return true
      },
      async actualizarFuncionario() {
        this.infoFuncionario.apellido1 = this.infoFuncionario.apellido1.toUpperCase()
        if (this.infoFuncionario.apellido2 == '' || this.infoFuncionario.apellido2 == null) {
          this.infoFuncionario.apellido2 = null
        } else {
          this.infoFuncionario.apellido2 = this.infoFuncionario.apellido2.toUpperCase()
        }
        this.infoFuncionario.nombre1 = this.infoFuncionario.nombre1.toUpperCase()
        if (this.infoFuncionario.nombre2 == '' || this.infoFuncionario.nombre2 == null) {
          this.infoFuncionario.nombre2 = null
        } else {
          this.infoFuncionario.nombre2 = this.infoFuncionario.nombre2.toUpperCase()
        }
        if (this.infoFuncionario.telefono2 == '' || this.infoFuncionario.telefono2 == null) {
          this.infoFuncionario.telefono2 == null
        }
        this.infoFuncionario.correo = this.infoFuncionario.correo.toLowerCase()
        this.infoFuncionario.cargo = this.infoFuncionario.cargo.toUpperCase()
        await axios
        .put(CONFIG.ROOT_PATH + 'personas/persona', JSON.stringify(this.infoFuncionario), { headers: {"Content-Type": "application/json; charset=utf-8" }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Actualizar Persona')
          } else{
            this.mensajeEmergente('success',CONFIG.TITULO_MSG,'Datos actualizados correctamente.')
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Actualizar Persona. Intente más tarde. ' + err)
        })
      },
      soloLetras(e) {
        let key = window.Event ? e.which : e.keyCode
        if (!((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key == 193) || (key == 201) || (key == 205) || (key == 211) || (key == 218) || (key == 225) || (key == 233) || (key == 237) || (key == 243) || (key == 250) || (key == 192) || (key == 32) || (key == 8) || (key == 9) || (key == 37) || (key == 39))) {
            e.preventDefault()
        }
      },
      soloNumeros(e) {
        let key = window.Event ? e.which : e.keyCode
        if (!((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key == 8) || (key == 9) || (key == 37) || (key == 39))) {
            e.preventDefault()
        }
      },
      cancelarFormulario() {
        this.$router.push('/inicio')
      },
      async ocuparComboTiposDoc() {
        this.comboTiposDoc = []
        await axios
        .get(CONFIG.ROOT_PATH + 'combos/listatiposdocumentos')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Lista Tipos Documento')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboTiposDoc.push({ 'value': element.id, 'text': element.documento.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Lista Tipos Documento. Intente más tarde. ' + err)
        })
      },
      async ocuparComboMunicipios() {
        this.comboMunicipios = []
        await axios
        .get(CONFIG.ROOT_PATH + 'combos/listamunicipios')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Lista Municipios')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboMunicipios.push({ 'value': element.id, 'text': element.municipio.toUpperCase() + ' - ' + element.departamento.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Lista Municipios. Intente más tarde. ' + err)
        })
      },
      async ocuparComboGeneros() {
        this.comboGeneros = []
        await axios
        .get(CONFIG.ROOT_PATH + 'combos/listageneros')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Lista Generos')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboGeneros.push({ 'value': element.id, 'text': element.genero.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Lista Generos. Intente más tarde. ' + err)
        })
      },
      async ocuparComboRhs() {
        this.comboRhs = []
        await axios
        .get(CONFIG.ROOT_PATH + 'combos/listarhs')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Lista Rhs')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboRhs.push({ 'value': element.id, 'text': element.rh.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Lista Rhs. Intente más tarde. ' + err)
        })
      },
      validarClaves() {
        this.$v.formC.$touch()
        if (this.$v.formC.$anyError) {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'La contraseña está incompleta.')
          return false
        } else {
          if (this.formC.claveActual != this.$store.state.clave) {
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'La contraseña actual está errada.')
          } else {
            this.formC.idUsuario = this.$store.state.idUsuario
            this.actualizarClave()
          }
        }
        return true
      },
      async actualizarClave() {
        await axios
        .put(CONFIG.ROOT_PATH + 'usuarios/perfil/clave', JSON.stringify(this.formC), { headers: {"Content-Type": "application/json; charset=utf-8" }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Actualizar Contraseña')
          } else{
            this.mensajeEmergente('success',CONFIG.TITULO_MSG,'La contraseña del usuario de ha actualizado correctamente.')
            this.$store.commit('set', ['clave', this.formC.claveNueva])
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Actualizar Contraseña. Intente más tarde. ' + err)
        })
      },
      validarUsuarioNuevo() {
        this.$v.formU.$touch()
        if (this.$v.formU.$anyError) {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'El Usuario está incompleto.')
          return false
        } else {
          if (this.formU.usuarioNuevo == this.$store.state.usuario) {
            alert("El usuario es el mismo")
          } else {
            axios
            .get(CONFIG.ROOT_PATH + 'usuarios/buscar/usuario', { params: { usuario: this.formU.usuarioNuevo }})
            .then(response => {
              if (response.data.error){
                this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Consulta Usuario Nuevo')
              } else{
                if (response.data.datos == 0) {
                  this.formU.idUsuario = this.$store.state.idUsuario
                  this.actualizarUsuario()
                } else {
                  this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'El Usuario ' + this.formU.usuarioNuevo + ' ya existe en el sistema.')
                  this.formU.usuarioNuevo = ''
                }
              }
            })
            .catch(err => {
              this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Consulta Usuario Nuevo. Intente más tarde. ' + err)
            })
          }
        }
        return true
      },
      async actualizarUsuario() {
        await axios
        .put(CONFIG.ROOT_PATH + 'usuarios/perfil/usuario', JSON.stringify(this.formU), { headers: {"Content-Type": "application/json; charset=utf-8" }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Actualizar Usuario')
          } else{
            this.mensajeEmergente('success',CONFIG.TITULO_MSG,'Los datos del usuario de han actualizados correctamente.')
            this.$store.commit('set', ['usuario', this.formU.usuarioNuevo])
            this.usuarioActual = this.formU.usuarioNuevo
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Actualizar Usuario. Intente más tarde. ' + err)
        })
      },
      async consultaPerfilUsuario() {
        this.usuarioActual = this.$store.state.usuario
        await axios
        .get(CONFIG.ROOT_PATH + 'personas/perfil', { params: { idPersona: this.$store.state.idPersona }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Consulta Perfil Persona')
          } else{
            if (response.data.datos != 0) {
              this.infoFuncionario.id = response.data.datos.id
              this.infoFuncionario.documento = response.data.datos.documento
              this.infoFuncionario.id_tipo_documento = response.data.datos.id_tipo_documento
              this.infoFuncionario.id_municipio_documento = response.data.datos.id_municipio_documento
              this.infoFuncionario.nombre1 = response.data.datos.nombre1
              this.infoFuncionario.nombre2 = response.data.datos.nombre2
              this.infoFuncionario.apellido1 = response.data.datos.apellido1
              this.infoFuncionario.apellido2 = response.data.datos.apellido2
              this.infoFuncionario.fecha_nacimiento = response.data.datos.fecha_nacimiento
              if (response.data.datos.fecha_nacimiento != null) {
                this.infoFuncionario.fecha_nacimiento = response.data.datos.fecha_nacimiento.substr(0,10)
              }
              this.infoFuncionario.id_genero = response.data.datos.id_genero
              this.infoFuncionario.id_rh = response.data.datos.id_rh
              this.infoFuncionario.direccion = response.data.datos.direccion
              this.infoFuncionario.id_municipio_direccion = response.data.datos.id_municipio_direccion
              this.infoFuncionario.telefono1 = response.data.datos.telefono1
              this.infoFuncionario.telefono2 = response.data.datos.telefono2
              this.infoFuncionario.correo = response.data.datos.correo
              this.infoFuncionario.cargo = response.data.datos.cargo
              this.foto = this.$store.state.foto
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar: Consulta Perfil Funcionario. Intente más tarde. ' + err)
        })
      },
      validateStateF(name) {
        const { $dirty, $error } = this.$v.infoFuncionario[name]
        return $dirty ? !$error : null
      },
      validateStateU(name) {
        const { $dirty, $error } = this.$v.formU[name]
        return $dirty ? !$error : null
      },
      validateStateC(name) {
        const { $dirty, $error } = this.$v.formC[name]
        return $dirty ? !$error : null
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    beforeMount() {
      this.consultaPerfilUsuario()
      this.ocuparComboTiposDoc()
      this.ocuparComboMunicipios()
      this.ocuparComboGeneros()
      this.ocuparComboRhs()
    }
  }
</script>
