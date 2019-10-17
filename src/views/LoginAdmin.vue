<template>
  <v-layout align-center justify-center height="600">
    <v-flex xs12 sm8 md6 lg4>
      <v-card class="elevation-10">
        <v-toolbar class="purple" dark card flat height="80vh">
          <v-layout column>
            <v-toolbar-title class="display-1 font-weight-light">Login Administrativo.</v-toolbar-title>
            <div class="hr-login"></div>
            <span class="caption mt-1">Ingresa tus credenciales.</span>
          </v-layout>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            label="Email"
            type="email"
            v-model="formulario.email"
            :error-messages="errorsEmail"
            @blur="$v.formulario.email.$touch()"
          ></v-text-field>
          <v-text-field
            @keyup.enter="verificar"
            counter
            maxlength="20"
            :type="show2 ? 'text' : 'password'"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            label="Password"
            v-model="formulario.password"
            :error-messages="errorsPassword"
            @blur="$v.formulario.password.$touch()"
          ></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-layout justify-center>
            <v-btn @click="verificar" color="primary" :disabled="$v.formulario.$invalid" large block>Ingresar</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-dialog v-model="ocupado.visible" max-width="400" persistent>
      <v-card>
        <v-toolbar color="primary" dark card>
          <v-toolbar-title>{{ocupado.titulo}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="subheading">{{ocupado.mensaje}}</v-card-text>
        <v-card-text>
          <v-progress-linear :indeterminate="true" color="primary"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      user: 1,
      show2: false,
      submitStatus: null,

      formulario: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    formulario: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  computed: {
    //importante

    ...mapState(["ocupado"]),
    ...mapState({ usuario: state => state.usuario }),
    ...mapGetters(["saludo"]),
    errorsEmail() {
      let errores = [];
      if (!this.$v.formulario.email.$dirty) {
        return errores;
      }
      if (!this.$v.formulario.email.required) {
        errores.push("Ingresa tu email.");
      }
      if (!this.$v.formulario.email.email) {
        errores.push("Ingresa un email válido.");
      }
      return errores;
    },
    errorsPassword() {
      let errors = [];
      if (!this.$v.formulario.password.$dirty) {
        return errors;
      }
      if (!this.$v.formulario.password.required) {
        errors.push("Ingresa tu contraseña.");
      }
      if (!this.$v.formulario.password.minLength) {
        errors.push("Ingresa una contraseña con almenos 6 caracteres.");
      }
      if (!this.$v.formulario.password.maxLength) {
        errors.push("Ingresa una contraseña que no supere los 20 caracteres.");
      }
      return errors;
    }
  },
  methods: {
    //importante
    ...mapMutations([
      "mostrarOcupado",
      "ocultarOcupado",
      "mostrarExito",
      "actualizarUsuario"
    ]),

    verificar() {
      if (this.$v.formulario.$invalid) {
        this.$v.formulario.$touch();
        return;
      }
      let usuario = {
        userName: "admin",
        nombres: "Admin"
      };

      //esta es la variable con los datos a trabajar con ellos
      let ocupado = {
        titulo: "Validando Credenciales...",
        mensaje: "Estamos validando tu información."
      };
      //posteriormente se prosede  a utilizar el mutator para espesificar lo que le enviaremos
      this.mostrarOcupado(ocupado);

      setTimeout(() => {
        this.ocultarOcupado();
        this.actualizarUsuario(usuario);

        this.mostrarExito(this.saludo);
        this.$router.push({ name: "Dashboard" });
      }, 2000);
    }
  }
};
</script>

<style scoped>
.hr-login {
  height: 1px;
  width: 49vh;
  background-color: white;
}
</style>