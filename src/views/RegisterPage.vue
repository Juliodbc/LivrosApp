<template>
  <ion-page>
    <ion-content class="app-bg">
      <div class="wrapper fade-in">

        <div class="login-box glass-card">

          <!-- HEADER -->
          <div class="header">
            <h1>Criar Conta</h1>
            <p class="text-muted">Preencha os dados abaixo</p>
          </div>

          <!-- NOME -->
          <ion-item class="input-modern">
            <ion-icon :icon="personOutline" slot="start" />
            <ion-input v-model="name" placeholder="Nome completo" />
          </ion-item>

          <!-- EMAIL -->
          <ion-item class="input-modern">
            <ion-icon :icon="mailOutline" slot="start" />
            <ion-input v-model="email" placeholder="E-mail" />
          </ion-item>

          <!-- SENHA -->
          <ion-item class="input-modern">
            <ion-icon :icon="lockClosedOutline" slot="start" />
            <ion-input type="password" v-model="password" placeholder="Senha" />
          </ion-item>

          <!-- CONFIRMAR -->
          <ion-item class="input-modern">
            <ion-icon :icon="lockClosedOutline" slot="start" />
            <ion-input type="password" v-model="confirm" placeholder="Confirmar senha" />
          </ion-item>

          <!-- BOTÃO -->
          <ion-button expand="block" class="btn-primary" @click="goHome">
            Criar Conta
          </ion-button>

          <!-- VOLTAR -->
          <div class="links">
            <ion-button fill="clear" router-link="/login" class="link-secondary">
              Já tenho conta
            </ion-button>
          </div>

        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { personOutline, mailOutline, lockClosedOutline } from "ionicons/icons";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const confirm = ref("");

// 🚀 navegação direta (sem validação)
const goHome = () => {
  router.replace("/home");
};
</script>

<style scoped>

/* MESMO PADRÃO DO LOGIN */

.app-bg {
  --background:
    radial-gradient(circle at 20% 20%, rgba(255,107,0,0.15), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(255,140,66,0.1), transparent 40%),
    linear-gradient(135deg, #0a0a0a, #111827, #000000);
}

.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  max-width: 440px;
  padding: 35px 30px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #ff6b00;
  font-size: 2rem;
  font-weight: bold;
}

.input-modern {
  --background: rgba(255,255,255,0.02);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 12px;
}

.input-modern:focus-within {
  border: 1px solid #ff6b00;
  box-shadow: 0 0 12px rgba(255,107,0,0.3);
}

.btn-primary {
  margin-top: 10px;
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
  --border-radius: 12px;
  font-weight: 600;
}

.links {
  margin-top: 12px;
  text-align: center;
}

.link-secondary {
  color: #9ca3af;
}

</style>