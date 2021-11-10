<template>
<div id="Home">
  <Preloader/>
  <div class="background-main">
    <div class="container">
      <BannerBU/>
      <div class="crad mt-5">
        <div class="row padding-row">
          <div class="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12">
            <img class="d-none d-xl-block d-xxl-block mt-5" src="./../assets/Vector-Smart-Object2.png">
            <img class="d-block d-xl-none d-xxl-none img-fluid item-center" src="./../assets/mobile/Vector-Smart-Object.png">
          </div>
          <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
            <div class="d-none d-xl-block d-xxl-block">
              <font class="font-wght" style="font-size:45px;margin-top:50px;position: absolute;">LET’S GROW YOUR<br> BUSINESS TOGETHER</font>
              <font class="text-s-16 text-description" style="margin-top:219px;position: absolute;width: 532px;">แม่ค้าออนไลน์ยุค 5.0 ปรับตัวยังไงให้ทันในวันที่โลกหมุนเร็วขนาดนี้ การเข้ามา ลงเล่นในตลาดที่มีคู่แข่งมากมาย ต่อสู้กันอย่างดุเดือดเพื่อแย่งชิงพื้นที่ในการนำเสนอสินค้าให้แก่ผู้บริโภค บอกเลยว่าหากทำงานนี้คนเดียวคงจะหนักเอาการ ถ้าอยากเริ่มต้นขายของออนไลน์อย่างราบรื่นปลอดภัย การมีผู้ช่วยมือดีไว้ข้างกายก็จะช่วย แบ่งเบาภาระได้เยอะ...</font>
              <button class="btn-black text-s-16 text-w-400 button" style="position: absolute;margin-top:455px"><span>Read More</span></button>
            </div>
            <div class="d-block d-xl-none d-xxl-none">
              <font class="font-wght mb-3" style="font-size:20px;display: flex;">LET’S GROW YOUR BUSINESS TOGETHER</font>
              <font class="text-s-16 text-description" style="">แม่ค้าออนไลน์ยุค 5.0 ปรับตัวยังไงให้ทันในวันที่โลกหมุนเร็วขนาดนี้ การเข้ามา ลงเล่นในตลาดที่มีคู่แข่งมากมาย ต่อสู้กันอย่างดุเดือดเพื่อแย่งชิงพื้นที่ในการนำเสนอสินค้าให้แก่ผู้บริโภค บอกเลยว่าหากทำงานนี้คนเดียวคงจะหนักเอาการ ถ้าอยากเริ่มต้นขายของออนไลน์อย่างราบรื่นปลอดภัย การมีผู้ช่วยมือดีไว้ข้างกายก็จะช่วย แบ่งเบาภาระได้เยอะ...</font>
              <button class="btn-black text-s-16 text-w-400 mt-4 item-center button"><span>Read More</span></button>
            </div>
          </div>
        </div>
        <div style="padding-top: 80px !important;padding:70px">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <router-link @click="scrollToTop" to="/TypesOfBusiness/BusinessOwner">
              <div class="card-shadow hvr-grow-rotate crad-image mt-3">
                <img class="item-center mt-3 image-size" src="./../assets/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-checking-product-stock-scan-qr-code-working-home.png">
                <p class="mt-3 text-w-700 font-wght text-center text-dark" style="position: relative;font-size:20px;z-index: 1;">BUSINESS OWNER</p>
              </div>
              </router-link>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <router-link @click="scrollToTop" to="/TypesOfBusiness/OnlineMerchant">
              <div class="card-shadow hvr-grow-rotate crad-image mt-3">
                <img class="item-center mt-3 image-size" src="./../assets/business-owner-working-home-office.png">
                <p class="mt-3 text-w-700 font-wght text-center text-dark" style="position: relative;font-size:20px;z-index: 1;">ONLINE MERCHANT</p>
              </div>
              </router-link>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <router-link @click="scrollToTop" to="/TypesOfBusiness/Corporate">
              <div class="card-shadow hvr-grow-rotate crad-image mt-3">
                <img class="item-center mt-3 image-size" src="./../assets/portrait-asian-business-man-business-district-lifestyle-business-people-concept.png">
                <p class="mt-3 text-w-700 font-wght text-center text-dark" style="position: relative;font-size:20px;z-index: 1;">CORPORATE</p>
              </div>
              </router-link>
            </div>
          </div>
        </div>

        <InterestingArticles/>

        <div class="padding-card">
          <div class="d-none d-xxl-block d-xl-block">
            <div class="row mb-3">
              <div class="col-6">
                <font class="font-wght" style="font-size:64px;position: relative;color:#23233C;line-height: 90.72px;">YOUR<br>ROADMAP<br>TO SUCCESS</font>
                <img class="mt-5" src="./../assets/Vector001.png" style="float: right;;">
                <img class="mt-2" src="./../assets/Vector-Smart-Object001.png" style="position: relative;left: -80px;">
              </div>
              <div class="col-6">
                <div class="row" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6" style="margin:15px 0px 15px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Research Find <br>Insight</font></div>
                        <div class="col-6" style="margin:5px 0px 5px 0px"><img style="left: 60px;position: relative;" src="./../assets/icon/Group.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6" style="margin:15px 0px 15px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Analytic the <br>Fact</font></div>
                        <div class="col-6" style="margin:5px 0px 5px 0px"><img style="left: 60px;position: relative;" src="./../assets/icon/Group1.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6" style="margin:38px  0px 38px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Right Strategy</font></div>
                        <div class="col-6" style="margin:5px 0px 5px 0px"><img style="left: 60px;position: relative;" src="./../assets/icon/Group2.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6" style="margin:15px 0px 15px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Repeat<br>Optimization</font></div>
                        <div class="col-6" style="margin:5px 0px 5px 0px"><img style="left: 60px;position: relative;" src="./../assets/icon/Group3.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3" style="float: right;margin: auto;">
                  <div class="card text-white card-roadmap hvr-rotate">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7" style="margin:0px 0px 0px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Get Feedback &<br>Never Stop learning</font></div>
                        <div class="col-5" style="margin:5px 0px 5px 0px"><img style="left: 30px;position: relative;" src="./../assets/icon/Group4.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 p-3">
                <div class="col-12">
                  <iframe width="100%" height="580" src="https://www.youtube.com/embed/dxN2yRqXTYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
          </div>
          <!-- ----------- mobile size ----------- -->
          <div class="d-block d-xl-none d-xxl-none">
            <div class="row mb-3">
              <div class="col-12">
                <div class="text-center">
                  <p class="font-wght mt-2" style="font-size:25px;color:#23233C;margin-bottom: 0px;">YOUR ROADMAP</p>
                  <p class="font-wght" style="font-size:25px;color:#23233C;">TO SUCCESS</p> 
                </div>
                <img class="mt-4 img-fluid" src="./../assets/Vector001.png" style="float: right;width: 110px;">
                <div class="bg" style="margin-top: 200px;">
                  <div class="card item-center card-roadmap" style="bottom: 150px;">
                    <div class="row">
                      <div class="col-6" style="margin:28px 0px 28px 0px"><font class="text-white" style="font-size: 18px;left: 18px;position: relative;">Research Find <br>Insight</font></div>
                      <div class="col-6" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group.png"></div>
                    </div>
                  </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-6" style="margin:28px 0px 28px 0px"><font class="text-white" style="font-size: 18px;left: 18px;position: relative;">Analytic the <br>Fact</font></div>
                        <div class="col-6" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group1.png"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-6" style="margin:40px 0px 40px 0px"><font class="text-white" style="font-size: 18px;left: 18px;position: relative;">Right Strategy</font></div>
                        <div class="col-6" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group2.png"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-6" style="margin:28px 0px 28px 0px"><font class="text-white" style="font-size: 18px;left: 18px;position: relative;">Repeat<br>Optimization</font></div>
                        <div class="col-6" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 40px;" src="./../assets/icon/Group3.png"></div>
                      </div>
                    </div>
                    <div class="card item-center card-roadmap mt-3" style="bottom: 150px;">
                      <div class="row">
                        <div class="col-7" style="margin:15px 0px 15px 0px"><font class="text-white" style="font-size: 18px;left: 18px;position: relative;">Get Feedback &<br>Never Stop <br>learning</font></div>
                        <div class="col-5" style="margin:22px 0px 22px 0px"><img width="65" height="65" style="position: relative;margin-left: 20px;" src="./../assets/icon/Group4.png"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 p-3">
                <div class="col-12">
                  <iframe width="100%" height="320" src="https://www.youtube.com/embed/dxN2yRqXTYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          <Review :type="type"/>
          <div class="row mt-3 mb-3 d-none d-xl-block d-xxl-block">
            <div class="col-12">
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid" src="./../assets/logo/image113.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image114.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image115.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image116.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image117.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image118.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image119.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image120.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image121.png"></td>
                <td><img class="img-fluid" src="./../assets/logo/image122.png"></td>
              </table>
            </div>
          </div>
          <div class="row mt-3 mb-3 p-3 d-block d-xl-none">
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid p-2" src="./../assets/logo/image113.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image114.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image115.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image116.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image117.png"></td>
              </table>
              <table style="text-align:center;width:100%">
                <td><img class="img-fluid p-2" src="./../assets/logo/image118.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image119.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image120.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image121.png"></td>
                <td><img class="img-fluid p-2" src="./../assets/logo/image122.png"></td>
              </table>
          </div>
        </div>
        <GetQuote/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import GetQuote from '@/components/GetQuote'
import InterestingArticles from '@/components/InterestingArticles'
import Review from '@/components/Review'
import Preloader from '@/components/Preloader'
import BannerBU from '@/components/BannerBU'

export default {
  name: 'Home',
  components: {
    GetQuote,
    InterestingArticles,
    Review,
    BannerBU,
    Preloader
  },
  data(){
    return {
    type:'All'
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
.bg{
  background-image: url('./../assets/mobile/Vector-Smart-Object001.png');
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
}

</style>
