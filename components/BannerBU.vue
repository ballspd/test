<template>
    <div id="BannerBU">
        <div class="row banner-hero">
            <div class="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="d-none d-lg-block">
                    <table class="align-middle" style="width: 100%;">
                        <td style="height: 690px !important;">
                            <div v-if="activeBuFuse">
                                <div class="animate__animated animate__flipInX">
                                    <picture>
                                        <source type="image/webp" srcset="./../assets/logo/logo-Fuse.webp">
                                        <img class="mt-5" src="./../assets/logo/logo-Fuse.webp" alt="logo_fuse" loading="lazy">
                                    </picture>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <h1 class="font-wght mt-3 text-s-banner" style="color:#50151C;line-height: 1.4;width:550px">FUSE ADVERTISING</h1>
                                </div>
                                <div class="animate__animated animate__fadeInLeft">
                                    <p class="text-s-16 mt-3" style="color:#50151C;width:430px">{{ $t("banner.fuse") }}</p>
                                </div>
                            </div>
                            <div v-else-if="activeBuLine">
                                <div class="animate__animated animate__flipInX">
                                    <picture>
                                        <source type="image/webp" srcset="./../assets/logo/logo-line.webp">
                                        <img class="mt-5" src="./../assets/logo/logo-line.webp" alt="logo_Line" loading="lazy">
                                    </picture>
                                </div>
                                <div class="animate__animated animate__fadeInLeft">
                                    <h1 class="font-wght mt-3 text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">LINE AGENCY <br>BY SELLSUKI</h1>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <p class="text-s-16 mt-3" style="color:#50151C;width:430px">{{ $t("banner.line") }}</p>
                                </div>
                            </div>
                            <div v-else-if="activeBuAkita">
                                <div class="animate__animated animate__flipInX">
                                    <picture>
                                        <source type="image/webp" srcset="./../assets/logo/logo-Akita.webp">
                                        <img class="mt-5" src="./../assets/logo/logo-Akita.webp" alt="logo_Akita" loading="lazy">
                                    </picture>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <h1 class="font-wght mt-3 text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">AKITA <br>FULFILLMENT</h1>
                                </div>
                                <div class="animate__animated animate__fadeInLeft">
                                    <p class="text-s-16 mt-3" style="color:#50151C;width:430px">{{ $t("banner.akita") }}</p>
                                </div>
                            </div>
                            <div v-else-if="activeBuBeary">
                                <div class="animate__animated animate__flipInX">
                                    <picture>
                                        <source type="image/webp" srcset="./../assets/logo/logo-Beary.webp">
                                        <img class="mt-5" src="./../assets/logo/logo-Beary.webp" alt="logo_Beary" loading="lazy">
                                    </picture>
                                </div>
                                <div class="animate__animated animate__fadeInLeft">
                                    <h1 class="font-wght mt-3 text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">BEARY TECH</h1>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <p class="text-s-16 mt-3" style="color:#50151C;width:430px">{{ $t("banner.beary") }}</p>
                                </div>
                            </div>
                            <div v-else-if="activeBuKaikong">
                                <div class="animate__animated animate__flipInX">
                                    <picture>
                                        <source type="image/webp" srcset="./../assets/logo/logo-Kaikong.webp">
                                        <img class="mt-5" src="./../assets/logo/logo-Kaikong.webp" alt="logo_Kaikong" loading="lazy">
                                    </picture>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <h1 class="font-wght mt-3 text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">KAIKONG</h1>
                                </div>
                                <div class="animate__animated animate__fadeInLeft">
                                    <p class="text-s-16 mt-3" style="color:#50151C;width:430px">{{ $t("banner.kaikong") }}</p>
                                </div>
                            </div>
                            <div v-else>
                                <div class="animate__animated animate__fadeInLeft">
                                    <h1 class="font-wght mt-5 text-s-banner" style="color:#50151C;width:600px">E-COMMERCE <br>SOLUTION</h1>
                                </div>
                                <div class="animate__animated animate__fadeInRight">
                                    <p class="text-s-16" style="color:#50151C;width:420px">Sellsuki ผู้ช่วยธุรกิจออนไลน์ที่ครบเครื่องมากที่สุด ช่วยมองหาทางออกที่ใช่ให้ธุรกิจคุณ</p>
                                </div>
                            </div>
                        </td>
                    </table>
                </div>
                <div class="d-block d-lg-none">
                    <div v-if="activeBuFuse" class="text-center ps-5 pe-5">
                        <picture>
                            <source type="image/webp" srcset="./../assets/logo/logo-Fuse.webp">
                            <img class="animate__animated animate__flipInX" src="./../assets/logo/logo-Fuse.webp" alt="logo_fuse" loading="lazy" style="margin-top:120px">
                        </picture>
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">FUSE ADVERTISING</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.fuse") }}</p>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Fuse')" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></NuxtLink>
                    </div>
                    <div v-else-if="activeBuLine" class="text-center ps-5 pe-5">
                        <picture>
                            <source type="image/webp" srcset="./../assets/logo/logo-line.webp">
                            <img class="animate__animated animate__flipInX" src="./../assets/logo/logo-line.webp" alt="logo_line" loading="lazy" style="margin-top:120px">
                        </picture>
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">LINE AGENCY BY SELLSUKI</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.line") }}</p>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Line')" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></NuxtLink>
                    </div>
                    <div v-else-if="activeBuAkita" class="text-center ps-5 pe-5">
                        <picture>
                            <source type="image/webp" srcset="./../assets/logo/logo-Akita.webp">
                            <img class="animate__animated animate__flipInX" src="./../assets/logo/logo-Akita.webp" alt="logo_akita" loading="lazy" style="margin-top:120px">
                        </picture>
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">AKITA FULFILLMENT</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.akita") }}</p>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Akita')" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></NuxtLink>
                    </div>
                    <div v-else-if="activeBuBeary" class="text-center ps-5 pe-5">
                        <picture>
                            <source type="image/webp" srcset="./../assets/logo/logo-Beary.webp">
                            <img class="animate__animated animate__flipInX" src="./../assets/logo/logo-Beary.webp" alt="logo_beary" loading="lazy" style="margin-top:120px">
                        </picture>
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">BEARY TECH</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.beary") }}</p>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Beary')" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></NuxtLink>
                    </div>
                    <div v-else-if="activeBuKaikong" class="text-center ps-5 pe-5">
                        <picture>
                            <source type="image/webp" srcset="./../assets/logo/logo-Kaikong.webp">
                            <img class="animate__animated animate__flipInX" src="./../assets/logo/logo-Kaikong.webp" alt="logo_kaikong" loading="lazy" style="margin-top:120px">
                        </picture>
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">KAIKONG</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.kaikong") }}</p>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Kaikong')" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></NuxtLink>
                    </div>
                    <div v-else class="text-center">
                        <h1 class="font-wght" style="font-size:36px;color:#50151C;margin-top:120px">E-COMMERCE <br>SOLUTION</h1>
                        <p class="text-s-16 ps-3 pe-3" style="color:#50151C">Sellsuki ผู้ช่วยธุรกิจออนไลน์ที่ครบเครื่องมากที่สุด ช่วยมองหาทางออกที่ใช่ให้ธุรกิจคุณ</p>
                    </div>
                </div>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="row d-none d-lg-block" style="margin-top: 80px;">
                    <div class="col-12">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp">
                            <img @mouseover="showHover = false,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-main" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp" alt="bu_main" loading="lazy">
                        </picture>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Fuse')">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Fuse_b0f13ab75c.webp">
                            <img @mouseover="activeBuFuse = true,showHover = false,activeBuLine = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-fuse hvr-grow" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Fuse_b0f13ab75c.webp" alt="Fuse" loading="lazy">
                        </picture>
                        </NuxtLink>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Line')">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Line_e32da8e76c.webp">
                            <img @mouseover="activeBuLine = true,showHover = false,activeBuFuse = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-line hvr-grow" :class="{'auto-pulse':showHover}" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Line_e32da8e76c.webp" alt="Line" loading="lazy">
                        </picture>
                        </NuxtLink>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Akita')">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/AKT_0f1aae1062.webp">
                            <img @mouseover="activeBuAkita = true,showHover = false,activeBuFuse = false, activeBuLine = false, activeBuBeary = false, activeBuKaikong = false" class="bu-akita hvr-grow" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/AKT_0f1aae1062.webp" alt="Akita" loading="lazy">
                        </picture>
                        </NuxtLink>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Beary')">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Bearyweb_299dd0c679.webp">
                            <img @mouseover="activeBuBeary = true,showHover = false,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuKaikong = false" class="bu-beary hvr-grow" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Bearyweb_299dd0c679.webp" alt="Beary" loading="lazy">
                        </picture>
                        </NuxtLink>
                        <NuxtLink @click="scrollToTop" :to="localePath('/Solutions/Kaikong')">
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Kaikong_dc3a1c2aad.webp">
                            <img @mouseover="activeBuKaikong = true,showHover = false,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuBeary = false" class="bu-kaikong hvr-grow" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Kaikong_dc3a1c2aad.webp" alt="Kaikong" loading="lazy">
                        </picture>
                        </NuxtLink>
                        <picture>
                            <source type="image/webp" srcset="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp">
                            <img class="bu-size" width="611" height="614" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp" alt="SSK_Main" loading="lazy">
                        </picture>
                    </div>
                </div>
                <div class="d-block d-lg-none" style="margin-top: -30px;">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-sm-11 col-10">
                            <a>
                                <picture>
                                    <source type="image/webp" srcset="./../assets/mobile/banner/fuse.webp">
                                    <img @click="showHover = false,activeBuFuse = true ,activeBuLine = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-fuse hvr-grow" src="./../assets/mobile/banner/fuse.webp" alt="Fuse" loading="lazy">
                                </picture>
                            </a>
                            <a>
                                <picture>
                                    <source type="image/webp" srcset="./../assets/mobile/banner/line.webp">
                                    <img @click="showHover = false,activeBuLine = true ,activeBuFuse = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-line" :class="{'auto-pulse':showHover}" src="./../assets/mobile/banner/line.webp" alt="Line" loading="lazy">
                                </picture>
                            </a>
                            <a>
                                <picture>
                                    <source type="image/webp" srcset="./../assets/mobile/banner/akita.webp">
                                    <img @click="showHover = false,activeBuAkita = true ,activeBuFuse = false, activeBuLine = false, activeBuBeary = false, activeBuKaikong = false" class="bu-akita" src="./../assets/mobile/banner/akita.webp" alt="Akita" loading="lazy">
                                </picture>
                            </a>
                            <a>
                                <picture>
                                    <source type="image/webp" srcset="./../assets/mobile/banner/beary.webp">
                                    <img @click="showHover = false,activeBuBeary = true ,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuKaikong = false" class="bu-beary" src="./../assets/mobile/banner/beary.webp" alt="Beary" loading="lazy">
                                </picture>
                            </a>
                            <a>
                                <picture>
                                    <source type="image/webp" srcset="./../assets/mobile/banner/kaikong.webp">
                                    <img @click="showHover = false,activeBuKaikong = true ,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuBeary = false" class="bu-kaikong" src="./../assets/mobile/banner/kaikong.webp" alt="Kaikong" loading="lazy">
                                </picture>
                            </a>
                            <picture>
                                <source type="image/webp" srcset="./../assets/mobile/banner/SSK_Main.webp">
                                <img class="item-center bu-size" width="510" height="474" src="./../assets/mobile/banner/SSK_Main.webp" alt="SSK_Main" loading="lazy">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BannerBU',
  data(){
    return {
    showHover: true,
    activeBuFuse: false,
    activeBuLine: false,
    activeBuAkita: false,
    activeBuBeary: false,
    activeBuKaikong: false
    }
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    },
  }
}
</script>

