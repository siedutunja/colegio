<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardFooter color="" text-color="dark">
            <CRow>
              <CCol lg="2" md="3">
                <div class="text-center">
                  <img :src="escudoEntidad1" height="80"/>
                </div>
              </CCol>
              <CCol lg="8" md="6">
                <div class="text-center mt-2">
                  <h5 style="margin-top: -5" class="text-muted">ALCALDÍA MAYOR DE TUNJA</h5>
                  <h3 style="margin-top: -5" class="text-dark">SECRETARÍA DE EDUCACIÓN</h3>
                  <h6 style="margin-top: -1" class="text-muted">{{ eslogan }}</h6>
                </div>
              </CCol>
              <CCol lg="2" md="3">
                <div class="text-center">
                  <img :src="escudoEntidad2" height="80"/>
                </div>
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'Encabezado',
    data () {
      return {
        eslogan: null,
        escudoEntidad1: null,
        escudoEntidad2: null
      }
    },
    methods: {
      iniciarVista() {
        this.eslogan = this.$store.state.descCuatrienio
        this.escudoEntidad1 = CONFIG.ROOT_ESCUDOS + "escudo-base.png"
        this.escudoEntidad2 = CONFIG.ROOT_ESCUDOS + "escudo-cuatrienio.png"
      }
    },
    beforeMount() {
      this.iniciarVista()
    }
  }
</script>
