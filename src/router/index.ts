import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/recover',
    component: () => import('@/views/RecoverPage.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/book/:id',
    component: () => import('@/views/BookDetail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;