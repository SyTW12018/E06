<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger rounded">
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
          <router-link class="nav-link text-white" to="/">Inicio</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link class="nav-link text-white" to="/login">Acceso</router-link>
        </li>
        <li v-if="auth==''" class="nav-item">
          <router-link class="nav-link text-white" to="/register">Registro</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link text-white" to="/profile">Perfil</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link text-white" to="/recommend">Recomendaciones</router-link>
        </li>
        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link text-white" to="/juegos">Todos los juegos</router-link>
        </li>

        <li v-if="auth=='loggedin'" class="nav-item">
          <a class="nav-link text-white" href v-on:click="logout">Salir</a>
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
