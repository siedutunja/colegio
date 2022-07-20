<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            :src="$store.state.foto"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center text-light" color="dark">
      <strong>Cuenta del Usuario</strong>
    </CDropdownHeader>
    <!--
    <CDropdownItem>
      <CIcon name="cil-bell"/> Alertas
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Mensajes
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    -->
    <CDropdownItem to="/perfil">
      <CIcon name="cil-user" /> Perfil
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem @click="cerrarSesion">
      <CIcon name="cil-lock-locked" /> Cerrar Sesión
    </CDropdownItem>
  </CDropdown>
</template>

<script>
  import * as CONFIG from '@/assets/config.js'

  export default {
    name: 'TheHeaderDropdownAccnt',
    data () {
      return { 
        itemsCount: 1
      }
    },
    methods: {
      cerrarSesion() {
        this.$bvModal.msgBoxConfirm('¿Esta seguro terminar la sesión?', {
          title: 'Cerrar Sesión',
          size: '',
          buttonSize: '',
          okVariant: 'success',
          okTitle: 'Si',
          cancelTitle: 'Cancelar',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          if (value) {
            sessionStorage.clear()
            location.replace(CONFIG.ROOT_MODULO_LOGIN)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>