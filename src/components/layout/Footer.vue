<template>
    <v-footer dark padless>
      <v-layout justify-center class="indigo lighten-1 white--text text-center" wrap>
        <v-flex xs12>
          <div class="my-2">
            <v-btn v-for="icon in icons" :key="icon" class="white--text mx-3" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs10 md5 class="white--text pt-0">
          <v-layout wrap>
            <v-flex xs12>
              <h2 class="ma-2">Contáctanos</h2>
              <v-text-field solo flat class="mt-2" label="Ingresa tu Correo"></v-text-field>
              <v-textarea solo flat row-height="16px" rows="3" label="Escríbenos tu comentario"></v-textarea>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs11 sm6 md4>
          <h2 class="ma-2">Datos de Contacto</h2>
          <p>Telefono: +569734637</p>
          <p>Correo: eample@email.com</p>
        </v-flex>
        <v-flex xs11 sm6 md2>
          <h2 class="ma-2">Conócenos</h2>
          <v-layout class="my-2" column>
            <a v-for="(item, index) in links" :key="index" :href="item.to" class="link-terminos subtitle-1">{{item.name}}</a>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <v-divider></v-divider>
          <div class="pa-2">
            {{ new Date().getFullYear() }} —
            <a class="link-terminos">Términos y Condiciones</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {
  data(){
    return{
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      links: [
        { to: '/preguntas-frecuentes',
          name: 'Servicios'},
        { to: '/preguntas-frecuentes',
          name: 'Búsqueda de Lista'},
        { to: '/preguntas-frecuentes',
          name: 'Quiénes Somos'},
        { to: '/preguntas-frecuentes',
          name: 'Métodos de Pago'},
        { to: '/preguntas-frecuentes',
          name: 'Preguntas Frecuentes'}
      ]
    }
  }
}
</script>