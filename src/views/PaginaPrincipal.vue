<template>
  <v-card flat>
    <v-parallax
      height="600"
      dark
      src="https://todoporviajar.com/wp-content/uploads/ian-schneider-108618-1-1000x668.jpg"
    >
      <v-layout text-center align-center justify-center wrap>
        <v-flex xs12>
          <h1 color="primary" class="display-2 mb-2">Mi Lista</h1>
          <p class="subtitle-1">
            Crea tu lista de obsequios simbólicos,recibe el dinero de los regalos en tu cuenta
            bancaria y haz con él lo que quieras.
            <br />Para todo tipo de eventos o celebraciones
          </p>
          <v-btn class="ma-2" color="primary" href="#comenzar">Comenzar YA</v-btn>
          <v-btn class="ma-2" color="primary" href="#pasos">¿Cómo lo hago?</v-btn>
        </v-flex>
      </v-layout>
    </v-parallax>

    <v-container fluid id="pasos" class="white--text" indigo lighten-3>
      <v-layout text-center>
        <v-flex xs12>
          <h2 class="mt-10 display-1 font-weight-thin">¿No sabes cómo hacerlo?</h2>
          <v-layout align-center justify-center>
            <div class="hr-title"></div>
          </v-layout>
          <p class="pt-2">Conoce los pasos para utilizar nuestro servicio.</p>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center class="mb-10">
        <v-flex xs11 md10>
          <v-layout v-if="vista == 1" align-center justify-space-around row>
            <v-flex v-for="(item, index) in pasosfestejado" :key="index" md3>
              <v-layout align-center justify-center text-center wrap>
                <v-avatar size="25vh" class="ma-4">
                  <img :src="item.img" alt="John" />
                </v-avatar>
                <p>{{item.descripcion}}</p>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout v-if="vista == 2" align-center justify-space-around row>
            <v-flex v-for="(item, index) in pasosinvitado" :key="index" md3>
              <v-layout align-center justify-center text-center wrap>
                <v-avatar size="25vh" class="ma-4">
                  <img :src="item.img" alt="John" />
                </v-avatar>
                <p>{{item.descripcion}}</p>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout text-center align-center justify-center>
            <v-flex xs12 sm6>
              <v-layout justify-end>
                <v-btn
                  elevation="0"
                  class="mt-4 mr-4"
                  width="20vh"
                  color="primary"
                  @click="actualizarPasos(-1)"
                >Festejado</v-btn>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm6>
              <v-layout justify-start>
                <v-btn
                  elevation="0"
                  class="mt-4 ml-4"
                  width="20vh"
                  color="primary"
                  @click="actualizarPasos(1)"
                >Invitado</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="mb-10 mt-6">
      <v-layout id="comenzar" text-center class="pt-5" wrap>
        <v-flex xs12>
          <h1 class="display-1 font-weight-thin">Comenzemos...</h1>
          <v-layout align-center justify-center>
            <div class="hr-title"></div>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <p class="pt-2">Escoge la celebración que deseas festejar.</p>
        </v-flex>
      </v-layout>
      <v-row>
        <v-col v-for="(item, index) in eventos" :key="index" sm="3">
          <v-img class="celebration-img" style="height: 40vh" :src="item.imagen">
            <v-layout align-end justify-center text-center fill-height>
              <v-spacer>
                <v-card-text class="celebration-caption headline">{{item.nombre}}</v-card-text>
              </v-spacer>
            </v-layout>
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-layout text-center class="mt-4">
      <v-flex xs12>
        <h2 class="display-1 font-weight-thin">Conócenos</h2>
        <v-layout align-center justify-center>
          <div class="hr-title"></div>
        </v-layout>
        <p class="pt-2">Descubre cuales son los beneficios que puedes obtener.</p>

        <v-layout wrap align-center justify-center>
          <v-flex xs12>
            <v-card flat color="indigo" dark>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-img src="https://www.regalanovios.com/new/images/novios.png"></v-img>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis ea labore quasi, aperiam exercitationem id vitae, sunt aliquid praesentium eligendi laudantium saepe ipsam, ipsa ad amet corporis adipisci temporibus?</v-card-text>
                  <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis, voluptatibus molestias beatae id vel, totam, dignissimos dolorum quaerat nam cum accusantium optio! Labore accusamus delectus impedit illo omnis minus.</v-card-text>
                  <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis, voluptatibus molestias beatae id vel, totam, dignissimos dolorum quaerat nam cum accusantium optio! Labore accusamus delectus impedit illo omnis minus.</v-card-text>
                  <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis, voluptatibus molestias beatae id vel, totam, dignissimos dolorum quaerat nam cum accusantium optio! Labore accusamus delectus impedit illo omnis minus.</v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-container class="mb-5">
      <v-layout text-center>
        <v-flex xs12>
          <h2 class="mt-10 display-1 font-weight-thin">Calificaciones</h2>
          <v-layout align-center justify-center>
            <div class="hr-title"></div>
          </v-layout>
          <p class="pt-2">Conoce algunas aprecioaciones sobre nuestros servicios</p>
          <v-layout text-left row>
            <v-flex v-for="(item, index) in calificaciones" :key="index" xs12 sm6 md4>
              <v-container>
                <v-card>
                  <v-img position="top" class="white--text" height="200px" :src="item.img">
                    <v-card-title class="align-end fill-height">{{item.nombre}}</v-card-title>
                  </v-img>

                  <v-card-text>
                    <span>Ejemplo Titulo</span>
                    <br />
                    <span class="text--primary">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quos sunt, minima facilis maxime beatae ratione hic quo quaerat.</span>
                    </span>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn text color="orange">Leer Más</v-btn>
                    <v-btn text color="orange">Ver Perfil</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { firebase, db } from "@/firebase";
