<template>
  <header id="HOME" style="background-position: 50% -125px;">
    <div class="section_overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="home_text wow fadeInUp animated">
              <h2>Solução Inteligente em Fretes</h2>
              <h3>A primeira transportadora 100% digital</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style scoped>
/* Estilos específicos para o componente BannerComponent */
.header_overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 0;
}

.home_text h2 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.home_text h3 {
  color: #fff;
  font-size: 24px;
}

@media (max-width: 767px) {
  .home_text h2 {
    font-size: 28px;
  }
  .home_text h3 {
    font-size: 18px;
  }
}
</style>
