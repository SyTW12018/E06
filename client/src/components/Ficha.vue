<template>
  <div class="container">
    <div class="row">
      <div class="card-group col-lg-12">
        <div class="card mt-5 largo">
          <h3 class="card-header" style="text-transform: uppercase;">{{juego.titulo}}</h3>
          <div class="card-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Categoría:</th>
                  <td>{{juego.categoria}}</td>
                </tr>
                <tr>
                  <th scope="row">Fecha de lanzamiento:</th>
                  <td>{{juego.fecha}}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                <i class="fas fa-plus"></i> Marcar como jugado
              </a>
            </div>
          </div>
        </div>
        <div class="card mt-5">
          <div class="centrado">
            <div class="card-body fichajuego">
              <img class="card-img-top rounded-top" src="../img/download.jpg" alt="Card image cap">
              <div class="caption rounded-bottom">
                <h5>{{juego.rate}}</h5>
              </div>
            </div>
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
      juego: []
    };
  },
  created() {
    let uri = `juegos/ficha/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.juego = response.data;
    });
  }
};
</script>


<style>
.card-body.fichajuego > .caption {
  background-color: #dd2342;
  color: white;
  padding: 15px;
}

.fichajuego {
  width: 250px;
  margin: 10px;
  display: inline-block;
}

.centrado {
  text-align: center;
  width: 100%;
  margin: auto;
}

tbody > tr > th {
  /* color: red; */
  font-size: 1.5em;
}
tbody > tr > td {
  font-size: 1.2em;
  text-transform: capitalize;
}

.card-group.col-lg-12 > .largo {
  flex-grow: 3;
}

@media only screen and (max-width: 1200px) {
  .card-group.col-lg-12 > .largo {
    flex-grow: 2.5;
  }
}

@media only screen and (max-width: 990px) {
  .card-group.col-lg-12 > .largo {
    flex-grow: 1.5;
  }
  tbody > tr > th {
    /* color: red; */
    font-size: 1em;
  }
  tbody > tr > td {
    font-size: 1em;
    text-transform: capitalize;
  }
}

@media only screen and (max-width: 770px) {
  .card-group.col-lg-12 > .largo {
    flex-grow: 1;
  }
}
</style>
