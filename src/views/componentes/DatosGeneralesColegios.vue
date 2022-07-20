<template>
  <div>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown color="primary" header="Colegios por Sector" :text="totColegiosOficiales + totColegiosNoOficiales + ' ' + 'COLEGIOS'">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-4">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Oficiales</span>
                  <span class="ml-auto font-weight-bold">{{totColegiosOficiales}} <small>({{porColegiosOficiales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosOficiales" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">No Oficiales</span>
                  <span class="ml-auto font-weight-bold">{{totColegiosNoOficiales}} <small>({{porColegiosNoOficiales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosNoOficiales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown color="primary" header="Sedes por Sector" :text="totSedesOficiales + totSedesNoOficiales + ' ' + 'SEDES'">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-4">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Oficiales</span>
                  <span class="ml-auto font-weight-bold">{{totSedesOficiales}} <small>({{porSedesOficiales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesOficiales" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">No Oficiales</span>
                  <span class="ml-auto font-weight-bold">{{totSedesNoOficiales}} <small>({{porSedesNoOficiales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesNoOficiales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown color="info" header="Colegios por Zona" :text="totColegiosUrbanos + totColegiosRurales + ' ' + 'COLEGIOS'">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-4">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Urbanos</span>
                  <span class="ml-auto font-weight-bold">{{totColegiosUrbanos}} <small>({{porColegiosUrbanos}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosUrbanos" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Rurales</span>
                  <span class="ml-auto font-weight-bold">{{totColegiosRurales}} <small>({{porColegiosRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosRurales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown color="info" header="Sedes por Zona" :text="totSedesUrbanas + totSedesRurales + ' ' + 'SEDES'">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-4">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Urbanas</span>
                  <span class="ml-auto font-weight-bold">{{totSedesUrbanas}} <small>({{porSedesUrbanas}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesUrbanas" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Rurales</span>
                  <span class="ml-auto font-weight-bold">{{totSedesRurales}} <small>({{porSedesRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesRurales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="6">
        <CWidgetDropdown color="facebook" :header="totColegiosOficiales + ' Colegios Oficiales'" text="">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-5">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Colegios Urbanos</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.oficialesurbanos}} <small>({{porColegiosOfiUrbanos}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosOfiUrbanos" color="success"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Colegios Rurales</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.oficialesrurales}} <small>({{porColegiosOfiRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosOfiRurales" color="success"/>
                </div>
              </div>
            </ul>
            <ul class="horizontal-bars type-2 mt-3 pr-5">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-location-pin" class="progress-group-icon"/>
                  <span class="title">Sedes Urbanas</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.sedesoficialesurbanas}} <small>({{porSedesOfiUrbanas}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesOfiUrbanas" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-location-pin" class="progress-group-icon"/>
                  <span class="title">Sedes Rurales</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.sedesoficialesrurales}} <small>({{porSedesOfiRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesOfiRurales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="6">
        <CWidgetDropdown color="linkedin" :header="totColegiosNoOficiales + ' Colegios No Oficiales'" text="">
          <template #footer>
            <ul class="horizontal-bars type-2 mt-3 pr-5">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Colegios Urbanos</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.nooficialesurbanos}} <small>({{porColegiosNoOfiUrbanos}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosNoOfiUrbanos" color="success"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-bank" class="progress-group-icon"/>
                  <span class="title">Colegios Rurales</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.nooficialesrurales}} <small>({{porColegiosNoOfiRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porColegiosNoOfiRurales" color="success"/>
                </div>
              </div>
            </ul>
            <ul class="horizontal-bars type-2 mt-3 pr-5">
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-location-pin" class="progress-group-icon"/>
                  <span class="title">Sedes Urbanas</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.sedesnooficialesurbanas}} <small>({{porSedesNoOfiUrbanas}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesNoOfiUrbanas" color="warning"/>
                </div>
              </div>
              <div class="progress-group">
                <div class="progress-group-header">
                  <CIcon name="cil-location-pin" class="progress-group-icon"/>
                  <span class="title">Sedes Rurales</span>
                  <span class="ml-auto font-weight-bold">{{infoColegios.sedesnooficialesrurales}} <small>({{porSedesNoOfiRurales}}%)</small></span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" :value="porSedesNoOfiRurales" color="warning"/>
                </div>
              </div>
            </ul>
          </template>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import axios from "axios"
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'DatosGeneralesColegios',
    components: {
    },
    data () {
      return {
        infoColegios: {},
        totColegiosOficiales: 0,
        totColegiosNoOficiales: 0,
        totSedesOficiales: 0,
        totSedesNoOficiales: 0,
        totColegiosUrbanos: 0,
        totColegiosRurales: 0,
        totSedesUrbanas: 0,
        totSedesRurales: 0,
        porColegiosOfiUrbanos: 0,
        porColegiosOfiRurales: 0,
        porColegiosNoOfiUrbanos: 0,
        porColegiosNoOfiRurales: 0,
        porSedesOfiUrbanas: 0,
        porSedesOfiRurales: 0,
        porSedesNoOfiUrbanas: 0,
        porSedesNoOfiRurales: 0,
        porColegiosOficiales: 0,
        porColegiosNoOficiales: 0,
        porSedesOficiales: 0,
        porSedesNoOficiales: 0,
        porColegiosUrbanos: 0,
        porColegiosRurales: 0,
        porSedesUrbanas: 0,
        porSedesRurales: 0
      }
    },
    methods: {
      datosColegios() {
        axios
        .get(CONFIG.ROOT_PATH + 'colegios/datosgenerales')
        .then(response => {
          if (response.data.error){
            this.mensajeEmergente('danger',CONFIG.TITULO_MSG,response.data.mensaje + ' - Información general de colegios')
          } else{
            this.infoColegios = response.data.datos
            this.porColegiosOfiUrbanos = Math.round((this.infoColegios.oficialesurbanos * 100) / (this.infoColegios.oficialesurbanos + this.infoColegios.oficialesrurales), -1)
            this.porColegiosOfiRurales = Math.round((this.infoColegios.oficialesrurales * 100) / (this.infoColegios.oficialesurbanos + this.infoColegios.oficialesrurales), -1)
            this.porColegiosNoOfiUrbanos = Math.round((this.infoColegios.nooficialesurbanos * 100) / (this.infoColegios.nooficialesurbanos + this.infoColegios.nooficialesrurales), -1)
            this.porColegiosNoOfiRurales = Math.round((this.infoColegios.nooficialesrurales * 100) / (this.infoColegios.nooficialesurbanos + this.infoColegios.nooficialesrurales), -1)
            this.porSedesOfiUrbanas = Math.round((this.infoColegios.sedesoficialesurbanas * 100) / (this.infoColegios.sedesoficialesurbanas + this.infoColegios.sedesoficialesrurales), -1)
            this.porSedesOfiRurales = Math.round((this.infoColegios.sedesoficialesrurales * 100) / (this.infoColegios.sedesoficialesurbanas + this.infoColegios.sedesoficialesrurales), -1)
            this.porSedesNoOfiUrbanas = Math.round((this.infoColegios.sedesnooficialesurbanas * 100) / (this.infoColegios.sedesnooficialesurbanas + this.infoColegios.sedesnooficialesrurales), -1)
            this.porSedesNoOfiRurales = Math.round((this.infoColegios.sedesnooficialesrurales * 100) / (this.infoColegios.sedesnooficialesurbanas + this.infoColegios.sedesnooficialesrurales), -1)
            this.totColegiosOficiales = this.infoColegios.oficialesurbanos + this.infoColegios.oficialesrurales
            this.totColegiosNoOficiales = this.infoColegios.nooficialesurbanos + this.infoColegios.nooficialesrurales
            this.porColegiosOficiales = Math.round((this.totColegiosOficiales * 100) / (this.totColegiosOficiales + this.totColegiosNoOficiales), -1)
            this.porColegiosNoOficiales = Math.round((this.totColegiosNoOficiales * 100) / (this.totColegiosOficiales + this.totColegiosNoOficiales), -1)
            this.totSedesOficiales = this.infoColegios.sedesoficialesurbanas + this.infoColegios.sedesoficialesrurales
            this.totSedesNoOficiales = this.infoColegios.sedesnooficialesurbanas + this.infoColegios.sedesnooficialesrurales
            this.porSedesOficiales = Math.round((this.totSedesOficiales * 100) / (this.totSedesOficiales + this.totSedesNoOficiales), -1)
            this.porSedesNoOficiales = Math.round((this.totSedesNoOficiales * 100) / (this.totSedesOficiales + this.totSedesNoOficiales), -1)
            this.totColegiosUrbanos = this.infoColegios.oficialesurbanos + this.infoColegios.nooficialesurbanos
            this.totColegiosRurales = this.infoColegios.oficialesrurales + this.infoColegios.nooficialesrurales
            this.porColegiosUrbanos = Math.round((this.totColegiosUrbanos * 100) / (this.totColegiosUrbanos + this.totColegiosRurales), -1)
            this.porColegiosRurales = Math.round((this.totColegiosRurales * 100) / (this.totColegiosUrbanos + this.totColegiosRurales), -1)
            this.totSedesUrbanas = this.infoColegios.sedesoficialesurbanas + this.infoColegios.sedesnooficialesurbanas
            this.totSedesRurales = this.infoColegios.sedesoficialesrurales + this.infoColegios.sedesnooficialesrurales
            this.porSedesUrbanas = Math.round((this.totSedesUrbanas * 100) / (this.totSedesUrbanas + this.totSedesRurales), -1)
            this.porSedesRurales = Math.round((this.totSedesRurales * 100) / (this.totSedesUrbanas + this.totSedesRurales), -1)
          }
        })
        .catch(err => {
          this.mensajeEmergente('danger',CONFIG.TITULO_MSG,'Algo salio mal y no se pudo realizar la consulta información general de colegios. Intente más tarde.')
        })
      },
      mensajeEmergente(variante, titulo, contenido) {
        this.$bvToast.toast(contenido, { title: titulo, variant: variante, toaster: "b-toaster-top-center", solid: true, autoHideDelay: 4000, appendToast: false })
      }
    },
    beforeMount() {
      this.datosColegios()
    }
  }
</script>
