<template>
  <div class="container">
    <div class="row">
      <h1 class="col-lg-9 col-md-6 col-xs-6">Juegos</h1>
      <select v-model="category" class="col-lg-3 col-md-6 col-xs-6 custom-select custom-select-md">
        <option value disabled selected>Elige una categoría</option>
        <option value="acción">Acción</option>
        <option value="aventura">Aventura</option>
        <option value="mundo abierto">Mundo abierto</option>
        <option value="supervivencia">Supervivencia</option>
        <option value="survival horror">Survival Horror</option>

        <option style="background-color: lightgrey; color: grey;" value>Eliminar filtros</option>
      </select>
    </div>
    <div class="contenedor">
      <div v-for="juego in juegosFiltro" :key="juego._id" class="card fichajuego mb-3">
        <img src="../img/download.jpg" class="card-img-top">
        <!-- <img :src="juego.foto"> -->
        <div class="card-body">
          <h4 class="card-title">
            <b>{{ juego.titulo }}</b>
          </h4>
          <h6 class="card-text">
            <b style="font-weight: normal">{{ juego.categoria }}</b>
          </h6>
          <p class="card-text"></p>
          <div class="text-center">
            <router-link
              class="nav-link btn"
              tag="button"
              :to="{ name: 'ficha', params: {id: juego._id } }"
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
.contenedor {
  width: 100%;
  text-align: center;
}
.row > .col-lg-9.col-md-6.col-xs-6 {
  font-family: "Bangers", cursive;
  font-size: 3em;
}
.text-center {
  text-align: center;
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

.container > .row {
  margin: 50px 0px 30px 10px;
}

.container > .row > select {
  margin-top: 13px;
}

.container {
  margin-bottom: 100px;
}

.listado > div {
  display: inline-block;
}

.fichajuego {
  width: 240px;
  margin: 10px;
  display: inline-block;
}

.card {
  display: block-inline;
}

.card-body > .card-title {
  text-transform: uppercase;
  font-size: 1em;
}

.card-text {
  text-transform: capitalize;
}
</style>
