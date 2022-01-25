<template>
<div id="Portfolio">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Blog</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <font class="font-wght" style="font-size:64px;color:#50151C">Blog</font>
                                <p class="text-s-16" style="color:#50151C;width: 395px;">ติดตามข่าวสาร และข้อมูลดี ๆ เกี่ยวกับ เทรนด์การตลาด และ e-Commerce ก่อนใครได้แล้ว ที่นี่!</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 mt-4 text-start" style="color:#50151C"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">Blog</font></p>
                        <font class="font-wght mt-3" style="font-size:36px;color:#50151C">Blog</font>
                        <p class="text-s-16" style="color:#50151C">ติดตามข่าวสาร และข้อมูลดี ๆ เกี่ยวกับ เทรนด์การตลาด และ e-Commerce ก่อนใครได้แล้ว ที่นี่!</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Blog_01_1_4a9495c574.webp" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Blog_01_1_4a9495c574.webp">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div v-for="(data, index) in responseData" :key="index" class="mb-5">
                        <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                        <div v-if="index == 0" class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><img v-if="data.illustration != null" class="img-fluid img-fix-size" :src="data.illustration.url" :alt="data.illustration.name" style="width: 510px;height: 330px;"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style="padding: 30px 10px 10px 10px;">
                                <p class="text-s-16" style="color:#807F7F">{{dateTime(responseData.created_at)}}</p>
                                <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                <p class="text-limit-2 text-s-16" style="color:#373737;">{{data.description}}</p>
                                <router-link class="btn btn-transparent mt-2 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="d-none d-xl-block d-xxl-block">
                        <div class="row p-3" style="background-color:#F2F3F5">
                            <div class="col-12 p-0">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div v-for="(data, index) in responseData" :key="index" :class="{'col-4':index < 3}">
                                                    <router-link class="row" v-if="index < 3" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.name"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <div class="btn lh-1 btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important"><span style="font-size:14px">NEW</span></div>
                                                            <p class="text-limit-1 font-wght mt-2 mb-1" style="color:#15304E;font-size:18px">{{data.title}}</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                                        </div>
                                                    </router-link>
                                                </div>                                         
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div v-for="(data, index) in responseData" :key="index" :class="{'col-4':index > 2}">
                                                    <router-link class="row" v-if="index > 2" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.name"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <div class="btn lh-1 btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important"><span style="font-size:14px">NEW</span></div>
                                                            <p class="text-limit-1 font-wght mt-2 mb-1" style="color:#15304E;font-size:18px">{{data.title}}</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                                        </div>
                                                    </router-link>
                                                </div>                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-lg-none d-xl-none mb-4">
                        <div id="carouselMobile" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="row p-3" style="background-color:#F2F3F5">
                                <div class="col-12 p-0">
                                    <div class="carousel-inner">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'active':index == 0}" class="carousel-item" data-bs-interval="10000">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img v-if="data.illustration != null" class="img-fluid img-fix-size-2" :src="data.illustration.url" :alt="data.illustration.name"></div>
                                                        <div class="col-6 p-2 ps-sm-3 pe-sm-3">                                                
                                                            <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}" class="btn btn-orange hvr-back-pulse" style="width: 70px !important;height: 32px !important;line-height: 1"><span style="font-size:14px">NEW</span></router-link>
                                                            <p class="text-limit-1 font-wght mt-2 mb-1" style="color:#15304E;font-size:18px">{{data.title}}</p>
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
                                    <button type="button" data-bs-target="#carouselMobile" :data-bs-slide-to="index" :class="{'active':index == 0}" :aria-current="{'true':index == 0}" :aria-label="'Slide '+ (index + 1)"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center mt-4 justify-content-center">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true" href="#c1">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/1_6e4fb38d23.webp">
                                </div>
                            <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทคนิคการขาย <br>และการโฆษณา</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true" href="#c2">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Social_Media_1_2c014a8960.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Social Media</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true" href="#c3">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Market_Place_1_53e4432aa1.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Market Place</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true" href="#c4">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/E_Commerce_1_2a0856686e.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>E-Commerce</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true" href="#c5">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/LINE_1_01da326f99.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">ครบจบ <br>ทุกเรื่อง LINE</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true" href="#c6">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Martech_1_b04d7041eb.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Martech</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true,c7 = true" href="#c7">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Digital_Transformation_1_a66fa3e27e.webp">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Digital <br>Transformation</p>
                            </a>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3">
                            <a class="hvr-bounce-in" @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true,c7 = true,c8 = true" href="#c8">
                                <div class="bg-radius">
                                    <img class="img-fluid" width="70" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/other_f1d6b43fd6.png">
                                </div>
                                <p class="text-s-18 text-w-700 mt-3" style="color:#15304E">อื่นๆ</p>
                            </a>
                        </div>
                    </div>
                    <span id="c1" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c1" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <font class="text-w-700" style="font-size:24px;color:#15304E">เทคนิคการขาย และการโฆษณา</font>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/8', query: { type: 'เทคนิคการขาย และการโฆษณา' } }"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac1" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                            <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                            <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                            <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                            <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                            <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac1.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c2" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c2" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ Social Media</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/9', query: { type: 'เทรนด์ Social Media' } }"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac2" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac2.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c3" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c3" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ Market Place</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/10', query: { type: 'เทรนด์ Market Place' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac3" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac3.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c4" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c4" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">เทรนด์ E-Commerce</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/11', query: { type: 'เทรนด์ E-Commerce' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac4" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac4.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c5" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c5" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">ครบจบ ทุกเรื่อง LINE</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/12', query: { type: 'ครบจบ ทุกเรื่อง LINE' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac5" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac5.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c6" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c6" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">Martech</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/13', query: { type: 'Martech' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac6" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac6.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c7" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c7" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">Digital Transformation</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/14', query: { type: 'Digital Transformation' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac7" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac7.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="c8" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c8" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="text-w-700" style="font-size:24px;color:#15304E">อื่น ๆ</p>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/15', query: { type: 'อื่น ๆ' }}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac8" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                            <div v-if="responseDatac8.length == 0" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" src="./../assets/Group364.png">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#15304E">Lorem Ipsum Lorem Ipsum Lorem Ipsum</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-2" style="color:#373737;font-size:14px">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
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

