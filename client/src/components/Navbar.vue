<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar1"
      aria-controls="navbar1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/">Inicio</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link class="nav-link text-dark" to="/login">Acceso</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link class="nav-link text-dark" to="/register">Registro</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link text-dark" to="/profile">Perfil</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link text-dark" to="/reco">Recomendaciones</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/juegos">Todos los juegos</router-link>
        </li>

        <li v-if="auth=='loggedin'" class="nav-item">
          <a class="nav-link text-dark" href v-on:click="logout">Salir</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import EventBus from "./EventBus";

EventBus.$on("logged-in", test => {
  console.log(test);
});

export default {
  data() {
    return {
      auth: "",
      user: ""
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("usertoken");
    }
  },

  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
  }
};
</script>


<style>
.navbar.navbar-expand-lg.navbar-dark {
  -webkit-box-shadow: 0px 1px 8px 0px rgba(107, 104, 107, 1);
  -moz-box-shadow: 0px 1px 8px 0px rgba(107, 104, 107, 1);
  box-shadow: 0px 1px 8px 0px rgba(107, 104, 107, 1);
  background-color: #ea8d8d; /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, #ea8d8d, #a890f3);
}

.nav-item > .nav-link.text-dark {
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white !important;
  font-size: 1em;
}
</style>