<style scoped>
@-webkit-keyframes auto-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes auto-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
.auto-pulse {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.auto-pulse, .auto-pulse:focus, .auto-pulse:active {
  -webkit-animation-name: auto-pulse;
  animation-name: auto-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.bu-main{
        position: absolute;
        width: 300px;
        height: 279px;
        cursor: pointer;
        margin: 170px 0 0 190px;
        opacity: 0;
    }

/* -------------------------#Responsive------------------------ */

@media only screen and (max-width: 479px) {
    .bu-size{
        max-width: 360px !important;
        height: 334px !important;
    }
    .bu-fuse{
        position: absolute;
        margin: 45px 0 0 230px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-line{
        position: absolute;
        margin: 38px 0 0 90px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-akita{
        position: absolute;
        margin: 135px 0 0 25px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 145px 0 0 275px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 235px 0 0 230px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
}

@media only screen and (min-width: 480px) and (max-width: 494px) {
    .bu-size{
        width: 360px !important;
        height: 334px !important;
    }
    .bu-fuse{
        position: absolute;
        margin: 45px 0 0 255px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-line{
        position: absolute;
        margin: 38px 0 0 110px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-akita{
        position: absolute;
        margin: 135px 0 0 45px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 145px 0 0 285px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 235px 0 0 240px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 495px) and (max-width: 549px) {
    .bu-size{
        width: 450px !important;
        height: 418px !important;
    }
    .bu-fuse{
        position: absolute;
        margin: 55px 0 0 270px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-line{
        position: absolute;
        margin: 48px 0 0 125px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
    .bu-akita{
        position: absolute;
        margin: 140px 0 0 60px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 150px 0 0 330px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 245px 0 0 325px;
        width: 70px;
        height: 65px;
        cursor: pointer;
    }
}

/* Extra small devices (phones, 991px and down) */
@media only screen and (min-width: 550px) and (max-width: 991px){
    .bu-size{
        width: 510px !important;
        height: 474px !important;
    }
    .bu-fuse{
        position: absolute;
        margin: 60px 0 0 300px;
        width: 70px;
        cursor: pointer;
    }

    .bu-line{
        position: absolute;
        margin: 55px 0 0 140px;
        width: 70px;
        cursor: pointer;
    }
    .bu-akita{
        position: absolute;
        margin: 160px 0 0 65px;
        width: 70px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 170px 0 0 380px;
        width: 70px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 280px 0 0 380px;
        width: 70px;
        cursor: pointer;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .bu-size{
        width: 661px !important;
        height: 614px !important;
    }
    .bu-fuse{
        position: absolute;
        margin: 75px 0 0 380px;
        width: 110px;
        height: 102px;
        cursor: pointer;
    }

    .bu-line{
        position: absolute;
        margin: 60px 0 0 185px;
        width: 110px;
        height: 102px;
        cursor: pointer;
    }

    .bu-akita{
        position: absolute;
        margin: 200px 0 0 80px;
        width: 105px;
        height: 95px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 215px 0 0 495px;
        width: 100px;
        height: 92px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 360px 0 0 480px;
        width: 110px;
        height: 102px;
        cursor: pointer;
    }
} 
</style>