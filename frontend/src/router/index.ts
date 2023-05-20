import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/computed',
      name: 'Computed',
      component: () => import('../views/Computed.vue')
    },
    {
      path: '/reactive',
      name: 'Reactive',
      component: () => import('../views/Reactive.vue')
    },
    {
      path: '/bind-class',
      name: 'BindClass',
      component: () => import('../views/BindClass.vue')
    },
  ]
})

export default router
