<template>
<div id="Home">
  <Preloader/>
  <div class="background-main">
    <div class="container">
      <BannerBU/>
      <div class="crad mt-5">
        <div class="row padding-row mb-0">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img class="d-none d-xl-block d-xxl-block mt-5" width="487" height="440" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Vector_Smart_Object2_869bcb7919.webp" alt="Vector Smart Object" loading="lazy">
            <img class="d-block d-xl-none d-xxl-none item-center" width="322" height="291" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Vector_Smart_Object2_869bcb7919.webp" alt="Vector Smart Object" loading="lazy">
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div itemscope class="d-none d-xl-block d-xxl-block">
              <h1 itemprop="name" class="font-wght mt-5 text-s-45 line-height-1-5" v-html="$t('home.YourRoadmap')"></h1>
              <p itemprop="desc" v-if="readMore == false" class="text-s-16 text-description mt-5 mb-5 animate__animated animate__flipInX">{{$t("home.text_shot")}}</p>
              <p itemprop="desc" v-if="readMore == true" class="text-s-16 text-description mt-5 mb-5 animate__animated animate__flipInX">{{$t("home.text_long")}}</p>
              <button @click="readMore = !readMore" class="btn-black text-s-16 text-w-400 hvr-back-pulse"><span>Read More</span></button>
            </div>
            <div itemscope class="d-block d-xl-none d-xxl-none p-3">
              <h1 itemprop="name" class="font-wght mb-3 text-s-30 d-flex">{{ $t("home.YourRoadmapM") }}</h1>
              <p itemprop="desc" v-if="readMore == false" class="text-s-16 text-description animate__animated animate__flipInX" style="">{{$t("home.text_shot")}}</p>
              <p itemprop="desc" v-if="readMore == true" class="text-s-16 text-description animate__animated animate__flipInX">{{$t("home.text_long")}}</p>
              <button @click="readMore = !readMore" class="item-center btn-black text-s-16 text-w-400 mt-4 item-center hvr-back-pulse d-block"><span>Read More</span></button>
            </div>
          </div>
        </div>
        <div v-if="section1" class="padding-home">
          <div class="row pb-4">
              <div class="col-12 text-center">
                  <h2 class="text-w-700 text-s-36 color-231F20">SOLUTION SERVICE</h2>
                  <h2 class="text-w-700 text-s-24 color-231F20">ธุรกิจแบบไหนก็ดูเเลไหว</h2>
              </div>
            </div>
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/BusinessOwner')">
              <div class="card card-shadow hvr-grow-rotate-left crad-service mt-3">
                <img class="item-center mt-3 p-4" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/home03_1_5fa36c01d1.webp" alt="home" loading="lazy">
                <div class="card-body crad-body-service">
                  <h3 class="text-w-700 font-wght text-center text-dark m-1 text-service">BUSINESS OWNER</h3>
                </div>
              </div>
              </NuxtLink>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/OnlineMerchant')">
              <div class="card card-shadow hvr-grow mt-3 crad-service">
                <img class="item-center mt-3 p-4" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/home03_2_30fffe585a.webp" alt="home" loading="lazy">
                <div class="card-body crad-body-service">
                  <h3 class="text-w-700 font-wght text-center text-dark m-1 text-service">ONLINE MERCHANT</h3>
                </div>
              </div>
              </NuxtLink>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <NuxtLink @click="scrollToTop" :to="localePath('/TypesOfBusiness/OnlineMerchant')">
              <div class="card card-shadow hvr-grow-rotate mt-3 crad-service">
                <img class="item-center mt-3 p-4" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/home03_3_2f16995ad2.webp" alt="home" loading="lazy">
                <div class="card-body crad-body-service">
                  <h3 class="text-w-700 font-wght text-center text-dark m-1 text-service">CORPORATE</h3>
                </div>
              </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-5">
        <ParallaxMobile v-if="section2"/>
        </div>
        <InterestingArticles :type="type" v-if="section3"/>

        <div v-if="section4" class="padding-card">
          <div class="d-none d-xxl-block d-xl-block">
            <div class="row mb-3">
              <div class="col-6">
                <h2 class="font-wght text-s-64 color-23233C text-yourroadmap">YOUR<br>ROADMAP<br>TO SUCCESS</h2>
                <img class="mt-3 float-end" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Vector001_89725b6f03.webp" alt="Vector" loading="lazy">
                <img class="mt-2 img-smart" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Vector_Smart_Object001_442f89ee50.webp" alt="Vector_Smart_Object" loading="lazy">
              </div>
              <div class="col-6">
                <div class="row float-end m-auto">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:20px 0px 20px 0px"><div style="font-size: 20px;left: 30px;position: relative;" v-html="$t('home.roadmap1')"></div></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group.webp" alt="Group" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:20px 0px 20px 0px"><div style="font-size: 20px;left: 30px;position: relative;" v-html="$t('home.roadmap2')"></div></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group1.webp" alt="Group1" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:20px  0px 20px 0px"><div style="font-size: 20px;left: 30px;position: relative;" v-html="$t('home.roadmap3')"></div></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group2.webp" alt="Group2" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:20px 0px 20px 0px"><div style="font-size: 19px;left: 30px;position: relative;" v-html="$t('home.roadmap4')"></div></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group3.webp" alt="Group3" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:0px 0px 0px 0px"><div style="font-size: 20px;left: 30px;position: relative;" v-html="$t('home.roadmap5')"></div></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group4.webp" alt="Group4" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 p-3">
                <YoutubeVideo/>
            </div>
          </div>
          <!-- ----------- mobile size ----------- -->
          <div class="d-block d-xl-none d-xxl-none">
            <div class="row mb-3">
              <div class="col-12">
                <div class="text-center">
                  <h2 class="font-wght mt-2 color-23233C" style="font-size:25px;margin-bottom: 0px;">YOUR ROADMAP <br>TO SUCCESS</h2>
                </div>
                <img class="mt-4 img-fluid" src="./../assets/Vector001.webp" alt="Vector 001" style="float: right;width: 110px;">
                <div class="bg" style="margin-top: 200px;">
                  <div class="card item-center card-roadmap" style="bottom: 150px;">
                    <div class="row">
                      <div class="col-7" style="margin:28px 0px 28px 0px"><div class="text-white" style="font-size: 18px;left: 18px;position: relative;" v-html="$t('home.roadmap1')"></div></div>
                      <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group.webp" alt="Group" loading="lazy"></div>
                    </div>
                  </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-7" style="margin:28px 0px 28px 0px"><div class="text-white" style="font-size: 18px;left: 18px;position: relative;" v-html="$t('home.roadmap2')"></div></div>
                        <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group1.webp" alt="Group1" loading="lazy"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-7" style="margin:28px 0px 28px 0px"><div class="text-white" style="font-size: 18px;left: 18px;position: relative;" v-html="$t('home.roadmap3')"></div></div>
                        <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group2.webp" alt="Group2" loading="lazy"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-7" style="margin:15px 0px 15px 0px"><div class="text-white" style="font-size: 18px;left: 18px;position: relative;" v-html="$t('home.roadmap4')"></div></div>
                        <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group3.webp" alt="Group3" loading="lazy"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-7" style="margin:15px 0px 15px 0px"><div class="text-white" style="font-size: 18px;left: 18px;position: relative;" v-html="$t('home.roadmap5')"></div></div>
                        <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 20px;" src="./../assets/icon/Group4.webp" alt="Group4" loading="lazy"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 p-3">
                  <YoutubeVideo/>
              </div>
            </div>
          <Review :type="type"/>
          <div class="row mt-3 mb-3 d-none d-xl-block d-xxl-block">
            <div class="col-12">
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_11_fb7cd31613.webp" alt="logo partner1" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_22_7dc25d4c2b.webp" alt="logo partner2" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_33_df24cea2cc.webp" alt="logo partner3" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_44_cc06f77185.webp" alt="logo partner4" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_55_2817addebd.webp" alt="logo partner5" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_66_a377e6c849.webp" alt="logo partner6" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_77_bee2277445.webp" alt="logo partner7" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_88_342b654e63.webp" alt="logo partner8" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_99_4cf2750cce.webp" alt="logo partner9" loading="lazy"></td>
                <td><img class="img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_1010_2a62f4561b.webp" alt="logo partner10" loading="lazy"></td>
              </table>
            </div>
          </div>
          <div class="row mt-3 mb-3 p-3 d-block d-xl-none">
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_11_fb7cd31613.webp" alt="logo partner1" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_22_7dc25d4c2b.webp" alt="logo partner2" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_33_df24cea2cc.webp" alt="logo partner3" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_55_2817addebd.webp" alt="logo partner4" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_66_a377e6c849.webp" alt="logo partner5" loading="lazy"></td>
              </table>
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_66_a377e6c849.webp" alt="logo partner6" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_77_bee2277445.webp" alt="logo partner7" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_88_342b654e63.webp" alt="logo partner8" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_99_4cf2750cce.webp" alt="logo partner9" loading="lazy"></td>
                <td><img class="img-fluid p-2" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/logo_partner_1010_2a62f4561b.webp" alt="logo partner10" loading="lazy"></td>
              </table>
          </div>
        </div>
        <GetQuote v-if="section5"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
    type:'All',
    readMore: false,
    section1:false,
    section2:false,
    section3:false,
    section4:false,
    section5:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onShow);
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    },
    onShow (event) {
          this.windowTop = event.target.documentElement.scrollTop;
          if(this.windowTop > 500){
              this.section1 = true
          }
          if(this.windowTop > 900){
              this.section2 = true
          }
          if(this.windowTop > 1300){
              this.section3 = true
          }
          if(this.windowTop > 1500){
              this.section4 = true
          }
          if(this.windowTop > 1800){
              this.section5 = true
          }
      },
  }
}
</script>

<style scoped>
.bg{
  background-image: url('./../assets/mobile/Vector-Smart-Object001.webp');
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
}

.hvr-grow-rotate-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow-rotate-left:hover, .hvr-grow-rotate-left:focus, .hvr-grow-rotate-left:active {
  -webkit-transform: scale(1.1) rotate(-4deg);
  transform: scale(1.1) rotate(-4deg);
}

.padding-home{
  padding-top: 80px !important;
  padding:40px;
}

.crad-service{
  border-radius: 20px;
  background-color: #CBE2F8;
  width: 286px;
}

.crad-body-service{
  background-color: #AACCEB;
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}

.text-service{
  position: relative;
  font-size:20px;
  z-index: 1;
}

.text-yourroadmap {
  position: relative;
  line-height: 90.72px;
}

.img-smart{
  position: relative;left: -80px;height: 510px;width: 540px;
}

.col-7-custom{
  margin:20px 0px 20px 0px
}

.col-5-custom{
  margin:20px 0px 20px 0px
}
</style>
