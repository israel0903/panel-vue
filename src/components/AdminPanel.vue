<template>
  <div>
    <v-layout v-if="usuario">
      <core-app-bar />
      <core-drawer />
      <core-view />
    </v-layout>

      <core-login v-if="!usuario" />
    
    <v-snackbar v-if="usuario"
      v-model="notificacion.visible"
      :color="notificacion.color"
      multi-line
      top
      :timeout="6000"
      dark
    >
      {{notificacion.mensaje }}
      <v-btn flat text @click="ocultarNotificacion">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CoreDrawer: () => import("./core/Drawer.vue"),
    CoreAppBar: () => import("./core/AppBar.vue"),
    CoreView: () => import("./core/View.vue"),
    CoreLogin: () => import("../views/LoginAdmin")
  },
  computed:{
    ...mapState(["usuario", "notificacion"])
  },
  methods:{
    ...mapMutations([
      "ocultarNotificacion"
    ]),
  }
  
};
</script>