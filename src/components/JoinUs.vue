<template>
<div id="JoinUs">
  <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Join Us</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <font class="font-wght" style="font-size:64px;color:#50151C">Join Us</font>
                                <p class="text-s-16" style="color:#50151C">มาเป็นครอบครัวเดียวกัน กับ Sellsuki :)</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 mt-4 text-start" style="color:#50151C"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Join Us</font></p>
                        <font class="font-wght mt-3" style="font-size:36px;color:#50151C">Join Us</font>
                        <p class="text-s-16" style="color:#50151C">มาเป็นครอบครัวเดียวกัน กับ Sellsuki :)</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Join_Us_01_1_c83321b0bf.webp" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Join_Us_01_1_c83321b0bf.webp">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="row p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4" style="padding-bottom:20px !important">
                  <div class="col-12 ps-4 pe-4">
                    <p class="text-s-30 font-wght text-center pe-4 ps-4" style="color:#15304E">มาเป็นครอบครัวเดียวกับ Sellsuki</p>
                    <!-- <p class="text-center mt-4">ตำแหน่งว่าง รอเธอมา Join ^^</p> -->
                    <p class="mt-4" style="text-indent: 65px">Sellsuki เป็นบริษัทที่มีความโดดเด่น และเชี่ยวชาญด้านด้านเทคโนโลยี 
                      โดยมีจุดเริ่มต้นในการเป็นแพลตฟอร์มผู้ช่วยเจ้าของธุรกิจออนไลน์ ระบบการจัดการหลังบ้าน 
                      โดยเราได้มีการพัฒนาบริการของเราให้กว้างยิ่งขึ้นไปเพื่อให้ครบวงจรและตอบสนองความต้องการเจ้าของธุรกิจได้อย่างครอบคลุมมากที่สุด 
                      ไม่ว่าจะเป็นด้านการให้คำปรึกษาทางการตลาด การทำโฆษณา การทำ Content Marketing การสร้างระบบร้านค้า หรือหน้าเว็บต่าง ๆ 
                      รวมทั้ง การเข้าร่วมเป็น Partner LINE เจ้าใหญ่ที่สุดในประเทศไทยที่ได้ ด้วยบริการที่ครอบคลุมครบวงจรสำหรับคนอยากเป็นทำธุรกิจจึงทำให้มีเจ้าของธุรกิจมากมายที่ไว้ใจและเลือกใช้บริการเรา 
                      เราจึงคอยมองหาคนที่มีศัพยภาพและเป้าหมายเดียวกันในการช่วยผลักดัน SME ไทยให้เติบโตไปด้วยกัน</p>
                  </div>
                  <div class="col-12">
                    <div id="carouselimage" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="row p-3" style="background-color:#F2F3F5">
                            <div class="col-12 p-0">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                      <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/IMG_0005_e48fa140f2.webp" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/IMG_0013_9d4498a6de.webp" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/IMG_20_3b63f6690c.webp" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/IMG_0032_4fa9ccab98.webp" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/IMG_25_5fb07da684.webp" class="d-block w-100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-indicators mt-3" style="position: relative;">
                            <button type="button" data-bs-target="#carouselimage" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselimage" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselimage" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselimage" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselimage" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row p-lg-5 p-md-4 p-sm-4 p-4" style="padding-top:0px !important">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item" v-for="data in responseData" :key="data.id">
                      <h2 class="accordion-header" :id="'panelsStayOpen-heading'+data.id">
                        <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+data.id" aria-expanded="false" :aria-controls="'panelsStayOpen-collapse'+data.id">
                          <font class="font-wght" style="font-size:24px">{{data.position}}</font>
                        </a>
                      </h2>
                      <div :id="'panelsStayOpen-collapse'+data.id" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-heading'+data.id">
                        <div class="accordion-body">
                          <div class="pt-4">
                            <div v-html="markdownToHtml(data.responsibility)"></div>
                          </div>
                          <div class="pt-4">
                            <div v-html="markdownToHtml(data.qualifications)"></div>
                          </div>
                          <div class="text-center mt-5 pb-4" style="width: 100%">
                              <router-link @click="scrollToTop" href="#" class="btn btn-orange button" :to="{ path: '/JoinUsForm' , query: { position: data.position } }"><span class="text-white" style="font-size:18px">Apply Now</span></router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg">
                  <div class="p-5" style="background: rgba(0, 0, 0, 0.3);display: flex;height: 350px;">
                    <font class="font-wght mt-auto mb-auto ms-4 font-header" style="color:#FBFBFB">SELLSUKI LIFE</font>
                  </div>
                </div>
                <div class="row p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4" style="margin-top: -150px;">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                       <div class="card item-center">
                        <div class="card-body p-4">
                          <img class="pb-3" width="90" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Join_us_Profile_3_8b963d1591.webp" alt="">
                          <p class="card-title font-wght text-s-20">Thatim Prakaymaneewong</p>
                          <p class="text-s-16 font-wght">LINE Product Owner</p>
                          <p class="card-text text-s-16">ที่นี่ให้อิสระในการทำงาน ให้โอกาส ให้ลองผิดลองถูก ทำให้เราได้เติบโตขึ้นในทุกวัน 
                              และที่นี่ยังมีโครงสร้างองค์กรที่ค่อนข้างยืดหยุ่น ถ้ามีเรื่องไหนที่เราคิดไม่ออกหรือติดปัญหานอกจากปรึกษาทีม เราสามารถเดินเข้าไปคุยกับผู้บริหารได้เลย
                              นอกจากนั้นเพื่อนร่วมงานที่นี่น่ารัก เพิ่มความสุขใจในการทำงานได้อย่างมากจริงๆ
                          </p>
                          <p class="card-text text-s-16">นอกจากนั้นเพื่อนร่วมงานที่นี่น่ารัก<br>เพิ่มความสุขใจในการทำงานได้อย่างมากจริงๆ</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                       <div class="card item-center">
                        <div class="card-body p-4">
                          <img class="pb-3" width="90" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Join_us_Profile_2_12169ea52c.webp" alt="">
                          <p class="card-title font-wght text-s-20">Panadda Kongsuk</p>
                          <p class="text-s-16 font-wght">Business Development Executive</p>
                          <p class="card-text text-s-16">ที่นี่ให้อิสระทางความคิด และเป็นการทำงานที่เน้นผลงาน
                            สิ่งที่ได้จากการทำงานที่นี่คือคำว่าพี่น้อง สังคมของการช่วยเหลือพร้อมที่จะเติบโตไปพร้อมกัน 
                            เรารักษาและดูแลทุกคนอย่างเท่าเทียมกัน เคารพความเห็นซึ่งกันและกัน ทำให้เรามีความสุขจากการทำงาน และมององค์กรของเราเติบโตไปด้วยกัน
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                       <div class="card item-center">
                        <div class="card-body p-4">
                          <img class="pb-3" width="90" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Join_us_Profile_1_ed39c8f93a.webp" alt="">
                          <p class="card-title font-wght text-s-20">Wasin Jamroensap</p>
                          <p class="text-s-16 font-wght">Backend Developer</p>
                          <p class="card-text text-s-16">ถ้าจะเปรียบว่าโรงเรียนเป็นบ้านหลังที่สอง 
                              ที่นี่ก็คงเป็นบ้านอีกหลังนึงสำหรับเราแหละ
                              อยู่มาตั้งแต่เป็นเด็กฝึกงานยันเป็นพนักงาน
                              ได้พบเจอเพื่อนร่วมงานหลากหลายแบบ
                              ได้เรียนรู้ และเติบโตในหลายๆ เรื่อง
                              ได้เห็นความเปลี่ยนแปลงต่างๆ
                              มีช่วงที่ สนุกบ้าง กดดันบ้าง เศร้าบ้าง
                              แต่ก็ดีใจนะที่ได้มาฝึกงานและได้ทำงานที่นี่ :)
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
                <!-- <div class="row pb-5 ps-5 pe-5">
                  <p class="text-s-18 text-end font-wght" style="color:#373737">See more <i class="bi bi-chevron-double-right"></i></p>
                </div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Preloader from '@/components/Preloader'
