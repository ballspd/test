<template>
<div id="Portfolio">
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Blog</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <font class="font-wght" style="font-size:64px;color:#50151C">Blog</font>
                                <p class="text-s-16" style="color:#50151C">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 mt-4 text-start" style="color:#50151C">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Blog</font></p>
                        <font class="font-wght mt-3" style="font-size:36px;color:#50151C">Blog</font>
                        <p class="text-s-16" style="color:#50151C">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="./../assets/image60.png" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="./../assets/mobile/image60.png">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div v-for="data in responseDataFirst" :key="data.id" class="row mb-5">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"><img class="img-fluid" :src="data.illustration.url" :alt="data.illustration.name" style="width: 510px;height: 330px;"></div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style="padding: 30px 10px 10px 10px;">
                            <p class="text-s-16" style="color:#807F7F">21 July 2021</p>
                            <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                            <p class="text-limit text-s-16" style="color:#373737;">{{data.description}}</p>
                            <router-link class="btn btn-transparent mt-2 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
                        </div>
                    </div>
                    <div class="d-none d-xl-block d-xxl-block">
                        <div class="row p-3" style="background-color:#F2F3F5">
                            <div class="col-12 p-0">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue "><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="row">
                                                        <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                        <div class="col-6 p-1">                                                
                                                            <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                            <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                            <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                            <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
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
                    <div class="d-block d-lg-none d-xl-none mb-4">
                        <div id="carouselMobile" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="row p-3" style="background-color:#F2F3F5">
                                <div class="col-12 p-0">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="10000">
                                        <div class="row">
                                            <div class="col-12 d-flex justify-content-center">
                                                <div class="row">
                                                    <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                    <div class="col-6 p-1">                                                
                                                        <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                        <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                        <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                        <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                        <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="2000">
                                        <div class="row">
                                            <div class="col-12 d-flex justify-content-center">
                                                <div class="row">
                                                    <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                    <div class="col-6 p-1">                                                
                                                        <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                        <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                        <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                        <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                        <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-12 d-flex justify-content-center">
                                                <div class="row">
                                                    <div class="col-6" style="width:170px"><img class="img-fluid" src="./../assets/mobile/Group345.png"></div>
                                                    <div class="col-6 p-1">                                                
                                                        <button class="btn-green me-1"><span>Lorem ipsum</span></button>
                                                        <button class="btn-blue"><span>Lorem ipsum</span></button>
                                                        <p class="font-wght mt-2 mb-1" style="color:#15304E;font-size:24px">Lorem ipsum</p>
                                                        <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                                        <p style="color:#373737;font-size:14px">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-indicators mt-3" style="position: relative;">
                                <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center mt-4 justify-content-center">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true" href="#c1"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทคนิคการขาย <br>และการโฆษณา</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true" href="#c2"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Social Media</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true,c3 = true" href="#c3"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>Market Place</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true,c3 = true,c4 = true" href="#c4"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">เทรนด์ <br>E-Commerce</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true" href="#c5"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">ครบจบ <br>ทุกเรื่อง LINE</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true" href="#c6"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Martech</p></a></div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 p-xxl-2 p-3"><a @click="c1 = true,c2 = true,c3 = true,c4 = true,c5 = true,c6 = true,c7 = true" href="#c7"><img class="img-fluid" src="./../assets/Ellipse52.png"><p class="text-s-18 text-w-700 mt-3" style="color:#15304E">Digital <br>Transformation</p></a></div>
                    </div>
                    <span id="c1" style="display: block;height: 85px;margin-top: -85px;"></span>
                    <div v-if="c1" class="animate__animated animate__bounceInUp">
                        <div class="row mt-4">
                            <div class="col-6">
                                <font class="text-w-700" style="font-size:24px;color:#15304E">เทคนิคการขาย และการโฆษณา</font>
                            </div>
                            <div class="col-6 text-end">
                                <router-link @click="scrollToTop" :to="{ path: '/Blogs/All/1'}"><font style="color:#807F7F;font-size: 14px">View all</font></router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac1" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac2" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac3" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac4" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac5" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac6" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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
                                <p style="color:#807F7F;font-size: 14px">View all</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div v-for="data in responseDatac7" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <img class="img-fix-size" :src="data.illustration.url">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span>Read More</span></router-link>
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

export default {
    name: 'blog',
    data () {
        return {
            isActive: true,
            show:false,
            windowTop:0,
            c1:false,
            c2:false,
            c3:false,
            c4:false,
            c5:false,
            c6:false,
            c7:false,
            responseDataFirst:[],
            responseDatac1:[],
            responseDatac2:[],
            responseDatac3:[],
            responseDatac4:[],
            responseDatac5:[],
            responseDatac6:[],
            responseDatac7:[]
        }
    },
    created () {
        this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?_sort=updated_at:DESC&_limit=1')
        .then(response => (this.responseDataFirst = response.data))
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
        handleScroll () {
            this.show = true
        },
        onShow(e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > '1200'){
                this.c1 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=1&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac1 = response.data))
                .catch()
            }
            else{
                this.c1 = false
            }
            if(this.windowTop > '1650')
            {
                this.c2 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=2&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac2 = response.data))
                .catch()
            }
            else{
                this.c2 = false
            }
            if(this.windowTop > '2150')
            {
                this.c3 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=3&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac3 = response.data))
                .catch()
            }
            else{
                this.c3 = false
            }
            if(this.windowTop > '2650')
            {
                this.c4 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=4&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac4 = response.data))
                .catch()
            }
            else{
                this.c4 = false
            }
            if(this.windowTop > '3150')
            {
                this.c5 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=5&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac5 = response.data))
                .catch()
            }
            else{
                this.c5 = false
            }
            if(this.windowTop > '3650')
            {
                this.c6 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=6&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac6 = response.data))
                .catch()
            }
            else{
                this.c6 = false
            }
            if(this.windowTop > '4150')
            {
                this.c7 = true
                this.axios.get('https://staging-sellsukiadmin.bearyweb.com/blogs?blog_category=7&_sort=updated_at:DESC&_limit=4')
                .then(response => (this.responseDatac7 = response.data))
                .catch()
            }
            else{
                this.c7 = false
            }
        }
    }
}
</script>

<style scoped>
.btn-green{
    width: 82px;
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
    width: 82px;
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

@media only screen and (max-width: 600px) {
    .text-s-18{
        font-size: 14px !important;
    }
}
</style>