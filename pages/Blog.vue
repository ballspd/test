<template>
<div id="blog">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;"><NuxtLink @click="scrollToTop" :to="localePath('/')">{{ $t("page.Home") }}</NuxtLink> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">{{ $t("page.BLOG.Blog") }}</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <h1 class="font-wght" style="font-size:52px;color:#50151C">{{$t("Blog.titel")}}</h1>
                                <p class="text-s-16" style="color:#50151C;width: 395px;">{{$t("Blog.mata")}}</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 text-start" style="color:#50151C;margin-top:95px !important">
                            <NuxtLink @click="scrollToTop" :to="localePath('/')" style="color:#50151C">{{ $t("page.Home") }}</NuxtLink> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-16 text-w-700"><NuxtLink @click="scrollToTop" :to="localePath('/blog')" style="color:#50151C"> {{ $t("page.BLOG.Blog") }}</NuxtLink></font>
                        </p>
                        <h1 class="font-wght mt-3" style="font-size:36px;color:#50151C">{{$t("Blog.titel")}}</h1>
                        <p class="text-s-16" style="color:#50151C">{{$t("Blog.mata")}}</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Blog_01_1_4a9495c574.webp" alt="Header Blog 01.webp" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Blog_01_1_4a9495c574.webp" alt="Header Blog 01.webp">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mb-3">
                        <div class="col-3" style="padding:0 !important">
                            <span class="d-flex"><img width="35" height="20" class="me-2" style="margin-top:11px" src="./../assets/icon/new.webp" alt="new.webp"><div class="text-w-700 text-s-28 color-15304E">{{$t("Blog.LastedUpdate")}}</div></span>
                        </div>
                        <div class="col-9">
                            <hr class="hr-mid"/>
                        </div>
                    </div>
                    <div v-for="(data, index) in responseData" :key="index" class="mb-5">
                        <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                        <div v-if="index == 0" class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <img v-if="data.illustration != null" class="img-fluid img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" style="width: 510px;height: 330px;">
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-3 pb-2 pt-1">
                                <p class="text-s-16" style="color:#807F7F">{{dateTime(responseData.created_at)}}</p>
                                <font class="text-w-700 text-s-24 color-15304E">{{data.title}}</font>
                                <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                <p class="text-s-16" style="color:#373737;">{{data.description}}</p>
                                <NuxtLink class="btn btn-transparent mt-2 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                            </div>
                        </div>
                        </NuxtLink>
                    </div>
                    <div class="d-none d-xl-block">
                        <div class="row p-3" style="background-color:#F2F3F5">
                            <div class="col-12 p-0">
                                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="2000">
                                            <div class="row">
                                                <div v-for="(data, index) in responseData" :key="index" :class="{'col-4':index < 4 && index != 0}">
                                                    <NuxtLink class="row" v-if="index < 4 && index != 0" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.alternativeText"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <div class="btn lh-1 btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important"><span style="font-size:14px">NEW</span></div>
                                                            <p class="text-limit-2 font-wght mt-2 mb-1" style="color:#15304E;font-size:14px">{{data.title}}</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p class="text-limit-2" style="color:#373737;font-size:12px">{{data.description}}</p>
                                                        </div>
                                                    </NuxtLink>
                                                </div>                                         
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="2000">
                                            <div class="row">
                                                <div v-for="(data, index) in responseData" :key="index" :class="{'col-4':index > 3}">
                                                    <NuxtLink class="row" v-if="index > 3" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.alternativeText"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <div class="btn lh-1 btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important"><span style="font-size:14px">NEW</span></div>
                                                            <p class="text-limit-2 font-wght mt-2 mb-1" style="color:#15304E;font-size:14px">{{data.title}}</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p class="text-limit-2" style="color:#373737;font-size:12px">{{data.description}}</p>
                                                        </div>
                                                    </NuxtLink>
                                                </div>                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-indicators mt-carousel">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-xl-none mb-4">
                        <div id="carouselMobile" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="row p-3" style="background-color:#F2F3F5">
                                <div class="col-12 p-0">
                                    <div class="carousel-inner">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'active':index == 1 && index != 0,'display-none':index == 0}" class="carousel-item" data-bs-interval="5000">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.alternativeText"></div>
                                                        <div class="col-6 p-2 ps-sm-3 pe-sm-3">                                                
                                                            <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})" class="btn btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important;line-height: 1"><span style="font-size:14px">NEW</span></NuxtLink>
                                                            <p class="text-limit-2 font-wght mt-2 mb-1" style="color:#15304E;font-size:18px">{{data.title}}</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p class="text-limit-2 text-s-14 mb-0" style="color:#373737;">{{data.description}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-indicators mt-3" style="position: relative;">
                                <div v-for="(data, index) in responseData" :key="index">
                                    <button v-if="index != 0" type="button" data-bs-target="#carouselMobile" :data-bs-slide-to="index" :class="{'active':index == 1 && index != 0}" :aria-current="{'true':index == 1 && index != 0}" :aria-label="'Slide '+ (index + 1)"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center mt-5 pt-4 justify-content-center">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true" href="#เทคนิคการขาย-และการโฆษณา">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/1_6e4fb38d23.webp" alt="1_6e4fb38d23.webp">
                                </div>
                            <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทคนิคการขาย <br>และการโฆษณา</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true" href="#เทรนด์-Social-Media">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Social_Media_1_2c014a8960.webp" alt="Social Media 1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Social Media</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true" href="#เทรนด์-Market-Place">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Market_Place_1_53e4432aa1.webp" alt="Market Place 1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Market Place</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true" href="#เทรนด์-E-Commerce">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/E_Commerce_1_2a0856686e.webp" alt="E Commerce 1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>E-Commerce</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true" href="#ครบจบ-ทุกเรื่อง-LINE">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/LINE_1_01da326f99.webp" alt="LINE_1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">ครบจบ <br>ทุกเรื่อง LINE</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true" href="#Martech">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Martech_1_b04d7041eb.webp" alt="Martech_1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Martech</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true,c7 = true" href="#Digital-Transformation">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Digital_Transformation_1_a66fa3e27e.webp" alt="Digital_Transformation_1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Digital <br>Transformation</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true,c7 = true,c8 = true" href="#อื่นๆ">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/other_bc5f93a44a.webp" alt="other.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">อื่นๆ</p>
                            </a>
                        </div>
                    </div>
                    <span id="เทคนิคการขาย-และการโฆษณา" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c1" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <font class="text-w-700 color-15304E text-s-20">เทคนิคการขาย และการโฆษณา</font>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/8/เทคนิคการขาย-และการโฆษณา' })"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac1" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac1.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="เทรนด์-Social-Media" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c2" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ Social Media</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/9/เทรนด์-Social-Media'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac2" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac2.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="เทรนด์-Market-Place" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c3" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ Market Place</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/10/เทรนด์-Market-Place'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac3" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac3.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="เทรนด์-E-Commerce" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c4" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ E-Commerce</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/11/เทรนด์-E-Commerce'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac4" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac4.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="ครบจบ-ทุกเรื่อง-LINE" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c5" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">ครบจบ ทุกเรื่อง LINE</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/12/ครบจบ-ทุกเรื่อง-LINE'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac5" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac5.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="Martech" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c6" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">Martech</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/13/martech'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac6" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac6.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="Digital-Transformation" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c7" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">Digital Transformation</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/14/digital-transformation'})"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac7" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac7.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="อื่นๆ" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c8" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">อื่น ๆ</p>
                            </div>
                            <div class="col-6 text-end">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/all/15/อื่นๆ' })"><font style="color:#807F7F;font-size: 14px">View all</font></NuxtLink>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac8" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 crad-height">
                                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <div class="text-end btn-crad">
                                            <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-if="responseDatac8.length == 0" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.webp" alt="Group364">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Preloader from '@/components/Preloader'
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'blog',
    layout:"Layout",
    components: {
        Preloader
    },
    head() {
        return {
            title: "Blog"
        };
    },
    async asyncData({ $axios, route, i18n }) {
        const responseData = await $axios.$get(process.env.API_URL+'blogs?_sort=created_at:DESC&_limit=7&_locale='+i18n.locale);
        const responseDatac1 = await $axios.$get(process.env.API_URL+'blogs?blog_category=8&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac2 = await $axios.$get(process.env.API_URL+'blogs?blog_category=9&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac3 = await $axios.$get(process.env.API_URL+'blogs?blog_category=10&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac4 = await $axios.$get(process.env.API_URL+'blogs?blog_category=11&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac5 = await $axios.$get(process.env.API_URL+'blogs?blog_category=12&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac6 = await $axios.$get(process.env.API_URL+'blogs?blog_category=13&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac7 = await $axios.$get(process.env.API_URL+'blogs?blog_category=14&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        const responseDatac8 = await $axios.$get(process.env.API_URL+'blogs?blog_category=15&_sort=created_at:DESC&_limit=3&_locale='+i18n.locale);
        return { 
            responseData: responseData,
            responseDatac1: responseDatac1,
            responseDatac2: responseDatac2,
            responseDatac3: responseDatac3,
            responseDatac4: responseDatac4,
            responseDatac5: responseDatac5,
            responseDatac6: responseDatac6,
            responseDatac7: responseDatac7,
            responseDatac8: responseDatac8
        };
    },
    data () {
        return {
            isActive: true,
            show:false,
            windowTop:0,
            //lang: this.$i18n.locale || 'th-TH',
            lang: 'th-TH',
            c1:false,
            c2:false,
            c3:false,
            c4:false,
            c5:false,
            c6:false,
            c7:false,
            c8:false,
            responseData: [],
            responseDatac1: [],
            responseDatac2: [],
            responseDatac3: [],
            responseDatac4: [],
            responseDatac5: [],
            responseDatac6: [],
            responseDatac7: [],
            responseDatac8: []
        }
    },
    mounted () {
        //console.log(this.responseData.length);
         axios.get(process.env.API_URL+'blogs?_sort=created_at:DESC&_limit=7&_locale='+ this.lang)
         .then(response => (this.responseData = response.data))
         .catch()

         axios.get(process.env.API_URL+'blogs?blog_category=8&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac1 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=9&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac2 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=10&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac3 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=11&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac4 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=12&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac5 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=13&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac6 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=14&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac7 = response.data))
         .catch()
         axios.get(process.env.API_URL+'blogs?blog_category=15&_sort=created_at:DESC&_limit=3&_locale='+ this.lang)
         .then(response => (this.responseDatac8 = response.data))
         .catch()

        window.addEventListener('scroll', this.onShow);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        handleScroll () {
            this.show = true
        },
        onShow(e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > '1200'){
                this.c1 = true
            }
            if(this.windowTop > '1500')
            {
                this.c2 = true
            }
            if(this.windowTop > '1800')
            {
                this.c3 = true
            }
            if(this.windowTop > '2300')
            {
                this.c4 = true
            }
            if(this.windowTop > '2700')
            {
                this.c5 = true
            }
            if(this.windowTop > '3100')
            {
                this.c6 = true
            }
            if(this.windowTop > '3600')
            {
                this.c7 = true
            }
            if(this.windowTop > '4000')
            {
                this.c8 = true
            }
        }
    }
}
</script>

<style scoped>

.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active{
    opacity: 0.8 !important;
}

.lh-1{
    line-height: 1 !important
}

.display-none{
    display: none;
}

.btn-green{
    height: 30px;
    font-size: 10px;
    background: #2AAF4A;
    border-radius: 20px;
    color: #FFFFFF !important;
    box-sizing: border-box !important;
    border: none;
    border-radius: 20px !important;
}

.btn-blue{
    height: 30px;
    font-size: 10px;
    background: #15304E;
    border-radius: 20px;
    color: #FFFFFF !important;
    box-sizing: border-box !important;
    border: none;
    border-radius: 20px !important;
}

.carousel-indicators .active {
    background-color: #F76E22 !important;
}

.carousel-indicators [data-bs-target]{
    background-color: #F76E22 !important;
}

.carousel-indicators {
    opacity: .8;
}

.mt-carousel{
    margin-top: 30px !important;
    bottom: auto !important;
}

.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.img-fix-size-2{
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.bg-radius{
    background: #F2F3F5;
    padding: 32px;
    border-radius: 50%;
}

/* Extra small devices (phones, 525px and down) */
@media only screen and (max-width: 525px) {
    .text-s-18{
        font-size: 14px !important;
    }
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
}

@media only screen and (min-width: 525px) {
    .text-s-18{
        font-size: 14px !important;
    }
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .btn-crad{ 
        top: 480px;
        position: absolute;
        margin-left: 110px;
    }
    .crad-height{
        height: 490px;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .btn-crad{ 
        top: 485px;
        position: absolute;
        margin-left: 140px;
    }
    .crad-height{
        height: 490px;
    }
    .hr-mid{
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }
}

</style>
