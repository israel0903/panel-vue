<template>
    <v-app-bar app flat color="indigo darken-2" dark height="60"
      scroll-target="#scrolling-techniques">
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ titulo }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in menu" :key="item.icon" :to="item.link" flat>{{ item.title }}</v-btn>
        <v-btn text flat @click="cambiarVista()">Iniciar Sesion</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in menu" :key="item.icon">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    titulo: "Mi Lista",

    menu: [
      { icon: "home", title: "Inicio", link: "/" },
      { icon: "info", title: "Nosotros" },
      { icon: "warning", title: "Contacto" }
    ]
  }),
  methods: {
    menuItems() {
      return this.menu
    }
  },
  methods:{
    cambiarVista(){
      this.$store.state.vista = true
      this.$router.push({ name: "LoginAdmin" })
    }
  }
};
</script>