<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand"><img src="~/assets/images/logo_truck_me_frete_plataforma.png" style="width: 120px;" alt=""></router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><router-link to="/services">Serviços</router-link></li>
          <li><router-link to="/contact">Contato</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
/* Estilos específicos para o componente HeaderComponent */
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.navbar-brand img {
  max-height: 50px; /* Ajuste conforme necessário */
}

.navbar-nav > li > a {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.navbar-toggle {
  margin: 10px 15px;
  border: none;
}

/* Estilos para o menu de navegação responsivo */
@media (max-width: 767px) {
  .navbar-nav > li > a {
    padding: 10px 15px;
  }
}
</style>
