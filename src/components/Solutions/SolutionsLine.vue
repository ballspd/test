<template>
<div id="SolutionsLine">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #36A89B 0%, #9FD63E 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#FFFFFC;">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#FFFFFC">LINE Agency</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <font class="font-wght" style="font-size:62px;color:#FFFFFC">LINE AGENCY <br>BY SELLSUKI</font>
                                    <p class="text-s-16 mt-3" style="color:#FFFFFC">ผู้เชี่ยวชาญอันดับ 1 เรื่อง LINE OA ที่ได้รับความไว้วางใจ จากเจ้าของธุรกิจกว่า 6,000 แอคเคาท์ ให้เราช่วยดู</p>
                                    <a href="#" class="btn btn-orange button mt-4"><span class="text-white" style="font-size:18px">Click Now</span></a>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#FFFFFC;margin-top:95px !important">Home > Solutions > <font class="text-s-16 text-w-700" style="color:#FFFFFC">LINE Agency</font></p>
                            <h1 class="font-wght text-s-36" style="color:#FFFFFC">LINE AGENCY <br>BY SELLSUKI</h1>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#FFFFFC">ผู้เชี่ยวชาญอันดับ 1 เรื่อง LINE OA ที่ได้รับความไว้วางใจ จากเจ้าของธุรกิจกว่า 6,000 แอคเคาท์ ให้เราช่วยดู</p>
                            <a href="#" class="btn btn-orange button mt-4"><span class="text-white" style="font-size:18px">Click Now</span></a>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="./../../assets/Banner/banner-Line.png">
                        <img class="d-block d-md-none img-fluid" src="./../../assets/Banner/banner-Line.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row">
                        <div class="col-12 mt-4 text-center"><h1 class="text-s-30 text-w-700" style="color:#444444">ทำไมลูกค้าถึงไว้ใจให้เราดูแล</h1></div>    
                    </div>
                    <div class="row mt-5 text-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-2">
                                <div class="bg-icon-main d-flex"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-1.png"></div>
                            </div>
                            <img class="item-center mt-4" src="./../../assets/icon/Group163.png">
                            <h2 class="text-s-20 mt-3" style="color:#373737">Course Training LINE<br>ขั้นเทพ</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                <div class="bg-icon-main d-flex"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-2.png"></div>
                            </div>
                            <img class="item-center mt-4" src="./../../assets/icon/Group163.png">
                            <h2 class="text-s-20 mt-3" style="color:#373737">ทีมงานผู้เชี่ยวชาญ คอยให้<br>คำปรึกษา</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                <div class="bg-icon-main d-flex"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-3.png"></div>
                            </div>
                            <img class="item-center mt-4" src="./../../assets/icon/Group163.png">
                            <h2 class="text-s-20 mt-3" style="color:#373737">เครื่องมือเสริม ที่ช่วยให้ธุรกิจ<br>โตได้ไวกว่า</h2>
                        </div>     
                    </div>
                    <div class="row">
                        <div class="col-12 text-center mt-5"><h1 class="text-s-30 text-w-700" style="color:#444444">LINE SERVICE</h1></div>
                        <div v-for="data in responseData" :key="data.id">
                            <div v-if="data.position == 'Left'" class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                    <img class="item-center" :src="data.image.url" :alt="data.image.name">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__slideInUp">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                                {{data.detail}}
                                            </div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                                {{data.detail}}
                                            </div>
                                        </div>
                                        <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__slideInUp">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                                {{data.detail}}
                                            </div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                                {{data.detail}}
                                            </div>
                                        </div>
                                        <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                    <img class="item-center" :src="data.image.url" :alt="data.image.name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center pt-5 pb-3"><h1 class="text-s-30 text-w-700" style="color:#444444">บริการเสริม (Add-on Services)</h1></div>   
                    <div v-for="data in responseDataAddOn" :key="data.id">
                        <div v-if="data.position == 'Left'" class="row mt-4 p-custom-2 d-flex">
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                <img class="item-center" :src="data.image.url" :alt="data.image.name">
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                <div class="animate__animated animate__slideInUp">
                                    <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                            {{data.detail}}
                                        </div>
                                    </div>
                                    <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                            {{data.detail}}
                                        </div>
                                    </div>
                                    <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row mt-4 p-custom-2 d-flex">
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                <div class="animate__animated animate__slideInUp">
                                    <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737">
                                            {{data.detail}}
                                        </div>
                                    </div>
                                    <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                        <div class="text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737">
                                            {{data.detail}}
                                        </div>
                                    </div>
                                    <a class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                </div>
                            </div>
                            <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="color:#182E9C;padding: 10px 5px;"><span style="border-bottom: 1px solid #7074EC;padding: 10px 5px">{{data.header}}</span></h2>
                                <img class="item-center" :src="data.image.url" :alt="data.image.name">
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
    name: 'SolutionsLine',
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    data () {
            return {
                type: 'Line',
                isHidden: false,
                lang: localStorage.getItem('lang') || 'en',
                responseData:[],
                responseDataAddOn:[]
        }
    },
    mounted () {
        this.axios.get('solution-line-services?_locale='+ this.lang + '&type=LINE_Service')
        .then(response => (this.responseData = response.data))

        this.axios.get('solution-line-services?_locale='+ this.lang + '&type=Add_on_Services')
        .then(response => (this.responseDataAddOn = response.data))
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

.bg{
  background: url('./../../assets/image94.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
}

.bg-icon{
    width: 146px;
    height: 146px;
    background-color: #E5E5E5;
    border-radius: 50%;
    left: 8px;
    position: relative;
}

.bg-icon-main{
    margin-left: -10px !important;
    margin-top: -10px !important;
    background-color: #53B535;
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
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mt-custom{
        margin-top: 3rem!important;
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
}
</style>