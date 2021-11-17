<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top d-none d-xl-block d-xxl-block" style="background-color: #F6ECE0;z-index: 999;">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="./../../assets/Sellsuki-logo-01.png" alt="" width="141.29" height="60" class="d-inline-block align-text-top">
      </a>
      <div class="ml-2">
        <ul class="navbar-nav navbar-custom shadow text-s-16 text-w-500 menu-bar" style="padding:0px !important;width: 100% !important;"> <!-- 797px -->
          <li class="nav-item navbar-item" style="border-radius: 50px 0px 0px 50px;">
            <router-link @click="scrollToTop" style="padding-left:19px !important" class="nav-link text-c-menu" aria-current="page" to="/">Home</router-link>
          </li>
          <!-- <li class="nav-item navbar-item">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Services <i class="bi bi-chevron-down" style="font-size: 15px;"></i></router-link>
            <ul class="dropdown" style="padding: 30px 50px 30px 50px;width: 1380px;left: 50%;">
              <i class="bi bi-caret-up-fill pe-5 ps-5" style="font-size: 40px;position: absolute;left: 355px;color: #ffffff;bottom: 440px;"></i>
              <div class="row">
                <div class="col-2 hover-manu" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;height:415px">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Digital Marketing</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Influencer Marketing</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Content Marketing</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Collaborative Ads <br>(Marketplace)</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Spy ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Social Listening</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Ads Intelligence</p></a>
                </div>
                <div class="col-2 hover-manu" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;width: 220px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Digital Advertising</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 182px;height: 0px;">
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Tiktok Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Facebook Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Instagram Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Youtube Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Google Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Twitter Ads</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Line Ads Platform</p></a> 
                </div>
                <div class="col-2 hover-manu" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Business Consult</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">                
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Marketing Strategy</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;margin-bottom: 2rem;">e-Distributor</p></a><br>
                  <a @click="scrollToTop" href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">LINE Service</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE My shop</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE OA</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE Chatbot</p></a>
                </div>
                <div class="col-4 hover-manu" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;width: 405px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">MarTech</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 360px;height: 0px;">
                  <div class="row">
                    <div class="col-6">
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Information Website</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">E-Commerce Website</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Business Intelligence</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Catalog Website <br>(LINE my shop)</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE API</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Campaign Manager</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Application System <br>Development</p></a>
                    </div>
                    <div class="col-6" style="padding: 0;">
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Order Management<br>System</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">CRM System</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Customer Data<br>Platform</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Consult & Maintenance<br>Service Agreement</p></a><br>
                      <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Marketing Automation</p></a>
                    </div>
                  </div>
                </div>
                <div class="col-2 hover-manu" style="padding-right: 20px !important;padding-left: 20px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">E-commerce Operation</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 214px;height: 0px;">
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fulfillment Service</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fulfillment System</p></a><br>
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;margin-bottom: 2rem;">Product Catalog<br>Management</p></a><br>
                  <a @click="scrollToTop" href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Delivery</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a @click="scrollToTop" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Delivery</p></a>
                </div>
              </div>
            </ul>
          </li> -->
          <li class="nav-item navbar-item">
            <a class="nav-link border-menu text-c-menu" aria-current="page" href="#">Solutions <i class="bi bi-chevron-down" style="font-size: 15px;"></i></a>
            <ul class="dropdown" style="padding: 30px 32px 30px 32px;width: 540px;margin-left: 75px;"> <!-- 43% -->
              <i class="bi bi-caret-up-fill pe-5 ps-5" style="font-size: 40px;position: absolute;left: 185px;color: #ffffff;bottom: 440px;"></i>
              <div class="row">
                <div class="col-6 hover-manu" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;height:415px;width: 235px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Types of Business</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <router-link @click="scrollToTop" to="/TypesOfBusiness/BusinessOwner"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Business Owner</p></router-link><br>
                  <router-link @click="scrollToTop" to="/TypesOfBusiness/OnlineMerchant"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Online Merchant</p></router-link><br>
                  <router-link @click="scrollToTop" to="/TypesOfBusiness/Corporate"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Corporate</p></router-link>
                </div>
                <div class="col-6 hover-manu" style="padding-right: 20px !important;padding-left: 20px !important;width: 260px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Services-Products</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 182px;height: 0px;">
                  <router-link @click="scrollToTop" to="/Solutions/Fuse"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fuse Advertising</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Line"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE Agency</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Kaikong"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Kaikong Content Marketing</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Beary"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Beary Web & Tech Service</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Akita"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Akita Fulfillment</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Shipmunk"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Shipmunk : Dropshipping</p></router-link><br>
                  <router-link @click="scrollToTop" to="/Solutions/Oc2Plus"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Oc2Plus : Customer Data<br>Platform</p></router-link> 
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item navbar-item">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/AboutUs">About Us</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/Portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/Blog">Blog</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/ContactUs">Contact Us</router-link>
          </li>
          <li class="nav-item navbar-item" style="border-radius: 0px 50px 50px 0px;">
            <router-link @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/JoinUs">Join Us</router-link>
          </li>
        </ul>
      </div>
      <div class="ml-2">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link text-c-menu cursor-pointer" style="margin-right:15px;margin-left:10px;padding-right: 0 !important;padding-left: 0 !important;">
              <div v-if="lang == 'en'" class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">EN</div>
              <div v-else class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">TH</div>
            </div>
             <ul class="dropdown" style="padding: 15px;width: 150px;height: 120px;margin-left: 35px;top: 90px">
              <i class="bi bi-caret-up-fill" style="font-size: 40px;position: absolute;left: 55px;color: #FFFFFF;bottom: 90px;"></i>
              <div class="row">
                <div class="col-12">
                  <a @click="langChange('th-TH'),lang = 'th-TH'" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">TH</p></a>
                  <hr style="border: 1px solid #50151C;width: 100px;height: 0px;">
                  <a @click="langChange('en'),lang = 'en'" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">EN</p></a>
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item">
            <a href="tel:0877334145" target="_blank" class="nav-link text-c-menu" style="margin-right:40px;margin-left:10x;padding-right: 0 !important;padding-left: 0 !important;"><img class="shadow-filter" style="background-color: #FFFFFF;border-radius: 50px;" src="./../../assets/icon/Vector.png"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!-- ---- modile size ----- -->
  <div class="d-block d-xl-none">
    <nav class="navbar fixed-top" style="background-color: #F6ECE0;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="display_manu = true" >
            <i class="bi bi-list" style="font-size: 35px;"></i>
        </button>
        <img src="./../../assets/Sellsuki-logo-01.png">
        <a href="tel:0877334145" target="_blank"><img class="shadow" src="./../../assets/mobile/Vector.png" style="background-color: #FFFFFF;border-radius: 50px;"></a>
      </div>
    </nav>
    <div v-if="display_manu" class="side-bg"></div>
    <div class="sidenav animate__animated" :class="{'animate__fadeInLeft':display_manu,'animate__fadeOutLeft':!display_manu}">
      <div class="row p-3">
        <div class="col-5">
          <div class="p-1" style="background: #50151C;border-radius: 2px;">
            <div class="row text-center">
              <div class="col-6">
                <a class="text-s-18 p-1 active-lang" style="color:#FFFFFF">EN</a>
              </div>
              <div class="col-6">
                <a class="text-s-18 p-1" style="color:#FFFFFF">ไทย</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7">
          <a class="closebtn" style="cursor:pointer;float: right" @click="display_manu = false"><i class="bi bi-x"></i></a>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-12">
            <div v-if="component != ''">
                <a @click="toggle"><i class="bi bi-chevron-left me-2"></i> Back</a>
                <hr style="border: 1px solid #50151C;"/>
                <component :component="component" :is="component"></component>
            </div>

            <div v-if="component == ''">
                <router-link @click="display_manu = false" to="/">Home</router-link>
                <!-- <hr style="border: 1px solid #50151C;"/>
                <div @click="component = 'ServicesMenu'" class="d-flex" >
                <a href="#">Services</a>
                <i class="ms-auto bi bi-chevron-right"></i>
                </div> -->
            
                <hr style="border: 1px solid #50151C;"/>
                <div @click="component = 'SolutionsMenu'" class="d-flex" >
                <a href="#">Solutions</a>
                <i class="ms-auto bi bi-chevron-right"></i>
                </div>
            
                <hr style="border: 1px solid #50151C;"/>
                <router-link @click="display_manu = false" to="/AboutUs">About Us</router-link>
            
                <hr style="border: 1px solid #50151C;"/>
                <router-link @click="display_manu = false" to="/Portfolio">Portfolio</router-link>
            
                <hr style="border: 1px solid #50151C;"/>
                <router-link @click="display_manu = false" to="/Blog">Blog</router-link>

                <hr style="border: 1px solid #50151C;"/>
                <router-link @click="display_manu = false" to="/ContactUs">Contact Us</router-link>
                
                <hr style="border: 1px solid #50151C;"/>
                <router-link @click="display_manu = false" to="/JoinUs">Join Us</router-link>
                <hr style="border: 1px solid #50151C;"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesMenu from '@/components/Menu/ServicesMenu'
