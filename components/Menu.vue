<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top d-none d-xl-block d-xxl-block" style="background-color: #F6ECE0;z-index: 999;">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Sellsuki_logo_01_3_41353765c4.png" alt="Sellsuki logo" width="141.29" height="60" class="d-inline-block align-text-top">
      </a>
      <div class="ml-2">
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

