<template>
  <div>
    <CRow>
      <CCol>
        <CCard accent-color="info">
          <CCardHeader>
            <h5 class="my-0">Consulta por Documento</h5>
          </CCardHeader>
          <CCardBody>
            <b-form @submit.stop.prevent="consultarDocumento">
              <b-row class="mb-2">
                <b-col class="mt-1" lg="6">
                  <b-form-group label="Número del Documento*" label-for="documento">
                    <b-form-input id="documento" ref="documento" v-model.trim="$v.form.documento.$model" :state="validateState('documento')" aria-describedby="feedDocumento" autocomplete="off" maxlength="20" placeholder="" autofocus></b-form-input>
                    <b-form-invalid-feedback id="feedDocumento" >El número de documento debe contener mínimo 7 caracteres.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button type="submit" variant="info" class="px-5">Consultar</b-button>
            </b-form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'
  import { validationMixin } from "vuelidate";
  import { required, minLength } from "vuelidate/lib/validators";

  export default {
    name: 'ConsultaDocumentoEstudiante',
    mixins: [validationMixin],
    data () {
      return {
        form: {
          documento: '',
          idEstudiante: null
        }
      }
    },
    validations: {
      form: {
        documento: { required, minLength: minLength(7) }
      }
    },
    methods: {
      async consultarDocumento() {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return
        }
        this.form.idEstudiante = null
        await axios
        .get(CONFIG.ROOT_PATH + 'estudiantes/consulta/documento', { params: { documento: this.form.documento }})
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Consulta Documento Estudiante')
          } else{
            this.form.idEstudiante = response.data.datos
          }
        })
        this.$emit("datosEncontrados", this.form)
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name]
        return $dirty ? !$error : null
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
  }
</script>
