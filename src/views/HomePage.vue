<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-title>Biblioteca</ion-title>

        <ion-buttons slot="end">
          <!-- FILTRO -->
          <ion-button @click="toggleFilter">
            <ion-icon :icon="showFavorites ? heart : heartOutline" />
          </ion-button>

          <!-- LOGOUT -->
          <ion-button @click="logout">
            Sair
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="app-bg">
      <div class="container">

        <ion-grid>
          <ion-row>
            <ion-col
              size="12"
              size-md="6"
              size-lg="4"
              v-for="book in filteredBooks"
              :key="book.id"
            >
              <BookCard
                :book="book"
                @toggleFavorite="toggleFavorite"
                @viewDetail="goToDetail"
              />
            </ion-col>
          </ion-row>
        </ion-grid>

        <div v-if="filteredBooks.length === 0" class="empty">
          Nenhum livro encontrado
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { books } from "@/data/books";
import BookCard from "@/assets/components/BookCard.vue";
import { heart, heartOutline } from "ionicons/icons";

const router = useRouter();

const showFavorites = ref(false);

const filteredBooks = computed(() => {
  return showFavorites.value
    ? books.filter(b => b.isFavorite)
    : books;
});

const toggleFilter = () => {
  showFavorites.value = !showFavorites.value;
};

const toggleFavorite = (id: number) => {
  const book = books.find(b => b.id === id);
  if (book) book.isFavorite = !book.isFavorite;
};

const goToDetail = (id: number) => {
  router.push(`/book/${id}`);
};

const logout = () => {
  router.replace("/login");
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
  padding: 15px;
}

.empty {
  text-align: center;
  margin-top: 40px;
  color: #9ca3af;
}
</style>