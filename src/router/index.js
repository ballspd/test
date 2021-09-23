import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import AboutUs from "@/components/AboutUs.vue";
import Portfolio from "@/components/Portfolio.vue";
import Blog from "@/components/Blog.vue";
import ContactUs from "@/components/ContactUs.vue";
import JoinUs from "@/components/JoinUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/JoinUs",
    name: "JoinUs",
    component: JoinUs,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;