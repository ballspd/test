<template>
<div id="SolutionsOc2plus">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #4A91C9 0%, #54B2A6 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#FFFFFC;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#FFFFFC">Oc2plus</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:62px;color:#FFFFFC">OC2PLUS</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#FFFFFC">“{{ $t("solution.oc2plus.text_banner") }}”</h2>
                                    <p class="text-s-16 mt-3 mb-lg-4 mb-xl-0" style="color:#FFFFFC;width: 470px;" v-html="$t('solution.oc2plus.mata')"></p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#FFFFFC;margin-top:95px !important"><router-link @click="scrollToTop" to="/" style="color:#FFFFFC;">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#FFFFFC">Oc2plus</font></p>
                            <h1 class="font-wght text-s-36" style="color:#FFFFFC">OC2PLUS</h1>
                            <h2 class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#FFFFFC">“{{ $t("solution.oc2plus.text_banner") }}”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-4 pe-4 pb-4" style="color:#FFFFFC" v-html="$t('solution.oc2plus.mata')"></p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top m-auto" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp" alt="oc2plus-customer-data-platform">
                        <img class="d-block d-md-none img-fluid img-banner-top m-auto pb-5" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp" alt="oc2plus-customer-data-platform">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div v-if="animation1" class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4 ps-5 pe-5">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-01-รวบรวมข้อมูลจากทุกช่องทาง.webp" alt="Oc2Plus-01-รวบรวมข้อมูลจากทุกช่องทาง.webp">
                            <h2 class="text-s-18 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h1") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-02-จัดเก็บไว้ในที่เดียว.webp" alt="Oc2Plus-02-จัดเก็บไว้ในที่เดียว.webp">
                            <h2 class="text-s-18 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h2") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-03-ง่ายต่อการนำไปใช้งาน.webp" alt="Oc2Plus-03-ง่ายต่อการนำไปใช้งาน.webp">
                            <h2 class="text-s-18 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h3") }}</h2>
                        </div>      
                    </div>
                </div>
                    <div v-if="animation2" class="row p-custom-2 d-flex ms-5 me-5">
                        <div class="col-12 text-center mt-4 mt-lg-5 mb-5 animate__animated animate__fadeInDown"><h1 class="text-s-30 text-w-700 theme-text-main">{{ $t("solution.oc2plus.header") }}</h1></div>
                        <!-- <div class="col-12 col-lg-6 ps-lg-5 mt-3"><img src="./../../assets/SolutionsOc2plus/Oc2Plus-04-CDP-View.wbp" alt="Oc2Plus-04-CDP-View.webp"></div>
                        <div class="col-12 col-lg-6 ps-lg-5 mt-3"><img src="./../../assets/SolutionsOc2plus/Oc2Plus-05-CRM-View.wbp" alt="Oc2Plus-05-CRM-View.webp"></div> -->
                
                        <div class="col-md-6 col-12 view animate__animated animate__slideInLeft animate__slow">
                            <div class="card item-center">
                                <div class="card-view theme-background-main d-flex">
                                    <h1 class="m-auto text-s-24 text-w-700 text-white">CDP VIEW</h1>
                                </div>
                                <div class="triangle-down-main"></div>
                                <h1 class="mt-2 text-center text-s-24 text-w-700 text-drak">SELLSUKI</h1>
                                <hr class="ms-auto me-auto m-0" style="width: 110px;color:#708090">
                                <div class="text-s-14">
                                    <div class="row p-4">
                                        <div class="col-5 mt-1 text-w-700">Age : </div><div class="col-7 mt-1">7 yrs</div>
                                        <div class="col-5 mt-1 text-w-700">Location : </div><div class="col-7 mt-1">10, 39 Ratchadaphisek Rd, Chan Kasem, Chatuchak, Bangkok</div>
                                        <div class="col-5 mt-1 text-w-700">Opened mail : </div><div class="col-7 mt-1">25 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Visit Website : </div><div class="col-7 mt-1">27 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Browser : </div><div class="col-7 mt-1">Chrome</div>
                                        <div class="col-5 mt-1 text-w-700">Occupation : </div><div class="col-7 mt-1">Business partner</div>
                                        <div class="col-5 mt-1 text-w-700">Postal Code : </div><div class="col-7 mt-1">10900</div>
                                        <div class="col-5 mt-1 text-w-700">Email : </div><div class="col-7 mt-1">Hello@sellsuki.com</div>
                                        <div class="col-5 mt-1 text-w-700">Tell : </div><div class="col-7 mt-1">02 026 3250</div>
                                        <div class="col-5 mt-1 text-w-700">Interest in : </div><div class="col-7 mt-1">Digital Marketing</div>
                                    </div>
                                </div>
                                <hr class="ms-auto me-auto mt-auto mb-4" style="width: 110px;color:#708090">
                            </div>
                        </div>
                        <div class="col-md-6 col-12 mt-md-0 mt-5 view animate__animated animate__slideInRight animate__slow">
                            <div class="card item-center">
                                <div class="card-view theme-background-sub d-flex">
                                    <h1 class="m-auto text-s-24 text-w-700 text-white">CRM VIEW</h1>
                                </div>
                                <div class="triangle-down-sub"></div>
                                <h1 class="mt-2 text-center text-s-24 text-w-700 text-drak">SELLSUKI</h1>
                                <hr class="ms-auto me-auto m-0" style="width: 110px;color:#708090">
                                <div class="text-s-14">
                                    <div class="row p-4">
                                        <div class="col-5 mt-1 text-w-700">Opened mail : </div><div class="col-7 mt-1">25 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Browser : </div><div class="col-7 mt-1">Chrome</div>
                                        <div class="col-5 mt-1 text-w-700">Email : </div><div class="col-7 mt-1">Hello@sellsuki.com</div>
                                        <div class="col-5 mt-1 text-w-700">Tell : </div><div class="col-7 mt-1">02 026 3250</div>
                                    </div>
                                </div>
                                <hr class="ms-auto me-auto mt-auto mb-4" style="width: 110px;color:#708090">
                            </div>
                        </div>
                    </div>
                    <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, #E0EFFE 0%, rgba(227, 240, 254, 0) 100%);">
                    <div class="row">
                        <div class="col-12 mt-4 mb-2 text-center"><h1 class="text-s-30 text-w-700" style="color:#182E9C">{{ $t("solution.oc2plus.why") }}</h1></div>    
                    </div>
                    <div class="row mt-2 justify-content-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-16 text-w-700 mb-0">{{ $t("solution.oc2plus.why1") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-16 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why2") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-16 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why3") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-16 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why4") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <InterestingArticles :type="type"/>
                <div class="padding-card pt-0 text-center">
                    <Review/>
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
import GetQuote from '@/components/Solutions/SolutionsGetQuote'
import Preloader from '@/components/Preloader'

export default {
    name: 'SolutionsOc2plus',
    layout:"Layout",
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    head() {
      return {
          title: "Oc2Plus"
      };
    },
    data () {
            return {
                type: 'Oc2Plus',
                isHidden: false,
                lang: this.$i18n.locale || 'th-TH',
                animation1:false,
                animation2:false
        }
    },
    mounted () {

        window.addEventListener('scroll', this.onShow);
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
        onShow (e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > 200){
                this.animation1 = true
            }
            if(this.windowTop > 500){
                this.animation2 = true
            }
        }
    }
}
</script>