let catRef = db.collection("categoriaEventos");
export default {
  data() {
    return {
      vista: 1,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src:
            "https://www.lafactoriadelshow.com/blog/wp-content/uploads/2015/05/fiesta-de-cumplea%C3%B1os-1.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      eventos: [],
      pasosfestejado: [
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion: "Elije el tipo de evento que deseas festejar"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Crea una cuenta de usuario rellenando el formulario de registro"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion: "Crea tu lista y agrega los regalos que desees a ella"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Y listo, solo queda esperar para que tus invitados envíen su regalo"
        }
      ],
      pasosinvitado: [
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Selecciona el tipo de evento al que fuiste invitado y luego busca el evento es específico"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Puedes registrarte como usuario si es que lo deseas. En caso de que sea un evento privado, ingresa el pass"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Escoge el regalo que quieras dar de la lista ya establecida o crea tus propios regalos personalizados"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/john.jpg",
          descripcion:
            "Agrega los regalos al carrito junto a una dedicatoria y listo. Solo debes pagar la compra"
        }
      ],
      calificaciones: [
        {
          img:
            "https://cdn.rapzilla.com/wp-content/uploads/2017/01/gawvi-in-the-water.JPG",
          nombre: "Gabriel Azucena"
        },
        {
          img:
            "https://cdn.rapzilla.com/wp-content/uploads/2017/01/gawvi-in-the-water.JPG",
          nombre: "Gabriel Azucena"
        },
        {
          img:
            "https://cdn.rapzilla.com/wp-content/uploads/2017/01/gawvi-in-the-water.JPG",
          nombre: "Gabriel Azucena"
        }
      ],

      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  },
  created() {
    this.mostrarDatos();
  },
  methods: {
    actualizarPasos(pasos) {
      this.vista += pasos;

      if (this.vista > 2) {
        this.vista = 2;
      } else if (this.vista < 1) {
        this.vista = 1;
      }
    },
    mostrarDatos() {
      catRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.eventos.push(doc.data());
        });
      });
    }
  }
};
</script>

<style>
.hr-title {
  height: 1px;
  width: 10%;
  background-color: aqua;
}
.celebration-caption {
  color: white;
  vertical-align: end;
}
.link-terminos {
  text-decoration: none !important;
  color: white !important;
}
.celebration-img{
  filter: brightness(70%);
}
.celebration-img:hover{
  transform: scale(1.1);
  filter: brightness(100%);
}
</style>