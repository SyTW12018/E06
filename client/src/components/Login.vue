<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <div v-if="warning" class="alert alert-danger" role="alert">
          <i class="fas fa-exclamation-circle">&nbsp;&nbsp;</i>Datos incorrectos. Vuélvelo a intentar.
        </div>
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Acceso a tu cuenta</h1>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Introduce tu correo electrónico"
              required
            >
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Introduce tu contraseña"
              required
            >
          </div>
          <button class="btn btn-lg btn-block" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import EventBus from "./EventBus";

export default {
  data() {
    return {
      email: "",
      password: "",
      warning: false
    };
  },

  methods: {
    login() {
      axios
        .post("users/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          // console.log(res.data.error);

          // Si la contraseña o el emain es incorrecta
          if (res.data.error !== undefined) {
            router.push({ name: "Login" });
            this.warning = true;
          } else {
            localStorage.setItem("usertoken", res.data);

            this.email = "";
            this.password = "";
            router.push({ name: "Profile" });
          }
        })
        .catch(err => {
          // console.log("hola");
          // router.push({ name: "Login" });
        });
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>

<style>
.btn.btn-lg.btn-block {
  background-color: #ea8d8d; /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, #ea8d8d, #937dd3);
  color: white;
}
</style>
