<template>
  <div>
    <CRow>
      <CCol>
        <CCard accent-color="info">
          <CCardBody>
            <b-row>
              <b-col lg="6" md="12">
                <b-form-group label="Sede*" label-for="sede">
                  <b-form-select  id="sede" name="sede" ref="sede" v-model="form.idSede" :options="comboSedes" @change="ocuparComboGrados"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="3" md="12">
                <b-form-group label="Grado*" label-for="grado">
                  <b-form-select  id="grado" name="grado" ref="grado" v-model="form.idGrado" :options="comboGrados" @change="ocuparComboCursos"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="3" md="12">
                <b-form-group label="Curso*" label-for="curso">
                  <b-form-select  id="curso" ref="curso" v-model="form.idCurso" :options="comboCursos" @change="seleccionarCurso" :disabled="deshabilitarCursos"></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'SedeGradoCurso',
    data () {
      return {
        form: {
          idSede: null,
          nombreSede: '',
          idGrado: null,
          nombreGrado: '',
          idCurso: null,
          nombreCurso: ''
        },
        comboSedes: [],
        listaSedes: {},
        comboGrados: [],
        listaGrados: {},
        comboCursos: [],
        deshabilitarCursos: true
      }
    },
    methods: {
      async ocuparComboSedes() {
        this.comboSedes = []
        this.listaSedes = []
        this.deshabilitarCursos = true
        await axios
        .get(CONFIG.ROOT_PATH + 'colegios/listasedes', { params: { id: this.$store.state.idInstitucion }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' Lista sedes del colegio')
          } else{
            if (response.data.datos != 0) {
              this.listaSedes = response.data.datos
              response.data.datos.forEach(element => {
                this.comboSedes.push({ 'value': element.id, 'text': element.sede.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta. Intente más tarde.')
        })
      },
      seleccionarCurso() {
        let texto = document.getElementById('sede')
        this.form.nombreSede = texto[texto.selectedIndex].text
        texto = document.getElementById('grado')
        this.form.nombreGrado = texto[texto.selectedIndex].text
        texto = document.getElementById('curso')
        this.form.nombreCurso = texto[texto.selectedIndex].text
        this.$emit("datosEncontrados", this.form)
      },
      ocuparComboCursos() {
        this.form.idCurso = null
        this.deshabilitarCursos = false
      },
      async ocuparComboGrados() {
        this.comboGrados = []
        this.comboCursos = []
        this.form.idGrado = null
        this.form.idCurso = null
        this.deshabilitarCursos = true
        this.listaGrados = []
        await axios
        .get(CONFIG.ROOT_PATH + 'colegios/listagrados')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' Lista Grados')
          } else{
            if (response.data.datos != 0) {
              this.listaGrados = response.data.datos
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta. Intente más tarde.')
        })
        this.listaSedes.forEach(element => {
          if (element.id == this.form.idSede) {
            if (element.preescolar) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 1) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            if (element.primaria) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 2) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            if (element.secundaria) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 3) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            if (element.normalista) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 4) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            if (element.ciclos) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 5) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            if (element.aceleracion) {
              this.listaGrados.forEach(elementG => {
                if (elementG.nivel == 6) {
                  this.comboGrados.push({ 'value': elementG.id, 'text': elementG.grado.toUpperCase() })
                }
              })
            }
            for (var i = 1; i <= element.max_cursos; i++) {
              this.comboCursos.push({ 'value': i, 'text': i })
            }
          }
        })
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    beforeMount() {
      this.ocuparComboSedes()
    }
  }
</script>
