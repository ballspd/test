<template>
<div id="OnlineMerchant">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Online Merchant</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:55px;color:#50151C;width: 600px;">ONLINE MERCHANT</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#50151C;width: 450px;">“{{ $t("type_of_business.online_merchant.text_banner") }}”</h2>
                                    <p class="text-s-16 mt-3" style="color:#50151C;width: 460px">{{ $t("type_of_business.online_merchant.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#50151C;margin-top:95px !important"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Online Merchant</font></p>
                            <h1 class="font-wght text-s-36" style="color:#50151C">ONLINE MERCHANT</h1>
                            <h2 class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#50151C">“{{ $t("type_of_business.online_merchant.text_banner") }}”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#50151C">{{ $t("type_of_business.online_merchant.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-lg-block img-fluid img-banner-top" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Online_Merchant_acc9999dc3.webp">
                        <img class="d-block d-lg-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Online_Merchant_acc9999dc3.webp">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="padding-bottom:0px !important">
                    <div class="row">
                        <div class="col-12 text-center ps-5 pe-5"><h1 class="text-s-30 text-w-700 ps-4 pe-4" style="color:#09193A">{{ $t("type_of_business.online_merchant.header1") }}</h1></div>    
                    </div>
                    <img class="d-none d-lg-block" src="./../../assets/element.png" style="position: absolute;margin-left: 125px;">
                    <img class="d-block d-lg-none" src="./../../assets/element.png" style="position: absolute;margin-left: 15px;">
                    <div class="row justify-content-center mt-3">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/1_Group_739_fd9a5280f2.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative" v-html="$t('type_of_business.online_merchant.h1_1')"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/2_Digital_overload_0d356c11dc.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h1_2") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 ps-3 pe-3">
                        <div class="col-12">
                            <p>{{ $t("type_of_business.online_merchant.d1_1") }}</p>
                            <p class="mt-4">{{ $t("type_of_business.online_merchant.d1_2") }}</p>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 text-center ps-5 pe-5"><h1 class="text-s-30 text-w-700 ps-4 pe-4" style="color:#09193A">{{ $t("type_of_business.online_merchant.header2") }}</h1></div>    
                    </div>
                    <img class="d-none d-xl-block" src="./../../assets/element.png" style="position: absolute;margin-left: 925px;">
                    <img class="d-block d-xl-none" src="./../../assets/element.png" style="position: absolute;margin-left: 325px;">
                    <div class="row justify-content-center mt-3">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/3_Stress_b8618f02a9.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h2_1") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/4_Frustration_6af1afeff8.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h2_2") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/5_Emotional_burnout_0208859706.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h2_3") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 ps-3 pe-3">
                        <div class="col-12">
                            <p v-html="$t('type_of_business.online_merchant.d2_1')"></p>
                            <p class="mt-4" v-html="$t('type_of_business.online_merchant.d2_2')"></p>
                        </div>
                    </div>
                </div>
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, #E0EFFE 0%, rgba(227, 240, 254, 0) 100%);padding-top:0px !important">
                    <div class="row mt-4">
                        <div class="col-12 text-center ps-5 pe-5"><h1 class="text-s-30 text-w-700 ps-4 pe-4" style="color:#09193A">{{ $t("type_of_business.online_merchant.header3") }}</h1></div>    
                    </div>
                    <img class="d-none d-xl-block" src="./../../assets/element.png" style="position: absolute;margin-left: 925px;">
                    <img class="d-block d-xl-none" src="./../../assets/element.png" style="position: absolute;margin-left: 325px;">
                    <div class="row justify-content-center mt-3">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="110" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/6_Group_741_3429c1e50f.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h3_1") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="100" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/7_Group_742_39a20dc10c.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h3_2") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                            <div class="hvr-grow-shadow crad-square mt-3">
                                <div class="p-4 mt-3">
                                    <img class="item-center mt-3" width="100" height="100" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/8_Group_743_e0afa9631d.webp">
                                    <p class="mt-4 pt-2 text-s-14 text-center text-dark" style="position: relative">{{ $t("type_of_business.online_merchant.h3_3") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 ps-3 pe-3">
                        <div class="col-12">
                            <p v-html="$t('type_of_business.online_merchant.d3_1')"></p>
                            <p class="mt-4" v-html="$t('type_of_business.online_merchant.d3_2')"></p>
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
import GetQuote from '@/components/GetQuote'
import Preloader from '@/components/Preloader'

export default {
    name: 'OnlineMerchant',
    layout:"Layout",
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
            lang: localStorage.getItem('lang') || 'th-TH',
        }
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
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

.crad-square{
    background-color:#FFFFFF;
    margin-bottom: 25px;
    width: 225px;
    height: 240px;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    border-radius: 20px;

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
        margin-top: 145px !important;;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
}
</style>