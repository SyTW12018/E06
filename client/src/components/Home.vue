<template>
  <div class="full body-background">
    <!-- <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cuprum&display=swap" rel="stylesheet">-->
    <div class="titulo">
      <h1>Gameflix</h1>
    </div>
    <div class="subtitulo">
      <h2
        class="text-white"
      >¡Bienvenid@ al mejor portal donde descubrir nuevos títulos a los que jugar!</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <!-- <button class="btn btn-lg btn-block" type="submit">Iniciar sesión</button> -->
          <router-link class="nav-link btn" to="/login">
            <button class="btn btn-lg btn-block">Accede a tu cuenta</button>
          </router-link>
          <router-link class="nav-link btn" to="/login">
            <button class="btn btn-lg btn-block">Crea una cuenta</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.full > .container > .row {
  margin-bottom: 0px;
}

.nav-link > .btn.btn-lg.btn-block {
  background-color: #ea8d8d; /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, #ea8d8d, #937dd3);
  color: white;
  padding: 30px;
  font-size: 2em;
  font-family: "Cuprum", sans-serif;
  position: relative;
}

.img-fluid {
  width: 100%;
}

body {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.full {
  min-height: calc(100vh - 56px);

  /* background-color: #ea8d8d; For browsers that do not support gradients */
  /* background-image: linear-gradient(to right, #ea8d8d, #a890f3); */
}

.body-background {
  background-image: url("~@/assets/img/fondo8.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.titulo {
  width: 100%;
  text-align: center;
  padding-top: 150px;
}

.full > .titulo > h1 {
  font-family: "Bangers", cursive;
  color: white;
  font-size: 8em;
  display: inline;
  text-shadow: 6px 2px 5px rgb(0, 0, 0);
}

.full > .subtitulo > h2 {
  font-family: "Cuprum", sans-serif;
  display: inline;
  text-shadow: 6px 2px 5px rgb(0, 0, 0);
}
@media only screen and (max-width: 570px) {
  .full > .titulo > h1 {
    font-size: 6em;
  }
}
@media only screen and (max-width: 450px) {
  .full > .titulo > h1 {
    font-size: 5em;
  }
  .titulo {
    padding-top: 50px;
  }
  .full > .subtitulo > h2 {
    font-size: 1.5em;
  }
  .nav-link > .btn.btn-lg.btn-block {
    font-size: 1.5em;
    padding: 10px;
  }
}

.subtitulo {
  width: 100%;
  text-align: center;
  padding: 30px;
}
</style>
