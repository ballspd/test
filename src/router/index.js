import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import AboutUs from "@/components/AboutUs.vue";
import Portfolio from "@/components/Portfolio.vue";
import Blog from "@/components/Blog.vue";
import ContactUs from "@/components/ContactUs.vue";
import JoinUs from "@/components/JoinUs.vue";
import JoinUsForm from "@/components/JoinUsForm.vue";
import SolutionsFuse from "@/components/Solutions/SolutionsFuse.vue";
import SolutionsLine from "@/components/Solutions/SolutionsLine.vue";
import SolutionsAkita from "@/components/Solutions/SolutionsAkita.vue";

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
  },
  {
    path: "/JoinUsForm",
    name: "JoinUsForm",
    component: JoinUsForm,
  },
  {
    path: "/Solutions/Fuse",
    name: "SolutionsFuse",
    component: SolutionsFuse,
  },
  {
    path: "/Solutions/Line",
    name: "SolutionsLine",
    component: SolutionsLine,
  },
  {
    path: "/Solutions/Akita",
    name: "SolutionsAkita",
    component: SolutionsAkita,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;