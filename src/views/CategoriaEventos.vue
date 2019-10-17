<template>
  <v-container>
    <v-card>
      <v-card-text>
        <h2>Mantenedor Tipos de Evento</h2>
      </v-card-text>
    </v-card>

    <v-data-table :headers="headers" :items="desserts" sort-by="nombre" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Lista Tipos de Evento</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Agregar Tipo de Evento</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.imagen" label="Imagen"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">mdi-account-edit</v-icon>
        <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { firebase, db } from "@/firebase";
let catRef = db.collection("categoriaEventos");
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Nombre",
        align: "left",
        sortable: false,
        value: "nombre"
      },
      { text: "Imagen", value: "imagen" },
      { text: "Opciones", value: "action", sortable: false }
    ],
    editedItem: {
      nombre: "",
      imagen: ""
    },
    defaultItem: {
      nombre: "",
      imagen: ""
    },
    testItem: {
      nombre: "",
      imagen: ""
    },
    editedIndex: -1,
    desserts: []
  }),

  created() {
    this.mostrarDatos();
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Categoría" : "Editar Categoría";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.testItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      this.desserts = [];
      confirm("¿Estás seguro de que deseas eliminar este elemento?") &&
        (await catRef
          .where("nombre", "==", item.nombre)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let iddoc = doc.id;
              catRef.doc(iddoc).delete();
            });
          }));
      this.mostrarDatos();
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.testItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    async save() {
      this.desserts = [];
      let iddoc = ''
      if (!this.testItem.nombre == '') {
        await catRef
          .where("nombre", "==", this.testItem.nombre)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              iddoc = doc.id
            });
          });
          console.log(iddoc);
          catRef.doc(iddoc)
           .update({
            nombre: this.editedItem.nombre,
            imagen: this.editedItem.imagen});
      } else {
        await catRef.add(this.editedItem);
      }
      this.mostrarDatos();
      this.close();
    },
    mostrarDatos() {
      catRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.desserts.push(doc.data());
        });
      });
    }
  }
};
</script>