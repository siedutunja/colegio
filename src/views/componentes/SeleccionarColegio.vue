<template>
  <div>
    <b-row>
      <b-col lg="6" md="12">
        <b-form-group label="Colegios:" label-for="colegios">
          <b-form-select  id="colegios" name="colegios" ref="colegios" v-model="idColegio" :options="comboColegios" @change="enviarColegio"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'SeleccionarColegio',
    data () {
      return {
        idColegio: null,
        comboColegios: [],
        form: {
          id: null,
          nemo: null,
        }
      }
    },
    methods: {
      enviarColegio() {
        let elemento = document.getElementById('colegios')
        this.form.id = this.idColegio
        this.form.nemo = elemento[elemento.selectedIndex].text
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
