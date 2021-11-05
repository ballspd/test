import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import(/* webpackChunkName: "AboutUs" */ '@/components/AboutUs.vue')
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio.vue')
  },
  {
    path: "/Portfolio/Detail/:id",
    name: "PortfolioDetail",
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio/PortfolioDetail.vue')
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "Blog" */ '@/components/Blog.vue')
  },
  {
    path: "/Blogs/All/:id",
    name: "BlogsAll",
    component: () => import(/* webpackChunkName: "BlogsAll" */ '@/components/Blogs/BlogsAll.vue')
  },
  {
    path: "/Blogs/Detail/:id",
    name: "BlogsDetail",
    component: () => import(/* webpackChunkName: "BlogsDetail" */ '@/components/Blogs/BlogsDetail.vue')
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () => import(/* webpackChunkName: "ContactUs" */ '@/components/ContactUs.vue')
  },
  {
    path: "/JoinUs",
    name: "JoinUs",
    component: () => import(/* webpackChunkName: "JoinUs" */ '@/components/JoinUs.vue')
  },
  {
    path: "/JoinUsForm",
    name: "JoinUsForm",
    component: () => import(/* webpackChunkName: "JoinUsForm" */ '@/components/JoinUsForm.vue')
  },
  {
    path: "/Solutions/Fuse",
    name: "SolutionsFuse",
    component: () => import(/* webpackChunkName: "SolutionsFuse" */ '@/components/Solutions/SolutionsFuse.vue')
  },
  {
    path: "/Solutions/Line",
    name: "SolutionsLine",
    component: () => import(/* webpackChunkName: "SolutionsLine" */ '@/components/Solutions/SolutionsLine.vue')
  },
  {
    path: "/Solutions/Akita",
    name: "SolutionsAkita",
    component: () => import(/* webpackChunkName: "SolutionsAkita" */ '@/components/Solutions/SolutionsAkita.vue')
  },
  {
    path: "/Solutions/Beary",
    name: "SolutionsBeary",
    component: () => import(/* webpackChunkName: "SolutionsBeary" */ '@/components/Solutions/SolutionsBeary.vue')
  },
  {
    path: "/Solutions/Kaikong",
    name: "SolutionsKaikong",
    component: () => import(/* webpackChunkName: "SolutionsKaikong" */ '@/components/Solutions/SolutionsKaikong.vue')
  },
  {
    path: "/Solutions/Shipmunk",
    name: "SolutionsShipmunk",
    component: () => import(/* webpackChunkName: "SolutionsShipmunk" */ '@/components/Solutions/SolutionsShipmunk.vue')
  },
  {
    path: "/Solutions/Oc2Plus",
    name: "SolutionsOc2Plus",
    component: () => import(/* webpackChunkName: "SolutionsOc2Plus" */ '@/components/Solutions/SolutionsOc2Plus.vue')
  },
  {
    path: "/TypesOfBusiness/BusinessOwner",
    name: "BusinessOwner",
    component: () => import(/* webpackChunkName: "BusinessOwner" */ '@/components/TypesOfBusiness/BusinessOwner.vue')
  },
  {
    path: "/TypesOfBusiness/OnlineMerchant",
    name: "OnlineMerchant",
    component: () => import(/* webpackChunkName: "OnlineMerchant" */ '@/components/TypesOfBusiness/OnlineMerchant.vue')
  },
  {
    path: "/TypesOfBusiness/Corporate",
    name: "Coporate",
    component: () => import(/* webpackChunkName: "Corporate" */ '@/components/TypesOfBusiness/Corporate.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;