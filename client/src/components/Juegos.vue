<template>
  <div class="container">
    <div class="row">
      <h1 class="col-lg-9 col-md-6 col-xs-6">Juegos</h1>
      <select v-model="category" class="col-lg-3 col-md-6 col-xs-6 custom-select custom-select-md">
        <option value disabled selected>Elige una categoría</option>
        <option value="violencia">Violencia</option>
        <option value="aventura">Aventura</option>
        <option value="simulador">Simulador</option>
        <option style="background-color: lightgrey; color: grey;" value>Eliminar filtros</option>
      </select>
    </div>

    <div v-for="juego in juegosFiltro" :key="juego._id" class="card fichajuego">
      <img src="../img/download.jpg" class="card-img-top">
      <!-- <img :src="juego.foto"> -->
      <div class="card-body">
        <h4 class="card-title">
          <b>{{ juego.titulo }}</b>
        </h4>
        <h5 class="card-text">Categoría: {{ juego.categoria }}</h5>
        <p class="card-text"></p>
        <div class="text-center">
          <router-link
            class="nav-link"
            tag="button"
            :to="{ name: 'ficha', params: {id: juego._id } }"
          >Ficha</router-link>
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
    return {
      juegos: [],
      category: "",
      fileName: "download.jpg"
    };
  },
  created() {
    let uri = "/juegos";

    this.axios.get(uri).then(response => {
      this.juegos = response.data;
    });
  },
  computed: {
    juegosFiltro: function() {
      var vm = this;
      var categoria = vm.category;

      if (categoria === "") {
        return vm.juegos;
      } else {
        return vm.juegos.filter(function(juego) {
          return juego.categoria === categoria;
        });
      }
    }
  }
};
</script>


<style>
.text-center > .btn.btn-primary {
  border-radius: 15px;
  background-color: #dd2342;
  color: white;
  border-color: #dd2342;
}

.inline {
  display: inline-block;
}
.text-center > .btn.btn-primary:hover {
  background-color: #af1b34;
  border-color: #af1b34;
}

.container > .row {
  margin: 50px 0px 30px 10px;
}

.container > .row > select {
  margin-top: 13px;
}

.container {
  margin-bottom: 100px;
}
/* .listado {
  display: inline;
  text-align: center;
} */

.listado > div {
  display: inline-block;
}

.fichajuego {
  width: 250px;
  margin: 10px;
  display: inline-block;
}

.card-body > .card-title {
  text-transform: uppercase;
}
</style>
