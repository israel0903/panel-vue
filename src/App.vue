<template>
  <v-app>
    <div v-if="vista">
      <panel-administracion />
    </div>
    <div v-if="!vista">
      <pagina-inicio />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed:{
    vista(){
      return this.$store.state.vista
    }
  },
  components: {
    PanelAdministracion: () => import("./components/AdminPanel"),
    PaginaInicio: () => import("./components/Home")
  },
};
</script>