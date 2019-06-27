<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Perfil de usuario</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Nombre</td>
            <td v-if="first_name">{{first_name}}</td>
          </tr>
          <tr>
            <td>Apellidos</td>
            <td>{{last_name}}</td>
          </tr>
          <tr>
            <td>Correo electrónico</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
      <div class="col-sm-8 mx-auto mt-5 mb-3">
        <h1 class="text-center">Juegos que has jugado</h1>
      </div>
      <div v-for="juego in juegos" :key="juego._id" class="card fichajuego">
        <img src="../img/download.jpg" class="card-img-top">
        <!-- <img :src="juego.foto"> -->
        <div class="card-body">
          <h4 class="card-title">
            <b>{{ juego.titulo }}</b>
          </h4>
          <h6 class="card-text">
            <b>Categoría:</b>
            {{ juego.categoria }}
          </h6>
          <!-- <p>{{juego._id}}</p> -->

          <p class="card-text"></p>
          <div class="text-center">
            <router-link
              class="nav-link btn"
              tag="button"
              :to="{ name: 'fichajugados', params: {id: juego._id} }"
            >Ver Ficha</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import axios from "axios";
import router from "../router";
import EventBus from "./EventBus";

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);

    return {
      first_name: decoded.first_name || "",
      last_name: decoded.last_name || "",
      email: decoded.email || "",
      juegos: [],
      category: "",
      fileName: "download.jpg"
    };
  },
  created() {
    let uri = "/jugados";
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);

    this.axios
      .post(uri, {
        email: decoded.email
      })
      .then(response => {
        this.juegos = response.data;
      });
  }
};
</script>


<style>
.jumbotron .mt-5 > .card {
  width: 240px;
  margin: 10px;
  display: inline-block;
}
.col-sm-8 .mx-auto .mt-5 .mb-3 > .fichajuego {
  width: 240px;
  margin: 10px;
  display: inline-block;
}

.card-body > .card-title {
  text-transform: uppercase;
  font-size: 1em;
}

.card-text {
  text-transform: capitalize;
}

.text-center > .btn {
  border-radius: 13px;
  /* background-color: #dd2342; */
  color: white;
  /* border-color: #dd2342; */
  border-color: transparent;
  font-size: 1.1em;
  background-color: #d18fb5; /* For browsers that do not support gradients */
  /* background-image: linear-gradient(to right, #ea8d8d, #b7a3f1); */
}

.nav-link.btn {
  display: initial;
}

.inline {
  display: inline-block;
}
.text-center > .btn:hover {
  /* background-color: #af1b34;
  border-color: #af1b34; */
  background-color: #ea8d8d; /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, #c87878, #937dd3);
}
</style>
