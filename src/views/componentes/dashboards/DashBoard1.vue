<template>
  <div>
    <Encabezado/>
    <!--
    <CRow>
      <CCol>
        <CCard accent-color="info">
          <CCardBody class="text-center">
            <b-row>
              <b-col lg="12">
                <img src="escudo-tunja.png" height="100"/>
              </b-col>
              <b-col lg="12">
                <h6>{{ this.alcaldia }}</h6>
              </b-col>
              <b-col lg="12">
                <h4>{{ this.secretaria }}</h4>
              </b-col>
              <b-col lg="12">
                <h6>{{ this.proyecto }}</h6>
              </b-col>
            </b-row>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    -->
  </div>
</template>

<script>
  import Encabezado from '@/views/componentes/Encabezado'
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'DashBoard1',
    components: {
      Encabezado
    },
    data () {
      return {
        alcaldia: null,
        secretaria: null,
        proyecto: null
      }
    },
    methods: {
      iniciarDashboard() {
        this.alcaldia = CONFIG.ALCALDIA
        this.secretaria = CONFIG.SECRETARIA
        this.proyecto = CONFIG.PROYECTO
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    beforeMount() {
      this.iniciarDashboard()
    }
  }
</script>
