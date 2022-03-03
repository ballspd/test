<template>
  <div id="FooterMenu">
      <div class="background-main footer-position">
        <div class="container">
            <div class="crad">
            <div style="background-color: #15304E">
                <div class="padding-footer">
                <div class="row">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu">
                        <p class="text-w-700 font-footer text-white">บริการของเรา</p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Fuse" class="text-white">ลงโฆษณาออนไลน์</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Akita" class="text-white">คลังสินค้าครบวงจร</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Line" class="text-white">เปิดบัญชี LINE OA</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Beary" class="text-white">ทำเว็บไซต์</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Kaikong" class="text-white">ทำคอนเทนต์</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Shipmunk" class="text-white">เปรียบเทียบค่าขนส่ง</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Solutions/Oc2Plus" class="text-white">Customer Data Platform</router-link></p>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu">
                        <p class="text-w-700 font-footer text-white">เกี่ยวกับเรา</p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/AboutUs" class="text-white">ติดต่อเรา</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/JoinUs" class="text-white">ร่วมงานกับเรา</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Portfolio" class="text-white">Portfolio</router-link></p>
                        <p class="text-w-400 font-footer"><router-link @click="scrollToTop" to="/Blog" class="text-white">Blog</router-link></p>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-2" style="margin-right:15px"><a href="https://www.facebook.com/Sellsuki/" target="_blank"><img class="hvr-pop" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_facebook_bc636d1ef3.webp" alt="facebook icon"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="https://lin.ee/eMB0DP0" target="_blank"><img class="hvr-pop" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Group_351_6cfbba5ab1.png" alt="line icon"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ" target="_blank"><img class="hvr-pop" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_youtube_d357434034.webp" alt="youtube icon"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="" target="_blank"><img class="hvr-pop" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_mail_6d62394fe0.webp" alt="mail icon"></a></div>
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
                        <img class="background-main" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/image13_bf4410dec1.png" alt="background main" style="border-radius: 5px">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12"><hr style="border: 1px solid #FFFFFF;width:100%;opacity:1"></div>
                </div>
                <div class="row mt-1">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><p class="text-w-400" style="color:#FFFFFF;">© Sellsuki Co., Ltd. (c) All Rights Reserved. Dream-Theme</p></div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end"><p class="text-w-400" style="font-size: 14px;color:#FFFFFF;"><router-link @click="scrollToTop" to="/Policy">Privacy Policy</router-link><i class="fa fa-cloud"></i> <font style="margin-left:6px;margin-right:6px">|</font> <router-link @click="scrollToTop" to="/TermsOfUse">Terms and Conditions</router-link></p></div>
                </div>
                </div>
            </div>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterMenu',
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

<style scoped>
.hover-manu a:hover{
  color: #F38100 !important;
  font-weight: 400;
}

.hover-manu a {
  color: #FFFFFF !important;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
}
.hover-manu a:after {    
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
.hover-manu a:hover:after { 
  width: 100%; 
}

a{
  color: unset;
}
</style>