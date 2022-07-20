<template>
  <CDropdown inNav class="c-header-nav-items" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <CIcon name="cil-apps"/>Gestión
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="dark"></CDropdownHeader>
    <CDropdownItem to="/establecimientos/gestioncolegios">
      <CIcon name="cilBank" />Instituciones Educativas
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem to="/usuarios/usuariossec">
      <CIcon name="cilUserFollow" />Usuarios Secretaría
    </CDropdownItem>
    <!--
    <CDropdownItem to="/planeacion/actividadespa">
      <CIcon name="cilList" />Menu 4
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem to="/planeacion/gestionpa">
      <CIcon name="cilBlur" />Menu 5
    </CDropdownItem>
    -->
  </CDropdown>
</template>

<script>
  export default {
    name: 'MenuGestion',
    data () {
      return { 
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>