<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top d-none d-xl-block d-xxl-block" style="background-color: #F6ECE0;z-index: 999999;">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="./../../assets/logo-sellsuki.png" alt="" width="141.29" height="60" class="d-inline-block align-text-top">
      </a>
      <div class="ml-2">
        <ul class="navbar-nav navbar-custom shadow text-s-16 text-w-500 menu-bar" style="padding:0px !important;width: 797px!important;">
          <li class="nav-item navbar-item" style="border-radius: 50px 0px 0px 50px;">
            <router-link style="padding-left:19px !important" class="nav-link text-c-menu" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Services <i class="bi bi-chevron-down" style="font-size: 15px;"></i></router-link>
            <ul class="dropdown" style="padding: 30px 50px 30px 50px;width: 1380px;left: 50%;">
              <i class="bi bi-caret-up-fill" style="font-size: 40px;position: absolute;left: 29.5%;color: #ffffff;bottom: 440px;"></i>
              <div class="row">
                <div class="col-2" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;height:415px">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Digital Marketing</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Influencer Marketing</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Content Marketing</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Collaborative Ads <br>(Marketplace)</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Spy ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Social Listening</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Ads Intelligence</p></a>
                </div>
                <div class="col-2" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;width: 220px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Digital Advertising</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 182px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Tiktok Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Facebook Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Instagram Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Youtube Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Google Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Twitter Ads</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Line Ads Platform</p></a> 
                </div>
                <div class="col-2" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Business Consult</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">                  
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Marketing Strategy</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;margin-bottom: 2rem;">e-Distributor</p></a>
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">LINE Service</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE My shop</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE OA</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE Chatbot</p></a>
                </div>
                <div class="col-4" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;width: 405px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">MarTech</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 360px;height: 0px;">
                  <div class="row">
                    <div class="col-6">
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Information Website</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">E-Commerce Website</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Business Intelligence</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Catalog Website <br>(LINE my shop)</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE API</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Campaign Manager</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Application System <br>Development</p></a>
                    </div>
                    <div class="col-6" style="padding: 0;">
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Order Management<br>System</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">CRM System</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Customer Data<br>Platform</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Consult & Maintenance<br>Service Agreement</p></a>
                      <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Marketing Automation</p></a>
                    </div>
                  </div>
                </div>
                <div class="col-2" style="padding-right: 20px !important;padding-left: 20px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">E-commerce Operation</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 214px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fulfillment Service</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fulfillment System</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;margin-bottom: 2rem;">Product Catalog<br>Management</p></a>
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Delivery</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Delivery</p></a>
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Solutions <i class="bi bi-chevron-down" style="font-size: 15px;"></i></router-link>
            <ul class="dropdown" style="padding: 30px 32px 30px 32px;width: 540px;left: 43%;">
              <i class="bi bi-caret-up-fill" style="font-size: 40px;position: absolute;left: 43.5%;color: #ffffff;bottom: 440px;"></i>
              <div class="row">
                <div class="col-6" style="border-right: 1px solid #E7E7EA;padding-right: 20px !important;padding-left: 20px !important;height:415px;width: 235px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Types of Business</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Business Owner</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Content Marketing</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Online Merchant</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Corporate</p></a>
                </div>
                <div class="col-6" style="padding-right: 20px !important;padding-left: 20px !important;width: 260px !important;">
                  <a href="#"><img src="./../../assets/icon/Vector5.png" alt=""><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Services-Products</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 182px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fuse Advertising</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE Agency</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Kaikong Content Marketing</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Beary Web & Tech Service</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Akita Fulfillment</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Shipmunk : Dropshipping</p></a>
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Oc2Plus : Customer Data<br>Platform</p></a> 
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/AboutUs">About Us</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Blog">Blog</router-link>
          </li>
          <li class="nav-item navbar-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/ContactUs">Contact Us</router-link>
          </li>
          <li class="nav-item navbar-item" style="border-radius: 0px 50px 50px 0px;">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/JoinUs">Join Us</router-link>
          </li>
        </ul>
      </div>
      <div class="ml-2">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-c-menu" to="/Home" style="margin-right:15px;margin-left:10px;padding-right: 0 !important;padding-left: 0 !important;"><div class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">EN</div></router-link>
             <ul class="dropdown" style="padding: 15px;width: 150px;height: 120px;margin-left: 35px;top: 90px">
              <i class="bi bi-caret-up-fill" style="font-size: 40px;position: absolute;left: 55px;color: #FFFFFF;bottom: 90px;"></i>
              <div class="row">
                <div class="col-12">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">TH</p></a>
                  <hr style="border: 1px solid #50151C;width: 100px;height: 0px;">
                  <a href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">EN</p></a>
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
  <div class="d-block d-xl-none d-xxl-none">
    <nav class="navbar" style="background-color: #F6ECE0;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="display_manu = true" >
            <i class="bi bi-list" style="font-size: 35px;"></i>
        </button>
        <img src="./../../assets/mobile/image102.png">
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
            <div v-if="menu != ''">
                <a @click="display_sup_manu = true,menu = ''"><i class="bi bi-chevron-left me-2"></i> Back</a>
                <hr style="border: 1px solid #50151C;"/>
                <ServicesMenu/>
            </div>

            <div v-if="display_sup_manu === true">
                <router-link @click="display_manu = false" to="/">Home</router-link>
                <hr style="border: 1px solid #50151C;"/>
                <div @click="menu = 'Services',display_sup_manu = false" class="d-flex" >
                <a href="#">Services</a>
                <i class="ms-auto bi bi-chevron-right"></i>
                </div>
            
                <hr style="border: 1px solid #50151C;"/>
                <div class="d-flex" >
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

export default {
  name: 'NavMenu',
  components: {
    ServicesMenu,
  },
  data () {
    return {
      menu: '',
      display_sup_manu: true,
      display_manu: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style>
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