<style scoped>

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

.view .card{
    border-radius: 20px;
    filter: drop-shadow(10px 10px 30px rgba(55, 55, 55, 0.2));
    width: 374.08px;
    height: 475px;
}

.view-2 .card{
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgb(229 233 246 / 70%);
    height: 105px;
}

.card-view{
    border-radius: 20px 20px 0 0;
    background-color: black;
    height: 50px;
}

.triangle-down-main {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #4570B1;
    margin-left: auto;
    margin-right: auto;
}

.triangle-down-sub {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #54B2A6;
    margin-left: auto;
    margin-right: auto;
}

.theme-background-main{
    background-color: #4570B1;
}

.theme-background-sub{
    background-color: #54B2A6;
}

.theme-text-main{
    color: #4570B1;
}

.theme-text-sub{
    color: #54B2A6;
}

.theme-border{
    border-bottom: 1px solid #54B2A6 !important;
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
    .img-banner-top{
        width: 80%;
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
    .img-banner-top{
        width: 80%;
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
    .img-banner-top{
        margin-top:270px !important;
        width: 100%;
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
    .img-banner-top{
        margin-top: 145px !important;
        width: 100%;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .p-custom{
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
    .p-custom-2{
        padding-left: 65px !important;
        padding-right: 65px !important;
    }
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
    .img-banner-top{
        margin-top: 240px !important;
        width: 80%;
    }
}
</style>
