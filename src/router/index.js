import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title: "Home"
    }
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import(/* webpackChunkName: "AboutUs" */ '@/components/AboutUs.vue'),
    meta:{
      title: "About Us"
    }
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio.vue'),
    meta:{
      title: "Portfolio"
    }
  },
  {
    path: "/Portfolio/Detail/:id",
    name: "PortfolioDetail",
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio/PortfolioDetail.vue'),
    meta:{
      title: "Portfolio"
    }
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "Blog" */ '@/components/Blog.vue'),
    meta:{
      title: "Blog"
    }
  },
  {
    path: "/Blogs/All/:id/:name",
    name: "BlogsAll",
    component: () => import(/* webpackChunkName: "BlogsAll" */ '@/components/Blogs/BlogsAll.vue'),
    meta:{
      title: "Blogs"
    }
  },
  {
    path: "/Blogs/Detail/:id/:name",
    name: "BlogsDetail",
    component: () => import(/* webpackChunkName: "BlogsDetail" */ '@/components/Blogs/BlogsDetail.vue'),
    meta:{
      title: "Blogs"
    }
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () => import(/* webpackChunkName: "ContactUs" */ '@/components/ContactUs.vue'),
    meta:{
      title: "Contact Us"
    }
  },
  {
    path: "/JoinUs",
    name: "JoinUs",
    component: () => import(/* webpackChunkName: "JoinUs" */ '@/components/JoinUs.vue'),
    meta:{
      title: "Join Us"
    }
  },
  {
    path: "/JoinUsForm",
    name: "JoinUsForm",
    component: () => import(/* webpackChunkName: "JoinUsForm" */ '@/components/JoinUsForm.vue'),
    meta:{
      title: "Join Us"
    }
  },
  {
    path: "/Solutions/Fuse",
    name: "SolutionsFuse",
    component: () => import(/* webpackChunkName: "SolutionsFuse" */ '@/components/Solutions/SolutionsFuse.vue'),
    meta:{
      title: "Solutions Fuse"
    }
  },
  {
    path: "/Solutions/Line",
    name: "SolutionsLine",
    component: () => import(/* webpackChunkName: "SolutionsLine" */ '@/components/Solutions/SolutionsLine.vue'),
    meta:{
      title: "Solutions Line"
    }
  },
  {
    path: "/Solutions/Akita",
    name: "SolutionsAkita",
    component: () => import(/* webpackChunkName: "SolutionsAkita" */ '@/components/Solutions/SolutionsAkita.vue'),
    meta:{
      title: "Solutions Akita"
    }
  },
  {
    path: "/Solutions/Beary",
    name: "SolutionsBeary",
    component: () => import(/* webpackChunkName: "SolutionsBeary" */ '@/components/Solutions/SolutionsBeary.vue'),
    meta:{
      title: "Solutions Beary"
    }
  },
  {
    path: "/Solutions/Kaikong",
    name: "SolutionsKaikong",
    component: () => import(/* webpackChunkName: "SolutionsKaikong" */ '@/components/Solutions/SolutionsKaikong.vue'),
    meta:{
      title: "Solutions Kaikong"
    }
  },
  {
    path: "/Solutions/Shipmunk",
    name: "SolutionsShipmunk",
    component: () => import(/* webpackChunkName: "SolutionsShipmunk" */ '@/components/Solutions/SolutionsShipmunk.vue'),
    meta:{
      title: "Solutions Shipmunk"
    }
  },
  {
    path: "/Solutions/Oc2Plus",
    name: "SolutionsOc2Plus",
    component: () => import(/* webpackChunkName: "SolutionsOc2Plus" */ '@/components/Solutions/SolutionsOc2Plus.vue'),
    meta:{
      title: "Solutions Oc2Plus"
    }
  },
  {
    path: "/TypesOfBusiness/BusinessOwner",
    name: "BusinessOwner",
    component: () => import(/* webpackChunkName: "BusinessOwner" */ '@/components/TypesOfBusiness/BusinessOwner.vue'),
    meta:{
      title: "Business Owner"
    }
  },
  {
    path: "/TypesOfBusiness/OnlineMerchant",
    name: "OnlineMerchant",
    component: () => import(/* webpackChunkName: "OnlineMerchant" */ '@/components/TypesOfBusiness/OnlineMerchant.vue'),
    meta:{
      title: "Online Merchant"
    }
  },
  {
    path: "/TypesOfBusiness/Corporate",
    name: "Coporate",
    component: () => import(/* webpackChunkName: "Corporate" */ '@/components/TypesOfBusiness/Corporate.vue'),
    meta:{
      title: "Coporate"
    }
  },
  {
    path: "/Policy",
    name: "Policy",
    component: () => import(/* webpackChunkName: "Corporate" */ '@/components/Policy.vue'),
    meta:{
      title: "Policy"
    }
  },
  {
    path: "/TermsOfUse",
    name: "TermsOfUse",
    component: () => import(/* webpackChunkName: "Corporate" */ '@/components/TermsOfUse.vue'),
    meta:{
      title: "Terms Of Use"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router;