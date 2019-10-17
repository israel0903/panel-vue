<template>
  <div>
    <view-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <view-footer />
  </div>
</template>

<script>
export default {
  components: {
    ViewHeader: () => import("./layout/Header"),
    ViewInicio: () => import("../views/PaginaPrincipal"),
    ViewFooter: () => import("./layout/Footer")
  }
};
</script>