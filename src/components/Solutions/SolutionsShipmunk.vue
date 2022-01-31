<template>
<div id="SolutionsShipmunk">
    <Preloader/>
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #B7161E 0%, #DE0404 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="d-none d-lg-block">
                            <p class="text-s-16 mt-150" style="color:#FFFFFC;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#FFFFFC">Shipmunk</font></p>
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:62px;color:#FFFFFC">SHIPMUNK</h1>
                                    <h2 class="text-s-22 pt-2 pb-2 text-w-700" style="color:#FFFFFC">“{{ $t("solution.shipmunk.text_banner") }}”</h2>
                                    <p class="text-s-16 mt-3" style="color:#FFFFFC">{{ $t("solution.shipmunk.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <p class="text-s-14 pb-3 text-start" style="color:#FFFFFC;margin-top:95px !important"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> Solutions <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#FFFFFC">Shipmunk</font></p>
                            <h1 class="font-wght text-s-36" style="color:#FFFFFC">SHIPMUNK</h1>
                            <h2 class="text-s-22 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#FFFFFC">“{{ $t("solution.shipmunk.text_banner") }}”</h2>
                            <p class="text-s-16 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#FFFFFC">{{ $t("solution.shipmunk.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top m-auto" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Shipmunk_316ca19a45.webp">
                        <img class="d-block d-md-none img-fluid img-banner-top m-auto pb-5" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Shipmunk_316ca19a45.webp">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom mb-4 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-sub hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsShipmunk/icon-solutions-shipmunk-1.png"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;" v-html="$t('solution.shipmunk.h1')"></h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-main hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsShipmunk/icon-solutions-shipmunk-2.png"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;" v-html="$t('solution.shipmunk.h2')"></h2>
                        </div>   
                    </div>
                    <div class="row">
                        <div v-if="animation1" class="col-12 text-center mt-5"><h1 class="text-s-30 text-w-700 animate__animated animate__fadeInDown theme-text-sub">{{$t('solution.shipmunk.header')}}</h1></div>
                        <div v-for="(data, index) in responseDataH1" :key="index">
                            <div :id="'contantH1' + (index + 1)" style="display:none">
                                <div v-if="data.position == 'Left'" class="row mt-4 p-custom-2 d-flex">
                                    <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <img v-if="data.image != null" class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__bounceInLeft animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                                </div>
                                <div v-else class="row mt-4 p-custom-2 d-flex">
                                    <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                                        <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                        <div class="animate__animated animate__bounceInRight animate__slow">
                                            <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                                <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                            </div>
                                            <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                                <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                            </div>
                                            <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                        </div>
                                    </div>
                                    <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                                        <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                        <img v-if="data.image != null" class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="animation2" class="col-12 text-center pt-5 pb-3 animate__animated animate__fadeInDown"><h1 class="text-s-30 text-w-700" style="color:#444444">{{$t('solution.shipmunk.add_on_services')}}</h1></div>   
                    <div v-for="(data, index) in responseDataH2" :key="index">
                        <div :id="'contantH2' + (index + 1)" style="display:none">
                            <div v-if="data.position == 'Right'" class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                                        <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 0px">{{data.header}}</span></h2>
                                        <div class="animate__animated animate__bounceInRight animate__slow">
                                            <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                                <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                            </div>
                                            <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                                <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                            </div>
                                            <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                        </div>
                                    </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><img v-if="index == 1" class="me-2" style="margin-top:-3px" src="./../../assets/icon/new.png" alt="new.png"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <img v-if="data.image != null" class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                </div>
                            </div>
                            <div v-else class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.header}}</span></h2>
                                    <img v-if="data.image != null" class="item-center hvr-rotate" :src="data.image.url" :alt="data.image.name">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 0px">{{data.header}}</span></h2>
                                    <div class="animate__animated animate__bounceInLeft animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0 text-limit-3" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-center text-lg-start text-16 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="markdownToHtml(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <div class="d-none d-xl-block">
                            <Splide data-splide='{"type":"loop","padding":"20rem"}'>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_1_ca62b683df.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_2_dba10752e9.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_3_db62025453.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                            </Splide>
                        </div>
                        <div class="d-none d-lg-block d-xl-none d-xxl-none">
                            <Splide data-splide='{"type":"loop","padding":"15rem"}'>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_1_ca62b683df.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_2_dba10752e9.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                    <div style="padding-top: 30px !important;">
                                        <img class="item-center" width="385" height="385" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_3_db62025453.webp" alt="shipmunk-banner2.png">
                                    </div>
                                    </SplideSlide>
                            </Splide>
                        </div>
                        <div class="d-block d-lg-none">
                            <div id="carouselBannerMobile" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <div class="col-12 d-flex justify-content-center" style="padding-top: 30px !important;">
                                            <img width="375" height="375" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_1_ca62b683df.webp" alt="shipmunk-banner.png">
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <div class="col-12 d-flex justify-content-center" style="padding-top: 30px !important;">
                                            <img width="375" height="375" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_2_dba10752e9.webp" alt="shipmunk-banner.png">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col-12 d-flex justify-content-center" style="padding-top: 30px !important;">
                                            <img width="375" height="375" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/shipmunk_card_3_db62025453.webp" alt="shipmunk-banner.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-indicators mt-3" style="position: relative;">
                                    <button type="button" data-bs-target="#carouselBannerMobile" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselBannerMobile" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselBannerMobile" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-lg-5 p-md-4 p-sm-5 p-5 ps-lg-4 pe-lg-4" style="background: linear-gradient(0, #A2D7F0 0%, rgba(161, 215, 240, 0) 100%);">
                    <div class="row">
                        <div class="col-12 mt-4 mb-2 text-center"><h1 class="text-s-30 text-w-700" style="color:#182E9C">{{$t('solution.shipmunk.why')}}</h1></div>    
                    </div>
                    <div class="row mt-2">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p v-if="lang == 'en'" class="text-w-700 mb-0" style="font-size:13.5px">{{$t('solution.shipmunk.why1')}}</p>
                                        <p v-else class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why1')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why2')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p v-if="lang == 'en'" class="text-s-14 text-w-700 mb-0">{{$t('solution.shipmunk.why3')}}</p>
                                        <p v-else class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why3')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why4')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why5')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why6')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why7')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card mt-4">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-2" width="20" height="20" src="./../../assets/icon/Group163.png">
                                        <p v-if="lang == 'en'" class="text-w-700 mb-0" style="font-size:13.5px">{{$t('solution.shipmunk.why8')}}</p>
                                        <p v-else class="text-s-16 text-w-700 mb-0">{{$t('solution.shipmunk.why8')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
                <div class="row mt-0 mt-lg-5 mb-5 ms-5 me-5">
                    <div class="col-4 col-lg-2 m-auto">
                        <img class="img-fluid item-center mt-5 mt-lg-0" src="./../../assets/logo/logo-partner-1.png">
                    </div>
                    <div class="col-4 col-lg-2 m-auto">
                        <img class="img-fluid item-center mt-5 mt-lg-0" src="./../../assets/logo/logo-partner-2.png">
                    </div>
                    <div class="col-4 col-lg-2 m-auto">
                        <img class="img-fluid item-center mt-5 mt-lg-0" src="./../../assets/logo/logo-partner-3.png">
                    </div>
                    <div class="col-4 col-lg-2 m-auto">
                        <img class="img-fluid item-center mt-5 mt-lg-0" src="./../../assets/logo/logo-partner-4.png">
                    </div>
                    <div class="col-4 col-lg-2 m-auto">
                        <img class="img-fluid item-center mt-5 mt-lg-0" src="./../../assets/logo/logo-partner-6.png">
                    </div>
                </div>
                <InterestingArticles :type="type"/>
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name: 'SolutionsShipmunk',
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader,
        Splide,
        SplideSlide
  },
    data () {
            return {
                type: 'Shipmunk',
                isHidden: false,
                lang: localStorage.getItem('lang') || 'TH-th',
                animation1:false,
                animation2:false,
                responseDataH1:[],
                responseDataH2:[]
        }
    },
    mounted () {

        this.axios.get('solution-shipmunk-services?_locale='+ this.lang + '&type=H1')
        .then(response => (this.responseDataH1 = response.data))

        this.axios.get('solution-shipmunk-services?_locale='+ this.lang + '&type=H2')
        .then(response => (this.responseDataH2 = response.data))

        window.addEventListener('scroll', this.onShow);
    },
    methods:{
        onShow (e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > 200){
                this.animation1 = true
            }
            if(this.windowTop > 400){
                document.querySelector('#contantH11').style.display = "block";
            }
            if(this.windowTop > 800){
                document.querySelector('#contantH12').style.display = "block";
            }
            if(this.windowTop > 1200){
                document.querySelector('#contantH13').style.display = "block";
            }
            if(this.windowTop > 1500){
                this.animation2 = true
            }
            if(this.windowTop > 1600){
                document.querySelector('#contantH21').style.display = "block";
            }
            if(this.windowTop > 2000){
                document.querySelector('#contantH22').style.display = "block";
            }
            if(this.windowTop > 2400){
                document.querySelector('#contantH23').style.display = "block";
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

.item-center{
    display: block !important;
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

.card{
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgb(229 233 246 / 70%);
    height: 105px;
}

.theme-background-main{
    background-color: #B7151D;
}

.theme-background-sub{
    background-color: #081B65;
}

.theme-text-main{
    color: #B7151D;
}

.theme-text-sub{
    color: #081B65;
}

.theme-border{
    border-bottom: 1px solid #081B65 !important;
}

.carousel-indicators {
    opacity: .8;
}

.carousel-indicators [data-bs-target]{
    background-color: #000 !important;
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
        width: 60%;
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
        width: 60%;
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
        margin-top:115px !important;
        width: 70%;
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
        margin-top:115px !important;
        width: 70%;
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
        margin-top: 145px !important;
    }
}
</style>