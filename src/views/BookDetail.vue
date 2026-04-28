<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-button @click="back">Voltar</ion-button>
        </ion-buttons>
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="app-bg">

      <div v-if="book" class="container fade-in">

        <!-- IMAGEM GRANDE -->
        <div class="image-wrapper">
          <img :src="book.image" class="img" />
        </div>

        <!-- CONTEÚDO -->
        <div class="card">

          <h1 class="title">{{ book.title }}</h1>
          <p class="author">{{ book.author }}</p>

          <div class="info-grid">
            <div class="info-item">
              <span class="label">Ano</span>
              <span class="value">{{ book.year }}</span>
            </div>

            <div class="info-item">
              <span class="label">Páginas</span>
              <span class="value">{{ book.pages }}</span>
            </div>

            <div class="info-item">
              <span class="label">Gênero</span>
              <span class="value">{{ book.genre }}</span>
            </div>
          </div>

          <div class="description">
            <h3>Descrição</h3>
            <p>{{ book.description }}</p>
          </div>

        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton
} from '@ionic/vue';

import { useRoute, useRouter } from "vue-router";
import { books } from "@/data/books";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const book = computed(() =>
  books.find(b => b.id === Number(route.params.id))
);

const back = () => {
  router.back();
};
</script>

<style scoped>

/* HEADER */
.toolbar {
  --background: #0f0f0f;
  --color: white;
}

/* CONTAINER */
.container {
  padding-bottom: 20px;
}

/* IMAGEM GRANDE */
.image-wrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CARD */
.card {
  margin: -40px 15px 0;
  padding: 20px;
  border-radius: 20px;
  background: rgba(20,20,20,0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,107,0,0.2);
}

/* TITULO */
.title {
  color: #ff6b00;
  font-size: 1.6rem;
}

/* AUTOR */
.author {
  color: #9ca3af;
  margin-bottom: 15px;
}

/* GRID INFO */
.info-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.7rem;
  color: #9ca3af;
}

.value {
  font-size: 1rem;
  color: white;
  font-weight: bold;
}

/* DESCRIÇÃO */
.description h3 {
  color: #ff6b00;
  margin-bottom: 5px;
}

.description p {
  color: #d1d5db;
  line-height: 1.5;
}

/* RESPONSIVO */
@media (min-width: 768px) {
  .image-wrapper {
    height: 400px;
  }

  .card {
    max-width: 600px;
    margin: -60px auto 0;
  }
}

</style>