import SolutionsMenu from '@/components/Menu/ServicesMenu'
import DigitalMarketingMenu from '@/components/Menu/DigitalMarketingMenu'

export default {
  name: 'NavMenu',
  components: {
    ServicesMenu,
    SolutionsMenu,
    DigitalMarketingMenu
  },
  data () {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      menu: '',
      display_manu: false,
      component: '',
      lang:lang
    }
  },
  methods: {
    toggle(){
        this.component = this.menu;
    },
    scrollToTop() {
        window.scrollTo(0,0);
    },
    langChange(event){
      localStorage.setItem('lang',event);
      window.location.reload();
    }
  }
}
</script>

<style>
.hover-manu a p:hover{
  color: #F38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151C !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
.hover-manu a p:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #F38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.hover-manu a p:hover:after { 
  width: 100%; 
}

.sidenav {
  height: 100%;
  width: 80%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 15px;
}

.side-bg {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #000000;
  overflow-x: hidden;
  transition: 0.5s;
  opacity: 0.5;
}

.sidenav a {
  text-decoration: none;
  font-size: 18px;
  color: #50151C;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #F6ECE0;
}

.sidenav .closebtn {
  font-size: 36px;
  bottom: 5px;
  position: relative;
}

.active-lang{
  background: #F6ECE0;
  color:#50151C !important;
  font-family: 'PromptBold', sans-serif !important;
  font-weight: bold !important;
}
</style>
