<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-button @click="goBack">Voltar</ion-button>
        </ion-buttons>
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="app-bg">

      <div v-if="book" class="container">

        <img :src="book.image" class="img" />

        <h1>{{ book.title }}</h1>
        <h2>{{ book.author }}</h2>

        <p>{{ book.description }}</p>

        <div class="info">
          <p><strong>Ano:</strong> {{ book.year }}</p>
          <p><strong>Páginas:</strong> {{ book.pages }}</p>
          <p><strong>Gênero:</strong> {{ book.genre }}</p>
        </div>

        <ion-button expand="block" class="btn" @click="toggleFavorite">
          {{ book.isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos" }}
        </ion-button>

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { books } from "@/data/books";

const route = useRoute();
const router = useRouter();

const book = computed(() =>
  books.find(b => b.id === Number(route.params.id))
);

const toggleFavorite = () => {
  if (book.value) {
    book.value.isFavorite = !book.value.isFavorite;
  }
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.toolbar {
  --background: #0f0f0f;
  --color: white;
}

.app-bg {
  --background:
    radial-gradient(circle at 20% 20%, rgba(255,107,0,0.15), transparent 40%),
    linear-gradient(135deg, #0a0a0a, #111827, #000);
}

.container {
  padding: 20px;
}

.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 20px;
}

h1 {
  color: #ff6b00;
}

h2 {
  color: #9ca3af;
}

.info {
  margin-top: 10px;
  color: #d1d5db;
}

.btn {
  margin-top: 20px;
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
}
</style>