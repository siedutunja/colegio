<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="w-100 justify-content-center">
      <CCol md="6">
        <div class="w-100">
          <div class="clearfix text-danger">
            <b-card class="text-center">
              <h1 class="display-4">¡Ups!</h1>
              <h5>No se encontró la página que está solicitando.</h5>
              <b-button type="submit" class="btn mb-2 mt-4" variant="info" @click="regresar">Regresar</b-button>
            </b-card>
          </div>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
  export default {
    name: 'Extraviada',
    methods: {
      regresar() {
        this.$router.push('/')
      }
    }
  }
</script>