import marked from 'marked';

export default {
    name: 'JoinUs',
    components: {
        Preloader
    },
    data() {
      return {
        lang: localStorage.getItem('lang') || 'TH-th',
        responseData:[]
      }
    },
    methods: {
      scrollToTop() {
          window.scrollTo(0,0);
      },
      markdownToHtml(data){
          if(data != undefined){
              return marked(data);
          }else{
              return '';
          }
      }
    },
    mounted () {
        this.axios.get('job-positions?_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
    },
}
</script>

<style scoped>

.bg{
  background: url('./../assets/image94.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
}

.card {
  background: #FBFBFB;
  border: 1px solid #E5E5E5 !important;
  box-sizing: border-box;
  border-radius: 10px;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 599px) {
  .card{
    height: 450px
  }
  .font-header{
    font-size: 42px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}
  .card{
    height: 430px
  }
  .font-header{
    font-size: 58px;
  }
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .card{
    height: 400px
  }
  .font-header{
    font-size: 60px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .card{
    height: 610px
  }
  .font-header{
    font-size: 64px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card{
    height: 520px
  }
  .font-header{
    font-size: 64px;
  }
}

.carousel-indicators {
    opacity: .8;
}

a {
  color: #15304E !important;
}

i {
  color: #15304E !important;
}

.accordion-item{
  border-bottom: 1px solid #E5E5E5;
  border-right: 0;
  border-left: 0;
  background-color:#FBFBFB;
}

.accordion-button{
  background-color:#FBFBFB;
}

.accordion-button:not(.collapsed){
  color: none;
  background-color: #F2F3F5;
  box-shadow: none;
}

.accordion-button:not(.collapsed)::after{
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>