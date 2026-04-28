<template>
  <ion-page>
    <ion-content class="app-bg">
      <div class="center">
        <div class="card">
          <h1>Recuperar senha</h1>
          <p class="subtitle">Digite seu e-mail</p>

          <ion-item class="input">
            <ion-icon :icon="mailOutline" slot="start" />
            <ion-input v-model="email" placeholder="E-mail" />
          </ion-item>

          <ion-button expand="block" class="btn" @click="recover">
            Enviar
          </ion-button>

          <div v-if="success" class="success">E-mail enviado (fake)</div>

          <ion-button
            fill="clear"
            class="back"
            :routerLink="'/login'"
            router-direction="back">
            Voltar
          </ion-button>
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
import { mailOutline } from "ionicons/icons";

const email = ref("");
const success = ref(false);

const recover = () => {
  if (email.value) success.value = true;
};
</script>

<style scoped>
/* FUNDO */
.app-bg {
  --background:
    radial-gradient(circle at 30% 30%, rgba(255, 107, 0, 0.15), transparent),
    linear-gradient(135deg, #0a0a0a, #111827);
}

/* CENTRALIZAÇÃO REAL */
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* CARD */
.card {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 107, 0, 0.2);
  text-align: center;
}

/* TEXTOS */
h1 {
  color: #ff6b00;
}

.subtitle {
  color: #9ca3af;
  margin-bottom: 20px;
}

/* INPUT */
.input {
  margin-bottom: 15px;
  border-radius: 12px;
  --background: rgba(255, 255, 255, 0.05);
}

/* BOTÃO */
.btn {
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
  --border-radius: 12px;
}

/* SUCESSO */
.success {
  margin-top: 10px;
  color: #22c55e;
}

/* VOLTAR */
.back {
  margin-top: 10px;
  color: #9ca3af;
}
</style>
