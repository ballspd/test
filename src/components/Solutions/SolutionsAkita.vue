<template>
<div id="SolutionsAkita">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #153556 0%, #055297 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#FFFFFC;">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#FFFFFC">Akita</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:62px;color:#FFFFFC">AKITA<br>FULFILLMENT</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#FFFFFC">“บริการคลังสินค้าครบวงจร”</h2>
                                    <p class="text-s-16 mt-3" style="color:#FFFFFC">พร้อมอยู่คู่เคียงข้างทุกธุรกิจ เพื่อส่งมอบประสบการณ์ การจัดส่งสินค้าที่ดีที่สุดสู่มือลูกค้า</p>
                                    <a href="#" class="btn btn-orange button mt-4"><span class="text-white" style="font-size:18px">Click Now</span></a>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#FFFFFC;margin-top:95px !important">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#FFFFFC">Akita</font></p>
                            <h1 class="font-wght text-s-36" style="color:#FFFFFC">AKITA<br>FULFILLMENT</h1>
                            <h2 class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-5 pe-5 mt-4" style="color:#FFFFFC">“บริการคลังสินค้าครบวงจร”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#FFFFFC">พร้อมอยู่คู่เคียงข้างทุกธุรกิจ เพื่อส่งมอบประสบการณ์ การจัดส่งสินค้าที่ดีที่สุดสู่มือลูกค้า</p>
                            <a href="#" class="btn btn-orange button mt-2"><span class="text-white" style="font-size:18px">Click Now</span></a>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="./../../assets/image60.png">
                        <img class="d-block d-md-none img-fluid" src="./../../assets/mobile/image60.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mt-5 ps-5 pe-5 text-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #F76D22;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/icon-solution-akita-1.png"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#373737">เก็บ</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #143555;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/icon-solution-akita-2.png"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#373737">เเพ๊ค</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #F76D22;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/icon-solution-akita-3.png"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#373737">ส่ง</h2>
                        </div>     
                    </div>
                    <div class="col-12 text-center mt-5"><h1 class="text-s-30 font-wght theme-text-sub">AKITA FULFILLMENT บริการคลังสินค้าครบวงจร</h1></div>
                    <div v-for="(data, index) in responseData" :key="index">
                        <div :id="'contant' + (index + 1)" style="display:none">
                            <div v-if="data.position == 'Left'" class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <img class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__zoomIn animate__delay-2s">
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
                            <div v-else class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__zoomIn animate__delay-2s">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <img class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="animation1" class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, rgba(247, 109, 34, 0.9) 0%, rgba(249, 158, 30, 0) 86.22%);">
                        <div class="row">
                            <div class="col-12 mt-4 mb-2 text-center animate__animated animate__fadeInDown theme-text-sub"><h1 class="text-s-30 text-w-700">มาตรฐานการให้บริการ (BRAND VALUE)</h1></div>    
                        </div>
                        <div class="row mt-5 text-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-2">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-4.png"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.png">
                                <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">>รับฟัง</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-5.png"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.png">
                                <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">ว่องไว</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-6.png"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.png">
                                <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">ใส่ใจ</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-7.png"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.png">
                                <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">เชื่อได้</h2>
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
import marked from 'marked';

export default {
    name: 'SolutionsAkita',
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    data () {
            return {
                type: 'Akita',
                isHidden: false,
                lang: localStorage.getItem('lang') || 'en',
                animation1:false,
                responseData:[]
        }
    },
    mounted () {
            this.axios.get('solution-akita-services?_locale='+ this.lang)
            .then(response => (this.responseData = response.data))

            window.addEventListener('scroll', this.onShow);
    },
    methods: {
        onShow (event) {
            this.windowTop = event.target.documentElement.scrollTop;
            if(this.windowTop > 300){
                document.querySelector('#contant1').style.display = "block";
            }
            if(this.windowTop > 600){
                document.querySelector('#contant2').style.display = "block";
            }
            if(this.windowTop > 1200){
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
    background-color: #2E69A1;
    border-radius: 50%;
    left: 8px;
    position: relative;
}

.bg-icon-main{
    margin-left: -10px !important;
    margin-top: -10px !important;
    background-color: #143555;
    width: 146px;
    height: 146px;
    border-radius: 50%;
}

.theme-text-main{
    color: #F76D22;
}

.theme-text-sub{
    color: #143555;
}

.theme-border{
    border-bottom: 1px solid #143555 !important;
}

.bg-icon-single{
    width: 146px;
    height: 146px;
    border-radius: 50%;
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