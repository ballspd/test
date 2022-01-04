<template>
<div id="AboutUs">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-md-block">
                            <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">About Us</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght text-s-64" style="color:#50151C">ABOUT US</h1>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-md-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#50151C;margin-top:95px !important"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">About Us</font></p>
                            <h1 class="font-wght text-s-36" style="color:#50151C">ABOUT US</h1>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_about_us_01_1_5dfa225de9.webp">
                        <img class="d-block d-md-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_about_us_01_1_5dfa225de9.webp">
                    </div>
                </div>
            <div class="crad mt-5">
                <div class="row p-xxl-5 p-xl-5 p-lg-4 p-md-4 p-sm-4 p-3">
                    <div class="col-12 text-center mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-3 mt-sm-4 mt-4">
                        <p class="text-s-30 text-w-700" style="margin-bottom: 10px !important">ประวัติความเป็นมาของ</p>
                    </div>
                    <div class="col-12 mb-4">
                        <img class="item-center" width="193" height="82" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Sellsuki_logo_01_3_41353765c4.png">
                    </div>
                    <div class="d-none d-xl-block d-xxl-block">
                        <div class="col-12 mt-4" :style="'height:'+ height_colum +'px'">
                            <img src="./../assets/icon/Line28.png" :style="'left: 50%;position: absolute;margin-top: 20px;height:'+ height_border +'px'">
                            <img class="item-center-absolute pt-2" src="./../assets/icon/Ellipse14.png" :style="'margin-top:'+height_border+'px'">
                                <div class="row">
                                    <div class="col-6 text-end" style="padding-right: 55px">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'top':index != 0}">
                                            <div v-if="data.position_left == true">
                                                <img class="item-center-absolute" src="./../assets/icon/Ellipse14.png" style="margin-top: 20px;">
                                                <p class="text-s-30 text-w-700" style="color:#50151C">{{data.year}}</p>
                                                <p style="font-size:18" v-html="markdownToHtml(data.message)"></p>
                                                <img class="iem-center img-fluid" :src="data.image.url" style="margin-top: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 text-start" style="padding-left: 55px;margin-top:70px">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'top':index != 0}">
                                            <div v-if="data.position_left == false">
                                                <img class="item-center-absolute" src="./../assets/icon/Ellipse14.png" style="margin-top: 20px;">
                                                <p class="text-s-30 text-w-700" style="color:#50151C">{{data.year}}</p>
                                                <p style="font-size:18" v-html="markdownToHtml(data.message)"></p>
                                                <img class="iem-center img-fluid" :src="data.image.url" style="margin-top: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- --------------------------------- mobile size ------------------------------------ -->
                        <div class="d-block d-xl-none d-xxl-none">
                            <div class="col-12 mt-2">
                                <div class="row text-center">
                                    <div v-for="(data, index) in responseData" :key="index" class="col-12 mt-3">
                                        <img v-if="index != 0" src="./../assets/icon/Line53.png">
                                        <img class="item-center" src="./../assets/icon/Ellipse14.png">
                                        <img src="./../assets/icon/Line53.png">
                                        <p class="text-s-30 text-w-700" style="color:#50151C">{{data.year}}</p>
                                        <p style="font-size:18" v-html="markdownToHtml(data.message)"></p>
                                        <img class="iem-center img-fluid" :src="data.image.url" style="margin-top: 20px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="padding-aboutus" style="background: linear-gradient(180deg, #FAC59E 0%, #459AE7 100%);">
                    <div class="row bg  p-xxl-0 p-xl-0 p-lg-0 p-md-2 p-sm-4 p-4" style="z-index: 1;position: relative;">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="crad text-center crad-aboutus" style="border-radius: 10px;box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);">
                                <p class="text-w-700 pt-xl-0 pt-lg-4 pt-md-4 pt-sm-5 pt-4" style="font-size:48px;color:#E48724">VISION</p>
                                <p class="text-w-400" style="font-size:16px">Sellsuki ผู้ช่วยที่ ‘ครบเครื่อง’ ที่สุด ช่วยผลักดัน <br>ธุรกิจออนไลน์ในไทยให้เติบโต</p>
                            </div>
                            <div class="crad text-center crad-aboutus mt-4" style="border-radius: 10px;padding: 38px;box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);">
                                <p class="text-w-700" style="font-size:48px;color:#1B4485">MISSION</p>
                                <p class="text-w-400" style="font-size:16px">Sellsuki มองหานวัตกรรมและแนวทางใหม่ๆ พร้อมพัฒนา ศักยภาพทีมงาน นำข้อมูลทาง การตลาดเข้ามาใช้ในการวาง กลยุทธ์รวมทั้ง ขยายเครือข่าย Partner ให้ครอบคลุมทุก บริการที่ส่งเสริมธุรกิจเพื่อพาธุรกิจของคุณ เติบโตไป พร้อมกับเรา อย่างมั่นคงและยั่งยืนในอนาคต</p>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img class="img-fluid mt-3" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Vision_1_2978c2683e.svg" style="max-width: 120%;">
                        </div>
                    </div>
                </div>
                <InterestingArticles :type="type"/>
                <GetQuote/>
            </div>
        </div>
    </div>
</template>

<script>
import GetQuote from '@/components/GetQuote'
import InterestingArticles from '@/components/InterestingArticles'
import marked from 'marked';
import Preloader from '@/components/Preloader'

export default {
    name: 'AboutUs',
      components: {
        GetQuote,
        InterestingArticles,
        Preloader
    },
    data(){
        return{
            height_colum: 305,
            height_border: 300,
            lang: localStorage.getItem('lang') || 'TH-th',
            type:'All',
            responseData:[]
      }
    },
    methods:{
        markdownToHtml(data){
            if(data != undefined){
                return marked(data);
            }else{
                return '';
            }
        }
    },
    //this.$route.params.id
    mounted () {
        this.axios.get('about-uses?_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
        this.axios.get('about-uses/count?_locale='+ this.lang)
        .then(response => (this.height_colum = this.height_colum * response.data,this.height_border = this.height_border * response.data))
    }
}
</script>

<style scoped>
.bg{
  background-image: url('https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/GET_A_QUOTE_2_2d7a8b05a4.webp');
  background-position: center;
  background-repeat: no-repeat;
}

.top{
    margin-top:100px !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .crad-aboutus{
    padding: 40px;
    width: 100%;
    height: 300px;
  }
  .padding-contact{
    padding:30px 20px 30px 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .crad-aboutus{
    padding: 30px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:20px 40px 20px 40px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .crad-aboutus{
    padding: 50px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:20px 40px 20px 40px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .crad-aboutus{
    padding: 40px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:30px 60px 30px 60px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .crad-aboutus{
    padding: 70px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:30px 80px 30px 80px;
  }
}
</style>