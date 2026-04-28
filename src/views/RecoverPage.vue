<template>
  <ion-page>
    <ion-content class="app-bg">

      <div class="wrapper fade-in">

        <div class="recover-box">

          <!-- HEADER -->
          <div class="header">
            <h1>Recuperar senha</h1>
            <p>Informe seu e-mail para receber instruções</p>
          </div>

          <!-- EMAIL -->
          <ion-item class="input-modern" :class="{ error: emailError }">
            <ion-icon name="mail-outline" slot="start" />
            <ion-input
              v-model="email"
              placeholder="Seu e-mail"
              type="email"
            />
          </ion-item>

          <span v-if="emailError" class="error-text">
            {{ emailError }}
          </span>

          <!-- BOTÃO -->
          <ion-button expand="block" class="btn-primary" @click="recover">
            Enviar instruções
          </ion-button>

          <!-- FEEDBACK -->
          <div v-if="success" class="success-box">
            E-mail enviado (simulação). Verifique sua caixa de entrada.
          </div>

          <!-- VOLTAR -->
          <ion-button
            fill="clear"
            class="back-btn"
            :routerLink="'/login'"
            router-direction="back"
          >
            Voltar para login
          </ion-button>

        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const emailError = ref("");
const success = ref(false);

const validateEmail = (value: string) => {
  if (!value) return "Informe o e-mail";
  if (!/\S+@\S+\.\S+/.test(value)) return "E-mail inválido";
  return "";
};

const recover = () => {
  emailError.value = validateEmail(email.value);

  if (!emailError.value) {
    success.value = true;
  } else {
    success.value = false;
  }
};
</script>

<style scoped>

/* FUNDO PADRÃO */
.app-bg {
  --background:
    radial-gradient(circle at 20% 20%, rgba(255,107,0,0.15), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(255,140,66,0.1), transparent 40%),
    linear-gradient(135deg, #0a0a0a, #111827, #000000);
}

/* CENTRALIZAÇÃO */
.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* BOX */
.recover-box {
  width: 100%;
  max-width: 420px;
  padding: 35px 25px;
  border-radius: 20px;
  background: rgba(20,20,20,0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,107,0,0.15);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #ff6b00;
  font-size: 1.8rem;
}

.header p {
  color: #9ca3af;
  font-size: 0.9rem;
}

/* INPUT */
.input-modern {
  margin-bottom: 10px;
  border-radius: 12px;
  --background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
}

/* ERRO */
.error {
  border: 1px solid #ef4444 !important;
}

.error-text {
  color: #ef4444;
  font-size: 0.75rem;
  margin-bottom: 10px;
}

/* BOTÃO */
.btn-primary {
  margin-top: 10px;
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
  --border-radius: 12px;
  font-weight: 600;
}

/* SUCESSO */
.success-box {
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(34,197,94,0.1);
  color: #22c55e;
  text-align: center;
  font-size: 0.85rem;
}

/* VOLTAR */
.back-btn {
  margin-top: 10px;
  color: #9ca3af;
  font-size: 0.85rem;
}

/* RESPONSIVO */
@media (max-width: 480px) {
  .recover-box {
    margin: 0 10px;
    padding: 25px 20px;
  }
}

</style>