<template>
<div id="BusinessOwner">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Business owner</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:55px;color:#50151C;width: 600px;">BUSINESS OWNER</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#50151C;width: 420px;">“เคล็ดไม่ลับ เจ้าของธุรกิจมือใหม่ เริ่มต้นสร้างแบรนด์อย่างไรให้ปัง ?”</h2>
                                    <p class="text-s-16 mt-3" style="color:#50151C;width: 460px">สำหรับเจ้าของธุรกิจมือใหม่ที่กำลังอยากจะเริ่มปั้นแบรนด์ สร้างธุรกิจเป็นของ ตัวเองควรอ่านบทความนี้ ! น้องสุกิจะมาช่วยแนะนำขั้นตอนในการเริ่มต้นธุรกิจ ให้ติดตลาด มียอดขายปัง ควรเริ่มจากตรงไหนถึงจะเป็นก้าวแรกที่มั่นคง</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#50151C;margin-top:95px !important"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Business owner</font></p>
                            <h1 class="font-wght text-s-36" style="color:#50151C">BUSINESS OWNER</h1>
                            <h2 class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#50151C">“เคล็ดไม่ลับ เจ้าของธุรกิจมือใหม่ เริ่มต้นสร้างแบรนด์อย่างไรให้ปัง ?”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#50151C">สำหรับเจ้าของธุรกิจมือใหม่ที่กำลังอยากจะเริ่มปั้นแบรนด์ สร้างธุรกิจเป็นของ ตัวเองควรอ่านบทความนี้ ! น้องสุกิจะมาช่วยแนะนำขั้นตอนในการเริ่มต้นธุรกิจ ให้ติดตลาด มียอดขายปัง ควรเริ่มจากตรงไหนถึงจะเป็นก้าวแรกที่มั่นคง</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Business_Owner_8d95a489f3.webp">
                        <img class="d-block d-md-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Business_Owner_8d95a489f3.webp">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-4 p-xl-4 p-lg-5 p-md-4 p-sm-5 p-5" style="margin-bottom: 40px;">
                    <div v-for="(data, index) in responseData" :key="index">
                        <div :id="'contant' + (index + 1)" style="display:none">
                            <div v-if="data.position_left" class="row p-custom-2 mt-5">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div class="text-lg-start text-center d-block d-lg-none animate__animated animate__bounceInRight animate__slow">
                                        <span class="text-s-30 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px;">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-30 text-w-700">{{data.header}}</p>
                                    </div>
                                    <img class="item-center mt-4 animate__animated animate__zoomInLeft animate__slow" :src="data.image.url" :alt="data.image.name">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 mt-5">
                                    <div class="text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow">
                                        <span class="text-s-30 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-5 text-s-30 text-w-700">{{data.header}}</p>
                                    </div>    
                                    <div class="animate__animated animate__bounceInLeft animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="row p-custom-2 mt-5">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 mt-5">
                                    <div class="text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow">
                                        <span class="text-s-30 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-30 text-w-700 mt-5">{{data.header}}</p>
                                    </div>
                                    <div class="animate__animated animate__bounceInRight animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div class="text-lg-start text-center d-block d-lg-none animate__animated animate__bounceInLeft animate__slow">
                                        <span class="text-s-30 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-30 text-w-700">{{data.header}}</p>
                                    </div>
                                    <img class="item-center mt-4 animate__animated animate__zoomInRight animate__slow" :src="data.image.url" :alt="data.image.name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InterestingArticles :type="type"/>
                <div class="padding-card pt-0 mb-5 text-center">
                    <h1 class="mt-5 text-s-30 text-w-700">เรื่องเล่าจากลูกค้าเรา</h1>
                    <div class="text-start">
                        <Review :type="type"/>
                    </div>
                </div>
                <GetQuote :type="type"/>         
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InterestingArticles from '@/components/InterestingArticles'
import Review from '@/components/Review'
import GetQuote from '@/components/GetQuote'
import Preloader from '@/components/Preloader'
import marked from 'marked';

export default {
    name: 'BusinessOwner',
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    data () {
        return {
            type: 'All',
            isHidden: false,
            lang: localStorage.getItem('lang') || 'en',
            responseData:[],
            animation1:false,
        }
    },
    mounted () {
        this.axios.get('business-owners?_locale='+ this.lang)
        .then(response => (this.responseData = response.data))

        window.addEventListener('scroll', this.onShow);
    },
    methods: {
        onShow (event) {
            this.windowTop = event.target.documentElement.scrollTop;
            if(this.windowTop > 200){
                document.querySelector('#contant1').style.display = "block";
            }
            if(this.windowTop > 600){
                document.querySelector('#contant2').style.display = "block";
            }
            if(this.windowTop > 1000){
                document.querySelector('#contant3').style.display = "block";
            }
            if(this.windowTop > 1500){
                this.animation1 = true
            }
        },
        markdownToHtml(data){
            if(data != undefined){
                return marked(data);
            }else{
                return '';
            }
        }
    }
}
</script>

<style scoped>
a{
    color: #171515 !important;
}

.accordion-button{
    background-color: #FBFBFB !important;
    padding: 5px;
}

.accordion-button:not(.collapsed)::after{
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed){
    box-shadow:none;
}

.bg-icon{
    width: 146px;
    height: 146px;
    background-color: #0DB991;
    border-radius: 50%;
    left: 8px;
    position: relative;
}

.bg-icon-main{
    margin-left: -10px !important;
    margin-top: -10px !important;
    background-color: #171515;
    width: 146px;
    height: 146px;
    border-radius: 50%;
}

.theme-background-main{
    background-color: #F7BD49;
}

.theme-background-sub{
    background-color: #5D391A;
}

.theme-text-main{
    color: #F7BD49;
}

.theme-text-sub{
    color: #5D391A;
}

.theme-border{
    border-bottom: 1px solid #5D391A !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .p-custom{
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
    .p-custom-2{
        padding-left: 30px !important;
        padding-right: 30px !important;
    }
    .mt-custom{
        margin-top: 3rem!important;
    }
    .img-banner-top{
        margin-top: 145px;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
}
</style>