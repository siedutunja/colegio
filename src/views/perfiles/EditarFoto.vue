<template>
  <div>
    <CRow>
      <CCol>
        <b-row>  
          <b-col lg="12" class="text-center">
            <div class="video-wrap">
              <p>Camara</p>
              <video id="video" playsinline autoplay></video>
            </div>
            <div class="controller">
              <b-button class="small mt-2" variant="success" @click="capturarImagen">Capturar Foto</b-button>
            </div>
            <canvas id="canvas" width="250" height="250"></canvas>
          </b-col>
        </b-row>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  export default {
    name: 'EditarFoto',
    data () {
      return {
        imagen: null
      }
    },
    methods: {
      actualizarFoto() {
        this.$emit("retorno", 1)
      },
      capturarImagen() {
        var context = canvas.getContext('2d')
        context.drawImage(video, 0, 0, 250, 250)
        this.imagen = canvas.toDataURL('image/jpeg')
        this.$emit("retorno", this.imagen)
      },
      handleSuccess(stream) {
        window.stream = stream
        video.srcObject = stream
      },
      async iniciarVista() {
        const video = document.getElementById('video')
        const canvas = document.getElementById('canvas')
        const photo = document.querySelector('#photo')
        const constraints = {
          audio: false,
          video: {
            width: 250,
            height: 250
          }
        }
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints)
          this.handleSuccess(stream)
        } catch (e) {
          alert(e.toString())
        }
      }
      
    },
    beforeMount() {
      this.iniciarVista()
    }
  }
</script>
