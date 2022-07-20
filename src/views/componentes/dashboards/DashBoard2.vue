<template>
  <div>
    <Encabezado/>
    <DatosGeneralesColegios/>
  </div>
</template>

<script>
  import Encabezado from '@/views/componentes/Encabezado'
  import DatosGeneralesColegios from '@/views/componentes/DatosGeneralesColegios'
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'DashBoard2',
    components: {
      Encabezado,
      DatosGeneralesColegios
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
