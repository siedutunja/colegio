<template>
  <div>
<!--
    <b-modal v-model="$store.state.idleVue.isIdle" size="lg" scrollable hide-footer title="Cerrar Sesión" ok-only>
      <div class="mx-3">
        <p>La sesión se cerrará en {{ time }} segundos</p>
      </div>
    </b-modal>
-->
  </div>
</template>

<script>
  import * as CONFIG from '@/assets/config.js'

  export default {
    data() {
      return {
        titulo: null,
        time: 900000 // 15 minutos = 900000
      }
    },
    methods: {
    },
    created() {
      let timerId = setInterval(() => {
        this.time -= 1000
        if (!this.$store.state.idleVue.isIdle) clearInterval(timerId)
  
        if (this.time < 1) {
          clearInterval(timerId)
          // logout
          //alert('La sesión se ha cerrado por inactividad.')
          sessionStorage.clear()
          window.location.href = CONFIG.ROOT_WEBSITE
        }
      }, 1000)
    }
  }
</script>