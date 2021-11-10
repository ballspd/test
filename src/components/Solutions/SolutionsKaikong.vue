<template>
<div id="SolutionsKaikong">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #F7BC49 0%, #F4CC49 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#0B0404;">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#0B0404">Kaikong</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:62px;color:#0B0404">KAIKONG</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#0B0404">“ช่วยสร้าง CONTENT MARKETING ให้ธุรกิจเป็นที่จดจำ”</h2>
                                    <p class="text-s-16 mt-3" style="color:#0B0404">Creative Agency ผู้เชี่ยวชาญในด้านการทำ Content marketing ที่พร้อมจะช่วยสร้างธุรกิจของคุณให้เป็นที่น่าจดจำ เพื่อเพิ่มยอดขาย และเติบโตอย่างก้าวกระโดด</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#0B0404;margin-top:95px !important">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#0B0404">Kaikong</font></p>
                            <h1 class="font-wght text-s-36" style="color:#0B0404">KAIKONG</h1>
                            <h2 class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-5 pe-5 mt-4" style="color:#0B0404">“ช่วยสร้าง CONTENT MARKETING ให้ธุรกิจเป็นที่จดจำ”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#0B0404">Creative Agency ผู้เชี่ยวชาญในด้านการทำ Content marketing ที่พร้อมจะช่วยสร้างธุรกิจของคุณให้เป็นที่น่าจดจำ เพื่อเพิ่มยอดขาย และเติบโตอย่างก้าวกระโดด</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="./../../assets/Banner/banner-Kaikong.png">
                        <img class="d-block d-md-none img-fluid" src="./../../assets/Banner/banner-Kaikong.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom mb-4 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4 ">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-sub hvr-buzz">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-1.png"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;">Content Marketing</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-main hvr-buzz">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-2.png"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;">Graphic & Production</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-sub hvr-buzz">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-3.png"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-5 pe-5" style="color:#0A0909;line-height: 1.5;">Admin Page</h2>
                        </div>     
                    </div>
                    <div class="col-12 text-center mt-5"><h1 class="text-s-30 font-wght theme-text-sub">KAIKONG CREATIVE SERVICE</h1></div>
                    <div id="contant1" ref="contant1" class="p-custom-2 mt-5">
                        <div v-if="contant1" class="row d-flex">
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                <img class="item-center hvr-rotate" src="./../../assets/SolutionsKaikong/Kaikong01.png" alt="">
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                <div class="animate__animated animate__flipInX animate__delay-2s">
                                    <div class="show collapse multi-collapse1" id="showCollapseMin1">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <div class="collapse  multi-collapse1" id="showCollapseMix1">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" data-bs-target=".multi-collapse1" aria-expanded="false" aria-controls="showCollapseMin1 showCollapseMix1"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contant2" ref="contant2" class="p-custom-2 mt-5">
                        <div v-if="contant2" class="row d-flex">
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Software</span></h2>
                                <div class="animate__animated animate__flipInX animate__delay-2s">
                                    <div class="show collapse multi-collapse2" id="showCollapseMin2">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <div class="collapse  multi-collapse2" id="showCollapseMix2">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" data-bs-target=".multi-collapse2" aria-expanded="false" aria-controls="showCollapseMin2 showCollapseMix2"></a>
                                </div>
                            </div>
                            <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Software</span></h2>
                                <img class="item-center hvr-rotate" src="./../../assets/SolutionsKaikong/Kaikong02.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div id="contant3" ref="contant3" class="p-custom-2 mt-5">
                        <div v-if="contant3" class="row d-flex">
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                <img class="item-center hvr-rotate" src="./../../assets/SolutionsKaikong/Kaikong03.png" alt="">
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                <div class="animate__animated animate__flipInX animate__delay-2s">
                                    <div class="show collapse multi-collapse3" id="showCollapseMin3">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <div class="collapse  multi-collapse3" id="showCollapseMix3">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                            KAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICEKAIKONG CREATIVE SERVICE
                                        </div>
                                    </div>
                                    <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" data-bs-target=".multi-collapse3" aria-expanded="false" aria-controls="showCollapseMin3 showCollapseMix3"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InterestingArticles/>
                <div class="padding-card pt-0 text-center">
                    <h1 class="mt-5 text-s-30 text-w-700">เรื่องเล่าจากลูกค้าเรา</h1>
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
    name: 'SolutionsKaikong',
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    data () {
            return {
                type: 'Kaikong',
                isHidden: false,
                lang: localStorage.getItem('lang') || 'en',
                windowTop:'',
                responseData:'',
                contant1:false,
                contant2:false,
                contant3:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onShow);
    },
    methods: {
        onShow (e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > (this.$refs.contant1.scrollHeight + 400)){
                this.contant1 = true
            }else if(this.windowTop < (this.$refs.contant1.scrollHeight)){
                this.contant1 = false
            }
            if(this.windowTop > (this.$refs.contant2.scrollHeight + 800)){
                this.contant2 = true
            }else if(this.windowTop < (this.$refs.contant2.scrollHeight)){
                this.contant2 = false
            }
            if(this.windowTop > (this.$refs.contant3.scrollHeight + 1200)){
                this.contant3 = true
            }else if(this.windowTop < (this.$refs.contant3.scrollHeight)){
                this.contant3 = false
            }
        }
    }
}
</script>

<style scoped>
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

.img-banner-top{
    margin-top: 80px !important;
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
}
</style>