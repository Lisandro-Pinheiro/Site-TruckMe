<template>
  <section class="contact" id="CONTACT">
    <div class="container">
      <!-- Formulário de Contato aqui -->
      <div class="row">
        <div class="col-md-3">
          <div class="single_contact_info">
            <h2>Telefone</h2>
            <p>+55 22 981154701</p>
          </div>
          <div class="single_contact_info">
            <h2>Email</h2>
            <p>lisandropinheiro10@gmail.com</p>
          </div>
          <div class="single_contact_info">
            <h2>Endereço</h2>
            <p>Três Rios - Centro - RJ</p>
          </div>
        </div>
        <div class="col-md-9">
          <form class="contact-form" @submit.prevent="validateForm">
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" v-model="formData.name" placeholder="Nome">
                <input type="email" class="form-control" v-model="formData.email" placeholder="Email">
                <input type="text" class="form-control" v-model="formData.subject" placeholder="Assunto">
              </div>
              <div class="col-md-6">
                <textarea class="form-control" v-model="formData.message" rows="5" placeholder="Mensagem"></textarea>
                <button type="submit" class="btn btn-default submit-btn form_submit">Enviar Mensagem</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactFormComponent',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    validateForm() {
      const { name, email, subject, message } = this.formData;

      if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Lógica para enviar o formulário aqui
      alert('Formulário enviado com sucesso!');
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para o componente ContactFormComponent */
.contact {
  padding: 80px 0;
}

.single_contact_info h2 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.single_contact_info p {
  color: #666;
  font-size: 18px;
}

.contact-form .form-control {
  margin-bottom: 20px;
  border-radius: 0;
}

.contact-form .submit-btn {
  background-color: #fbb034;
  color: #fff;
  border-radius: 0;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
}

.contact-form .submit-btn:hover {
  background-color: #f8991c;
}
</style>
