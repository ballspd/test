<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top d-none d-xl-block d-xxl-block" style="background-color: #F6ECE0;z-index: 999;">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Sellsuki_logo_01_3_41353765c4.png" alt="Sellsuki logo" width="141.29" height="60" class="d-inline-block align-text-top">
      </a>
      <div class="ml-2">
        <ul class="navbar-nav navbar-custom shadow text-s-16 text-w-500 menu-bar" style="padding:0px !important;width: 100% !important;"> <!-- 797px -->
          <li class="nav-item navbar-item" style="border-radius: 50px 0px 0px 50px;">
            <NuxtLink :to="localePath('/')" style="padding-left:19px !important" class="nav-link text-c-menu">Home</NuxtLink>
          </li>
          <!-- <li class="nav-item navbar-item">
            <NuxtLink @click="scrollToTop" class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Services <i class="bi bi-chevron-down" style="font-size: 15px;"></i></NuxtLink>
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
                  <a href="#"><img src="./../assets/icon/icon-menu1.png" alt="icon-menu1"><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Types of Business</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 173px;height: 0px;">
                  <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/BusinessOwner')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Business Owner</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/OnlineMerchant')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Online Merchant</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/Corporate')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Corporate</p></NuxtLink>
                </div>
                <div class="col-6 hover-manu" style="padding-right: 20px !important;padding-left: 20px !important;width: 260px !important;">
                  <a href="#"><img src="./../assets/icon/icon-menu2.png" alt="icon-menu2"><font class="text-w-700 text-s-16" style="color:#50151C;margin-left:10px;position: absolute;margin-top: 2px;">Services-Products</font></a>
                  <hr style="border: 1px solid #E7E7EA;width: 182px;height: 0px;">
                  <nuxt-link @click="scrollToTop" :to="localePath('/Solutions/Fuse')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Fuse Advertising</p></nuxt-link><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Line')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">LINE Agency</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Kaikong')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Kaikong Content Marketing</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Beary')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Beary Web & Tech Service</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Akita')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Akita Fulfillment</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Shipmunk')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Shipmunk : Delivery Booking</p></NuxtLink><br>
                  <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Oc2Plus')"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">Oc2Plus : Customer Data<br>Platform</p></NuxtLink> 
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div class="ml-2">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link text-c-menu cursor-pointer" style="margin-right:15px;margin-left:10px;padding-right: 0 !important;padding-left: 0 !important;">
              <div v-if="$i18n.locale == 'en'" class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">EN</div>
              <div v-else class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">TH</div>
            </div>
             <ul class="dropdown" style="padding: 15px;width: 150px;height: 120px;margin-left: 35px;top: 90px">
              <i class="bi bi-caret-up-fill" style="font-size: 40px;position: absolute;left: 55px;color: #FFFFFF;bottom: 90px;"></i>
              <div class="row">
                <div class="col-12">
                  <nuxt-link :to="switchLocalePath('th-TH')" @click="langChange('th-TH'),lang = 'th-TH'" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">TH</p></nuxt-link>
                  <hr style="border: 1px solid #50151C;width: 100px;height: 0px;">
                  <nuxt-link :to="switchLocalePath('en')" @click="langChange('en'),lang = 'en'" href="#"><p class="text-w-500 text-s-16" style="color:#50151C;margin-top: 2px;">EN</p></nuxt-link>
                </div>
              </div>
            </ul>
          </li>
          <li class="nav-item">
            <a href="tel:020263250" target="_blank" class="nav-link text-c-menu" style="margin-right:40px;margin-left:10x;padding-right: 0 !important;padding-left: 0 !important;"><img class="shadow-filter" style="background-color: #FFFFFF;border-radius: 50px;" src="./../assets/icon/Vector.png"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    //const lang = localStorage.getItem('lang') || 'th-TH';
    return {
      menu: '',
      component: '',
      lang:''
    }
  },
  methods: {
    toggle(){
        this.component = this.menu;
    },
    scrollToTop() {
        window.scrollTo(0,0);
    },
    langChange(){
      //localStorage.setItem('lang',event);
      window.location.reload();
    }
  }
}
</script>

<style scoped>
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
</style>

