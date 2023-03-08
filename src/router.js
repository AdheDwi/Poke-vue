import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/Homepage.vue";
import DetailPage from "./components/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailPage,
    },
  ],
});

export default router;
