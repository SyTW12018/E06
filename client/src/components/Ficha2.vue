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
            <div v-if="!jugado" class="text-center">
              <a
                v-on:click="ha_jugado()"
                class="btn btn-primary text-light { pointer-events: none; }"
              >
                <i class="fas fa-plus"></i> Marcar como jugado
              </a>
            </div>
            <div v-if="jugado" class="text-center">
              <a href="#" class="btn btn-primary disabled">
                <i class="fas fa-check-circle"></i>
                Ya has jugado este juego
              </a>
            </div>
          </div>
        </div>
        <div class="card mt-5">
          <div class="centrado">
            <div class="card-body fichajuego">
              <img class="card-img-top rounded-top" src="../img/GTA5.jpg" alt="Card image cap">
              <div class="caption rounded-bottom">
                <h5>{{juego.rate}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4>Comentarios</h4>
    <div v-if="loggin" class="card bg-light mt-3 mb-3">
      <div class="card-body">
        <form v-on:submit.prevent="enviar">
          <div class="form-group">
            <label class="d-inline" for="comment"></label>
            <label class="sr-only" for="inlineFormInputName2">Name</label>

            <div class="form-group row">
              <div class="col-xs-4 col-lg-3">
                <input
                  class="form-control"
                  id="ex1"
                  type="number"
                  placeholder="Valora este juego del 0-10"
                  maxlength="2"
                  min="0"
                  max="10"
                  name="puntuacion"
                  v-model="puntuacion"
                  required
                >
              </div>
            </div>

            <div class="input-group mb-3">
              <textarea
                class="form-control"
                v-model="contenido"
                name="contenido"
                rows="1"
                aria-label="With textarea"
                placeholder="Añade un comentario sobre este juego"
                required
              ></textarea>
              <div class="input-group-append">
                <button class="btn btn-lg btn-block" type="submit">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mb-5">
      <div class="mb-2" v-for="coment in comentarios" :key="coment._id">
        <div id="comentario" class="card">
          <div class="card-body ml-2">
            <p class="card-title d-inline" style="text-transform: initial;">{{coment.contenido}}</p>&nbsp&nbsp
            <b>&#8226;</b>&nbsp
            <h5 class="card-text d-inline">{{coment.puntuacion}}</h5>
          </div>
          <div class="card-footer" style="padding: 3px; ">
            <small class="text-muted ml-3">Publicado el {{coment.creado}} por {{coment.autor}}</small>
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
      juego: [],
      jugado: false,
      puntuacion: "",
      contenido: "",
      loggin: false
    };
  },
  created() {
    const token = localStorage.usertoken;
    if (token != undefined) {
      var decode = jwtDecode(token);
    }
    const decoded = decode;

    // Obtener la ficha del juego
    let uri = `jugados/fichajugados/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.juego = response.data;

      // Esta petición debe hacerse después pq si no el
      this.axios
        .post("jugados/consulta", {
          email: decoded.email,
          titulo: this.juego.titulo,
          categoria: this.juego.categoria,
          fecha: this.juego.fecha
        })
        .then(res => {
          console.log(res.data);
          this.jugado = res.data;
        });
    });

    // Comprobar si lo ha jugado o no el usuario del token
  },
  methods: {
    ha_jugado() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      this.axios
        .post("jugados/add", {
          email: decoded.email,
          titulo: this.juego.titulo,
          categoria: this.juego.categoria,
          fecha: this.juego.fecha
        })
        .then(res => {
          this.jugado = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    enviar() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      this.axios
        .post("/comentarios/enviar", {
          email: decoded.first_name,
          titulo: this.juego.titulo,
          puntuacion: this.puntuacion,
          contenido: this.contenido
        })
        .then(res => {
          console.log("Devuelto");
          router.push(`/${this.$route.params.id}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style>
.a.disabled {
  pointer-events: none;
}
.card-img-top {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.card-body.fichajuego > .caption {
  background-color: #d18fb5;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 15px;
}

.fichajuego {
  width: 240px;
  margin: 10px;
  display: inline-block;
  border-radius: 30px;
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
