<template>
  <ion-page>
    <ion-content class="app-bg">
      <div class="wrapper fade-in">

        <div class="login-box glass-card">

          <!-- HEADER -->
          <div class="header">
            <h1>LivrosApp</h1>
            <p class="text-muted">Acesse sua conta</p>
          </div>

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

          <!-- BOTÃO -->
          <ion-button expand="block" class="btn-primary" @click="goHome">
            Entrar
          </ion-button>

          <!-- LINKS -->
          <div class="links">
            <ion-button
              class="link-primary"
              fill="clear"
              router-link="/recover"
            >
              Esqueci minha senha
            </ion-button>

            <ion-button
              class="link-secondary"
              fill="clear"
              :routerLink="'/register'"
            router-direction="forward"
            >
              Criar nova conta
            </ion-button>
          </div>

        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/vue';
import { ref } from "vue";
import { useRouter } from "vue-router";
import { mailOutline, lockClosedOutline } from "ionicons/icons";

const router = useRouter();

const email = ref("");
const password = ref("");

// 🚀 navegação fluida (SEM validação)
const goHome = () => {
  router.replace("/home");
};
</script>

<style scoped>

/* FUNDO FUTURISTA MELHORADO */
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

/* CARD */
.login-box {
  width: 100%;
  max-width: 440px;
  padding: 35px 30px;
  transition: 0.3s;
}

.login-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(255,107,0,0.15);
}

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #ff6b00;
  font-size: 2rem;
  font-weight: bold;
}

/* INPUT */
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

/* BOTÃO */
.btn-primary {
  margin-top: 10px;
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
  --border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 5px 20px rgba(255,107,0,0.4);
  transition: 0.2s;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(255,107,0,0.5);
}

/* LINKS */
.links {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-primary {
  font-size: 0.95rem;
  color: #ff8c42;
}

.link-secondary {
  font-size: 0.85rem;
  color: #9ca3af;
}

.link-primary:hover {
  color: #ff6b00;
}

.link-secondary:hover {
  color: white;
}

/* RESPONSIVO */
@media (min-width: 768px) {
  .login-box {
    max-width: 480px;
    padding: 40px;
  }
}

@media (max-width: 480px) {
  .login-box {
    padding: 25px 20px;
  }
}

</style>