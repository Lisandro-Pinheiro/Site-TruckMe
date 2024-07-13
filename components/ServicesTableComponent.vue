<template>
  <section class="services_area" id="SERVICE">
    <div class="container">
      <!-- Tabela de Serviços aqui -->
      <div class="row">
        <div class="col-md-12">
          <div class="services_table">
            <table class="table">
              <thead>
                <tr>
                  <th>Nome do Serviço</th>
                  <th>Descrição</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transporte de Cargas</td>
                  <td>Transporte seguro e eficiente de cargas variadas, garantindo pontualidade e segurança no transporte.</td>
                  <td>R$100,00</td>
                </tr>
                <tr>
                  <td>Gestão de Frota</td>
                  <td>Otimização da gestão de frota, incluindo monitoramento em tempo real e manutenção preventiva.</td>
                  <td>R$200,00</td>
                </tr>
                <tr>
                  <td>Logística Reversa</td>
                  <td>Processo de logística que envolve o retorno de produtos, visando o reaproveitamento e redução de resíduos.</td>
                  <td>R$300,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesTableComponent'
}
</script>

<style scoped>
/* Estilos específicos para o componente ServicesTableComponent */
.services_area {
  padding: 80px 0;
}

.services_title h2 {
  color: #333;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
}

.services_table .table {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.services_table .table th,
.services_table .table td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
}

.services_table .table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.services_table .table td {
  vertical-align: middle;
}

.services_table .table tbody tr:hover {
  background-color: #f0f0f0;
}
</style>
