<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <CCard>
              <CCardFooter style="background: rgb(97, 157, 7); margin-top: -40; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);">
                <CRow>
                  <CCol lg="2" md="3">
                    <div class="text-center">
                      <img :src="escudoInstitucion" height="80"/>
                    </div>
                  </CCol>
                  <CCol lg="10" md="9">
                    <div class="mt-2">
                      <h6 style="margin-top: -5" class="text-light">SECRETARÍA DE EDUCACIÓN DE TUNJA</h6>
                      <h4 style="margin-top: -1" class="text-white">{{ $store.state.nombreInstitucion }}</h4>
                      <h6 style="margin-top: -1" class="text-white">AÑO LECTIVO {{ $store.state.aLectivo }}</h6>
                    </div>
                  </CCol>
                  <!--
                  <CCol lg="2" md="3">
                    <div class="text-center">
                      <img :src="escudoInstitucion" height="80"/>
                    </div>
                  </CCol>
                  -->
                </CRow>
              </CCardFooter>
            </CCard>
            <b-card-group deck class="mt-5">
              <b-card border-variant="light" class="text-center linkini" @click="irInstituciones">
                <b-card-text>
                  <span><b-icon icon="shop" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Instituciones </h5>
                </b-card-text>
                <b-card-text>Consulta las Instituciones Educativas Oficiales y No Oficiales adscritas a la Secretaría de Educación de Tunja</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini" @click="irSeguimientoPA">
                <b-card-text>
                  <span><b-icon icon="graph-up" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Plan de Acción</h5>
                </b-card-text>
                <b-card-text>Seguimiento al cumplimiento de las metas de cada uno de los indicadores del Plan de Acción</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini" @click="irMatriculas">
                <b-card-text>
                  <span><b-icon icon="person-check" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Matrículas</h5>
                </b-card-text>
                <b-card-text>Población estudiantil matriculada en las IE Oficiales y No oficiales de la Secretaría de Educación de Tunja</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini" @click="irInfraestructura">
                <b-card-text>
                  <span><b-icon icon="building" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Infraestructura</h5>
                </b-card-text>
                <b-card-text>Reportes del estado actual de la infraestructura en las Instituciones Educativas Oficiales</b-card-text>
              </b-card>
            </b-card-group>
            <b-card-group deck class="mt-5">
              <b-card border-variant="light" class="text-center linkini" @click="irPae">
                <b-card-text>
                  <span><b-icon icon="basket" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Pae </h5>
                </b-card-text>
                <b-card-text>Reportes de las entregas de los complementos del Plan de Alimentación Escolar - PAE</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini" @click="irSolicitudes">
                <b-card-text>
                  <span><b-icon icon="card-checklist" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Solicitudes</h5>
                </b-card-text>
                <b-card-text>Consulta y gestión de trámites solicitados por las Instituciones Educativas Oficiales y No Oficiales</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini" @click="irResoluciones">
                <b-card-text>
                  <span><b-icon icon="journal-bookmark-fill" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Resoluciones</h5>
                </b-card-text>
                <b-card-text>Relación y consulta de resoluciones emitidas por la Secretaría de Educación de Tunja</b-card-text>
              </b-card>
              <b-card border-variant="light" class="text-center linkini">
                <b-card-text>
                  <span><b-icon icon="book" font-scale="3"></b-icon></span>
                  <h5 class="mt-2">Normatividad</h5>
                </b-card-text>
                <b-card-text>Consulta las leyes y decretos expedidos por el MEN y la SE aplicables al sector educativo</b-card-text>
              </b-card>
            </b-card-group>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'Inicio',
    data () {
      return {
        escudoInstitucion: null,
        escudoSecretaria: null
      }
    },
    methods: {
      irSolicitudes() {
        this.$router.push('/inspeccion/solicitudesinspeccion')
      },
      irResoluciones() {
        this.$router.push('/consultaresoluciones')
      },
      irInfraestructura() {
        this.$router.push('/reportes/repinfraestructura')
      },
      irPae() {
        this.$router.push('/reportes/reppae')
      },
      irInstituciones() {
        this.$router.push('/consultas/consultacolegios')
      },
      irSeguimientoPA() {
        this.$router.push('/seguimientopa')
      },
      irMatriculas() {
        this.$router.push('/consultamatriculas')
      },
      iniciarVista() {
        this.escudoInstitucion = CONFIG.ROOT_ESCUDOS + this.$store.state.escudoInstitucion
        this.escudoSecretaria = CONFIG.ROOT_ESCUDOS + "escudo-base.png"
      }
    },
    beforeMount() {
      this.iniciarVista()
    }
  }
</script>

<style>
  .linkini:hover {
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    background: rgba(149, 195, 247, 0.108);
    cursor: pointer;
    color: rgb(97, 157, 7);
    /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);*/
  }
</style>
