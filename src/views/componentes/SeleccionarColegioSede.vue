<template>
  <div>
    <b-row>
      <b-col lg="6" md="12">
        <b-form-group label="Colegios:" label-for="colegios">
          <b-form-select  id="colegios" name="colegios" ref="colegios" v-model="idColegio" :options="comboColegios" @change="ocuparComboSedes">
            <template #first>
              <b-form-select-option value="null" disabled>-- Seleccione un Colegio --</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col lg="6" md="12">
        <b-form-group label="Sedes:" label-for="sedes">
          <b-form-select  id="sedes" name="sedes" ref="sedes" v-model="idSede" :options="comboSedes" @change="enviarColegio">
            <template #first>
              <b-form-select-option value="null" disabled>-- Seleccione una Sede --</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'SeleccionarColegioSede',
    data () {
      return {
        idColegio: null,
        idSede: null,
        comboColegios: [],
        comboSedes: [],
        form: {
          idColegio: null,
          nemo: null,
          idSede: null,
          sede: null
        }
      }
    },
    methods: {
      enviarColegio() {
        let elementoColegio = document.getElementById('colegios')
        this.form.idColegio = this.idColegio
        this.form.nemo = elementoColegio[elementoColegio.selectedIndex].text
        let elementoSede = document.getElementById('sedes')
        this.form.idSede = this.idSede
        this.form.sede = elementoSede[elementoSede.selectedIndex].text
        this.$emit("datosEncontrados", this.form)
      },
      async ocuparComboSedes() {
        this.comboSedes = []
        await axios
        .get(CONFIG.ROOT_PATH + 'colegios/sedes/combo', { params: { idColegio: this.idColegio }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' Lista de sedes')
          } else{
            if (response.data.datos != 0) {
              response.data.datos.forEach(element => {
                this.comboSedes.push({ 'value': element.id, 'text': element.sede })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta de sedes de uin colegio. Intente más tarde.' + err)
        })
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
                this.comboColegios.push({ 'value': element.id, 'text': element.nemo })
              })
            }
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta de colegios. Intente más tarde.' + err)
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
