import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Services from "@/components/Services.vue";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;