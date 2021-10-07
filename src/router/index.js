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
import SolutionsBeary from "@/components/Solutions/SolutionsBeary.vue";
import SolutionsKaikong from "@/components/Solutions/SolutionsKaikong.vue";
import SolutionsShipmunk from "@/components/Solutions/SolutionsShipmunk.vue";
import SolutionsOc2Plus from "@/components/Solutions/SolutionsOc2Plus.vue";

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
  },
  {
    path: "/Solutions/Beary",
    name: "SolutionsBeary",
    component: SolutionsBeary,
  },
  {
    path: "/Solutions/Kaikong",
    name: "SolutionsKaikong",
    component: SolutionsKaikong,
  },
  {
    path: "/Solutions/Shipmunk",
    name: "SolutionsShipmunk",
    component: SolutionsShipmunk,
  },
  {
    path: "/Solutions/Oc2Plus",
    name: "SolutionsOc2Plus",
    component: SolutionsOc2Plus,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;