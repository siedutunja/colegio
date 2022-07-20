<template>
  <div>
    <CRow>
      <CCol>
        <CCard accent-color="info">
          <CCardBody>
            <b-row>
              <b-col lg="6" md="12">
                <b-form-group label="Colegios" label-for="colegios">
                  <b-form-select  id="colegios" name="colegios" ref="colegios" v-model="idColegio" :options="comboColegios" @change="ocuparComboSedes"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="6" md="12">
                <b-form-group label="Sedes" label-for="sedes">
                  <b-form-select  id="sedes" name="sedes" ref="sedes" v-model="idSede" :options="comboSedes" @change="seleccionarSede" :disabled="deshabilitarSedes"></b-form-select>
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
    name: 'ColegioSede',
    data () {
      return {
        idColegio: null,
        idSede: null,
        formS: {
          id: null,
          sede: null,
          
        },
        deshabilitarSedes: true
      }
    },
    methods: {
      seleccionarSede() {
        let texto = document.getElementById('sedes')
        this.formS.nombreSede = texto[texto.selectedIndex].text
        texto = document.getElementById('grado')
        this.form.nombreGrado = texto[texto.selectedIndex].text
        texto = document.getElementById('curso')
        this.form.nombreCurso = texto[texto.selectedIndex].text
        this.$emit("datosEncontrados", this.form)
      },
      async ocuparComboColegios() {
        await axios
        .get(CONFIG.ROOT_PATH + 'colegios/combo')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' Lista de colegios')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboColegios.push({ 'value': element.id, 'text': element.nemo.toUpperCase() })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta de colegios. Intente más tarde.')
        })
      },
      async ocuparComboSedes() {
        this.deshabilitarSedes = true
        await axios
        .get(CONFIG.ROOT_PATH + 'colegios/listasedes', { params: { id: this.idColegio }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' Lista sedes del colegio')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboSedes.push({ 'value': element.id, 'text': element.sede.toUpperCase() })
              })
              this.deshabilitarSedes = false
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta de sedes del colegio. Intente más tarde.')
        })
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    beforeMount() {
      this.ocuparComboColegios()
    }
  }
</script>
