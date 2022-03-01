import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
// import AboutUs from "@/components/AboutUs.vue";
// import Portfolio from "@/components/Portfolio.vue";
// import PortfolioDetail from "@/components/Portfolio/PortfolioDetail.vue";
// import Blog from "@/components/Blog.vue";
// import BlogsAll from "@/components/Blogs/BlogsAll.vue";
// import BlogsDetail from "@/components/Blogs/BlogsDetail.vue";
// import ContactUs from "@/components/ContactUs.vue";
// import JoinUs from "@/components/JoinUs.vue";
// import JoinUsForm from "@/components/JoinUsForm.vue";
// import SolutionsFuse from "@/components/Solutions/SolutionsFuse.vue";
// import SolutionsLine from "@/components/Solutions/SolutionsLine.vue";
// import SolutionsAkita from "@/components/Solutions/SolutionsAkita.vue";
// import SolutionsBeary from "@/components/Solutions/SolutionsBeary.vue";
// import SolutionsShipmunk from "@/components/Solutions/SolutionsShipmunk.vue";
// import SolutionsKaikong from "@/components/Solutions/SolutionsKaikong.vue";
// import SolutionsOc2Plus from "@/components/Solutions/SolutionsOc2Plus.vue";
// import BusinessOwner from "@/components/TypesOfBusiness/BusinessOwner.vue";
// import OnlineMerchant from "@/components/TypesOfBusiness/OnlineMerchant.vue";
// import Coporate from "@/components/TypesOfBusiness/Corporate.vue";

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
    //component: AboutUs,
    component: () => import(/* webpackChunkName: "AboutUs" */ '@/components/AboutUs.vue'),
    meta:{
      title: "About Us"
    }
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    //component: Portfolio,
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio.vue'),
    meta:{
      title: "Portfolio"
    }
  },
  {
    path: "/Portfolio/Detail/:id/:name",
    name: "PortfolioDetail",
    //component: PortfolioDetail,
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/components/Portfolio/PortfolioDetail.vue'),
    meta:{
      title: "Detail"
    }
  },
  {
    path: "/Blog",
    name: "Blog",
    //component: Blog,
    component: () => import(/* webpackChunkName: "Blog" */ '@/components/Blog.vue'),
    meta:{
      title: "Blog"
    }
  },
  {
    path: "/Blogs/All/:id/:name",
    name: "BlogsAll",
    //component: BlogsAll,
    component: () => import(/* webpackChunkName: "BlogsAll" */ '@/components/Blogs/BlogsAll.vue'),
    meta:{
      title: "Detail"
    }
  },
  {
    path: "/Blogs/Detail/:id/:name",
    name: "BlogsDetail",
    //component: BlogsDetail,
    component: () => import(/* webpackChunkName: "BlogsDetail" */ '@/components/Blogs/BlogsDetail.vue'),
    meta:{
      title: "Detail"
    }
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    //component: ContactUs,
    component: () => import(/* webpackChunkName: "ContactUs" */ '@/components/ContactUs.vue'),
    meta:{
      title: "Contact Us"
    }
  },
  {
    path: "/JoinUs",
    name: "JoinUs",
    //component: JoinUs,
    component: () => import(/* webpackChunkName: "JoinUs" */ '@/components/JoinUs.vue'),
    meta:{
      title: "Join Us"
    }
  },
  {
    path: "/JoinUsForm",
    name: "JoinUsForm",
    //component: JoinUsForm,
    component: () => import(/* webpackChunkName: "JoinUsForm" */ '@/components/JoinUsForm.vue'),
    meta:{
      title: "Join Us"
    }
  },
  {
    path: "/Solutions/Fuse",
    name: "SolutionsFuse",
    //component: SolutionsFuse,
    component: () => import(/* webpackChunkName: "SolutionsFuse" */ '@/components/Solutions/SolutionsFuse.vue'),
    meta:{
      title: "Solutions Fuse"
    }
  },
  {
    path: "/Solutions/Line",
    name: "SolutionsLine",
    //component: SolutionsLine,
    component: () => import(/* webpackChunkName: "SolutionsLine" */ '@/components/Solutions/SolutionsLine.vue'),
    meta:{
      title: "Solutions Line"
    }
  },
  {
    path: "/Solutions/Akita",
    name: "SolutionsAkita",
    //component: SolutionsAkita,
    component: () => import(/* webpackChunkName: "SolutionsAkita" */ '@/components/Solutions/SolutionsAkita.vue'),
    meta:{
      title: "Solutions Akita"
    }
  },
  {
    path: "/Solutions/Beary",
    name: "SolutionsBeary",
    //component: SolutionsBeary,
    component: () => import(/* webpackChunkName: "SolutionsBeary" */ '@/components/Solutions/SolutionsBeary.vue'),
    meta:{
      title: "Solutions Beary"
    }
  },
  {
    path: "/Solutions/Kaikong",
    name: "SolutionsKaikong",
    //component: SolutionsKaikong,
    component: () => import(/* webpackChunkName: "SolutionsKaikong" */ '@/components/Solutions/SolutionsKaikong.vue'),
    meta:{
      title: "Solutions Kaikong"
    }
  },
  {
    path: "/Solutions/Shipmunk",
    name: "SolutionsShipmunk",
    //component: SolutionsShipmunk,
    component: () => import(/* webpackChunkName: "SolutionsShipmunk" */ '@/components/Solutions/SolutionsShipmunk.vue'),
    meta:{
      title: "Solutions Shipmunk"
    }
  },
  {
    path: "/Solutions/Oc2Plus",
    name: "SolutionsOc2Plus",
    //component: SolutionsOc2Plus,
    component: () => import(/* webpackChunkName: "SolutionsOc2Plus" */ '@/components/Solutions/SolutionsOc2Plus.vue'),
    meta:{
      title: "Solutions Oc2Plus"
    }
  },
  {
    path: "/TypesOfBusiness/BusinessOwner",
    name: "BusinessOwner",
    //component: BusinessOwner,
    component: () => import(/* webpackChunkName: "BusinessOwner" */ '@/components/TypesOfBusiness/BusinessOwner.vue'),
    meta:{
      title: "Business Owner"
    }
  },
  {
    path: "/TypesOfBusiness/OnlineMerchant",
    name: "OnlineMerchant",
    //component: OnlineMerchant,
    component: () => import(/* webpackChunkName: "OnlineMerchant" */ '@/components/TypesOfBusiness/OnlineMerchant.vue'),
    meta:{
      title: "Online Merchant"
    }
  },
  {
    path: "/TypesOfBusiness/Corporate",
    name: "Coporate",
    //component: Coporate,
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
  console.log(to)
  if(to.meta.title == "Detail"){
    document.title = to.params.name
  }else{
    document.title = to.meta.title
  }
  next();
})

export default router;