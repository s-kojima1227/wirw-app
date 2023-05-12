import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/wish',
      name: 'WishList',
      component: () => import('../views/WishList.vue')
    },
  ]
})

export default router
