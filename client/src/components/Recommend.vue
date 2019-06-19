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
            <td>{{first_name}}</td>
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
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  data() {}
};
</script>