import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../pages/Home.vue'),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import('../pages/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
