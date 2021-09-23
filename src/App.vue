<template>
  <NavMenu/>

  <router-view></router-view>

  <div class="background-main">
    <div class="container">
        <div class="crad">
          <div style="background-color: #15304E">
            <div class="padding-footer">
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <p class="text-w-700 font-footer text-white">บริการของเรา</p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">ลงโฆษณาออนไลน์</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">คลังสินค้าครบวงจร</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">เปิดบัญชี LINE OA</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">ทำเว็บไซต์</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">ทำคอนเทนต์</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">เปรียบเทียบค่าขนส่ง</a></p>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <p class="text-w-700 font-footer text-white">เกี่ยวกับเรา</p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">ติดต่อเรา</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">ร่วมงานกับเรา</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">Portfolio</a></p>
                  <p class="text-w-400 font-footer"><a class="text-white" href="#">Blog</a></p>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div class="row">
                    <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_facebook-with-circle.png"></div>
                    <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_twitter-with-circle.png"></div>
                    <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_youtube-with-circle.png"></div>
                    <div class="col-2" style="margin-right:15px"><img src="./assets/icon/Frame.png"></div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-12">
                      <font class="text-w-700" style="font-size: 20px;color:#ffffff">Call Center</font><br>
                      <font class="text-w-700" style="font-size: 24px;color:#F38100">02 026 3250</font>
                    </div>
                    <div class="col-12 mt-5">
                      <p class="text-w-400 font-footer d-none d-xl-block d-xxl-block" style="font-size: 18px;color:#ffffff;margin-bottom:11px !important;">Sellsuki Co. Ltd.<br> 4Simplex, 3rd Floor, No. 10/39<br> Ratchadapisek Road, Chankasem,<br> Chatuchak, Bangkok 10900<br> Thailand</p>
                      <p class="text-w-400 font-footer d-block d-xl-none d-xxl-none" style="font-size: 13px;color:#ffffff;margin-bottom:11px !important;">Sellsuki Co. Ltd.<br> 4Simplex, 3rd Floor, No. 10/39 Ratchadapisek Road,<br> Chankasem, Chatuchak, Bangkok 10900 Thailand</p>
                    </div>                  
                    <div class="col-12">
                      <img class="background-main" src="./assets/image13.png" style="border-radius: 5px">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-12"><hr style="border: 1px solid #FFFFFF;width:100%;opacity:1"></div>
              </div>
              <div class="row mt-1">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><p class="text-w-400" style="color:#FFFFFF;">© Sellsuki Co. Ltd. (c) All Rights Reserved. Dream-Theme</p></div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end"><p class="text-w-400" style="font-size: 14px;color:#FFFFFF;">Privacy Policy<i class="fa fa-cloud"></i> <font style="margin-left:6px;margin-right:6px">|</font> Terms and Conditions</p></div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  <div class="fabs animate__animated animate__bounce" @click="isActive = !isActive">
    <div class="social-chat">
      <i class="bi bi-arrow-up-short" style="font-size:38px;margin: 9.2px;" :class="{'bi-chat-text-fill':isActive}"></i>
    </div>
  </div>
  <div v-if="!isActive" class="fabs animate__animated animate__bounceInUp" style="margin-bottom: 95px;">
    <a target="_blank" href="https://www.facebook.com/messages/t/Sellsuki"><img src="./assets/icon/image10.png" style="width: 55px;margin-right: 2px;"></a>
  </div>
</template>

<script>
import NavMenu from '@/components/Menu/NavMenu'

export default {
  name: 'App',
  components: {
    NavMenu,
  },
  data () {
    return {
      isActive: true
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
@import url('https://fonts.googleapis.com/css?family=Prompt');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import './assets/styles/css/hover.css';
@import './assets/styles/css/custom.css';

</style>
