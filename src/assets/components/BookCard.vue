<template>
  <ion-card class="book-card">

    <div class="img-wrapper">
      <img :src="book.image" class="book-img" />

      <!-- FAVORITO -->
      <ion-button class="fav-btn" fill="clear" @click="toggleFav">
        <ion-icon :icon="book.isFavorite ? heart : heartOutline" />
      </ion-button>
    </div>

    <ion-card-header>
      <ion-card-title>{{ book.title }}</ion-card-title>
      <ion-card-subtitle>{{ book.author }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-button expand="block" class="btn-detail" @click="view">
        Ver detalhes
      </ion-button>
    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import { heart, heartOutline } from "ionicons/icons";

const props = defineProps<{
  book: any;
}>();

const emit = defineEmits(["toggleFavorite", "viewDetail"]);

const toggleFav = () => {
  emit("toggleFavorite", props.book.id);
};

const view = () => {
  emit("viewDetail", props.book.id);
};
</script>

<style scoped>
.book-card {
  border-radius: 18px;
  overflow: hidden;
  background: rgba(20,20,20,0.85);
  border: 1px solid rgba(255,107,0,0.15);
}

.img-wrapper {
  position: relative;
}

.book-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.fav-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  --color: #ff6b00;
}

.btn-detail {
  --background: linear-gradient(135deg, #ff6b00, #ff8c42);
}
</style>