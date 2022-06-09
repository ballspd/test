<template>
  <div id="FooterMenu">
      <div class="background-main footer-position">
        <div class="container">
            <div class="crad">
            <div style="background-color: #15304E">
                <div class="padding-footer">
                <div class="row">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu">
                        <p class="text-w-700 font-footer text-white">{{$t('footer.Service')}}</p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Fuse')" class="text-white">{{$t('footer.OnlineAdvertising')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Akita')" class="text-white">{{$t('footer.Fulfillment')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Line')" class="text-white">{{$t('footer.LINEAgency')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Beary')" class="text-white">{{$t('footer.DevelopWebsite')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Kaikong')" class="text-white">{{$t('footer.ContentMarketing')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Shipmunk')" class="text-white">{{$t('footer.DeliveryCompare')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Oc2Plus')" class="text-white">{{$t('footer.CustomerDataPlatform')}}</NuxtLink></p>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu">
                        <p class="text-w-700 font-footer text-white">{{$t('footer.AboutUs')}}</p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/AboutUs')" class="text-white">{{$t('footer.Contact')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/JoinUs')" class="text-white">{{$t('footer.JoinUs')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Portfolio')" class="text-white">{{$t('footer.Portfolio')}}</NuxtLink></p>
                        <p class="text-w-400 font-footer"><NuxtLink @click="scrollToTop" :to="localePath('/Blog')" class="text-white">{{$t('footer.Blog')}}</NuxtLink></p>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-2" style="margin-right:15px"><a href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img class="hvr-pop" width="57" height="57" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_facebook_bc636d1ef3.webp" alt="facebook icon" loading="lazy"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="https://lin.ee/eMB0DP0" target="_blank" rel="noopener"><img class="hvr-pop" width="58" height="58" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Group_351_3cb84c9d39.webp" alt="line icon" loading="lazy"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ" target="_blank" rel="noopener"><img class="hvr-pop" width="57" height="57" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_youtube_d357434034.webp" alt="youtube icon" loading="lazy"></a></div>
                        <div class="col-2" style="margin-right:15px"><a href="mailto:hello@sellsuki.com" target="_blank" rel="noopener"><img class="hvr-pop" width="51" height="50" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_mail_6d62394fe0.webp" alt="mail icon" loading="lazy"></a></div>
                    </div>
                    <div itemscope class="row mt-2">
                        <div class="col-12">
                        <p class="text-w-700" style="font-size: 20px;color:#ffffff">Call Center</p><br>
                        <a itemprop="tel" href="tel:020263250" target="_blank" rel="noopener"><p class="text-w-700" style="font-size: 24px;color:#F38100">02 026 3250</p></a>
                        </div>
                        <div class="col-12 mt-5">
                        <p itemprop="company" class="text-w-400 font-footer d-none d-xl-block d-xxl-block" style="font-size: 18px;color:#ffffff;margin-bottom:11px !important;">Sellsuki Co.,Ltd.<br> 4Simplex, 3rd Floor, No. 10/39<br> Ratchadapisek Road, Chankasem,<br> Chatuchak, Bangkok 10900<br> Thailand</p>
                        <p itemprop="company" class="text-w-400 font-footer d-block d-xl-none d-xxl-none" style="font-size: 13px;color:#ffffff;margin-bottom:11px !important;">Sellsuki Co.,Ltd.<br> 4Simplex, 3rd Floor, No. 10/39 Ratchadapisek Road,<br> Chankasem, Chatuchak, Bangkok 10900 Thailand</p>
                        </div>                  
                        <div class="col-12">
                        <img class="background-main" width="103" height="45" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/image13_252a55167d.webp" alt="background main" style="border-radius: 5px" loading="lazy">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12"><hr style="border: 1px solid #FFFFFF;width:100%;opacity:1"></div>
                </div>
                <div itemscope class="row mt-1">
                    <div itemprop="company" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><p class="text-w-400" style="color:#FFFFFF;">© Sellsuki Co.,Ltd. (c) All Rights Reserved. Dream-Theme</p></div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end">
                      <p class="text-w-400" style="font-size: 14px;color:#FFFFFF;">
                      <NuxtLink @click="scrollToTop" :to="localePath('/Policy')">Privacy Policy</NuxtLink><span style="margin-left:6px;margin-right:6px"> |</span> 
                      <NuxtLink @click="scrollToTop" :to="localePath('/TermsOfUse')">Terms and Conditions</NuxtLink>
                      </p>
                    </div>
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