export default {
    name: 'blog',
    components: {
        Preloader
    },
    data () {
        return {
            isActive: true,
            show:false,
            windowTop:0,
            lang: localStorage.getItem('lang') || 'TH-th',
            c1:false,
            c2:false,
            c3:false,
            c4:false,
            c5:false,
            c6:false,
            c7:false,
            c8:false,
            responseData:[],
            responseDatac1:[],
            responseDatac2:[],
            responseDatac3:[],
            responseDatac4:[],
            responseDatac5:[],
            responseDatac6:[],
            responseDatac7:[],
            responseDatac8:[]
        }
    },
    created () {
        this.axios.get('blogs?_sort=created_at:DESC&_limit=6&_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
        .catch()
    },
    mounted () {
        window.addEventListener('scroll', this.onShow);
    },
    unmounted () {
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
                this.axios.get('blogs?blog_category=8&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac1 = response.data))
                .catch()
            }
            if(this.windowTop > '1650')
            {
                this.c2 = true
                this.axios.get('blogs?blog_category=9&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac2 = response.data))
                .catch()
            }
            if(this.windowTop > '2150')
            {
                this.c3 = true
                this.axios.get('blogs?blog_category=10&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac3 = response.data))
                .catch()
            }
            if(this.windowTop > '2650')
            {
                this.c4 = true
                this.axios.get('blogs?blog_category=11&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac4 = response.data))
                .catch()
            }
            if(this.windowTop > '3150')
            {
                this.c5 = true
                this.axios.get('blogs?blog_category=12&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac5 = response.data))
                .catch()
            }
            if(this.windowTop > '3650')
            {
                this.c6 = true
                this.axios.get('blogs?blog_category=13&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac6 = response.data))
                .catch()
            }
            if(this.windowTop > '4150')
            {
                this.c7 = true
                this.axios.get('blogs?blog_category=14&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac7 = response.data))
                .catch()
            }
            if(this.windowTop > '4550')
            {
                this.c8 = true
                this.axios.get('blogs?blog_category=15&_sort=created_at:DESC&_limit=4&_locale='+ this.lang)
                .then(response => (this.responseDatac8 = response.data))
                .catch()
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

.carousel-indicators {
    opacity: .8;
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

@media only screen and (max-width: 600px) {
    .text-s-18{
        font-size: 14px !important;
    }
}
</style>