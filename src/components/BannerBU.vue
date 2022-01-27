<template>
    <div id="BannerBU">
        <div class="row banner-hero">
            <div class="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="d-none d-lg-block">
                    <table class="align-middle" style="width: 100%;">
                        <td style="height: 690px !important;">
                            <div v-if="activeBuFuse">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Fuse.png" alt="logo-fuse.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:550px">FUSE ADVERTISING</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:430px">{{ $t("banner.fuse") }}</p>
                            </div>
                            <div v-else-if="activeBuLine">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-line.png" alt="logo-Line.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">LINE AGENCY <br>BY SELLSUKI</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:430px">{{ $t("banner.line") }}</p>
                            </div>
                            <div v-else-if="activeBuAkita">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Akita.png" alt="logo-Akita.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">AKITA <br>FULFILLMENT</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:430px">{{ $t("banner.akita") }}</p>
                            </div>
                            <div v-else-if="activeBuBeary">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Beary.png" alt="logo-Beary.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">BEARY TECH</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:430px">{{ $t("banner.beary") }}</p>
                            </div>
                            <div v-else-if="activeBuKaikong">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Kaikong.png" alt="logo-Kaikong.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">KAIKONG</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:430px">{{ $t("banner.kaikong") }}</p>
                            </div>
                            <div v-else>
                                <h1 class="font-wght mt-5 text-s-banner" style="color:#50151C;width:600px">E-COMMERCE <br>SOLUTION</h1>
                                <p class="text-s-16" style="color:#50151C;width:420px">Sellsuki ผู้ช่วยธุรกิจออนไลน์ที่ครบเครื่องมากที่สุด ช่วยมองหาทางออกที่ใช่ให้ธุรกิจคุณ</p>
                            </div>
                        </td>
                    </table>
                </div>
                <div class="d-block d-lg-none">
                    <div v-if="activeBuFuse" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Fuse.png" alt="logo-fuse.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">FUSE ADVERTISING</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.fuse") }}</p>
                        <router-link @click="scrollToTop" to="/Solutions/Fuse" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></router-link>
                    </div>
                    <div v-else-if="activeBuLine" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-line.png" alt="logo-line.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">LINE AGENCY BY SELLSUKI</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.Line") }}</p>
                        <router-link @click="scrollToTop" to="/Solutions/Line" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></router-link>
                    </div>
                    <div v-else-if="activeBuAkita" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Akita.png" alt="logo-akita.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">AKITA FULFILLMENT</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.akita") }}</p>
                        <router-link @click="scrollToTop" to="/Solutions/Akita" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></router-link>
                    </div>
                    <div v-else-if="activeBuBeary" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Beary.png" alt="logo-beary.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">BEARY TECH</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.beary") }}</p>
                        <router-link @click="scrollToTop" to="/Solutions/Beary" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></router-link>
                    </div>
                    <div v-else-if="activeBuKaikong" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Kaikong.png" alt="logo-kaikong.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">KAIKONG</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">{{ $t("banner.kaikong") }}</p>
                        <router-link @click="scrollToTop" to="/Solutions/Kaikong" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Click Now</span></router-link>
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
                        <router-link @click="scrollToTop" to="/Solutions/Fuse"><img @mouseover="activeBuFuse = true,showHover = false" @mouseleave="activeBuFuse = false" class="bu-fuse hvr-grow" src="./../assets/Banner/Fuse.png" alt="Fuse.png"></router-link>
                        <router-link @click="scrollToTop" to="/Solutions/Line"><img @mouseover="activeBuLine = true,showHover = false" @mouseleave="activeBuLine = false" class="bu-line hvr-grow" :class="{'auto-pulse':showHover}" src="./../assets/Banner/Line.png" alt="Fuse.png"></router-link>
                        <router-link @click="scrollToTop" to="/Solutions/Akita"><img @mouseover="activeBuAkita = true,showHover = false" @mouseleave="activeBuAkita = false" class="bu-akita hvr-grow" src="./../assets/Banner/AKT.png" alt="Akita.png"></router-link>
                        <router-link @click="scrollToTop" to="/Solutions/Beary"><img @mouseover="activeBuBeary = true,showHover = false" @mouseleave="activeBuBeary = false" class="bu-beary hvr-grow" src="./../assets/Banner/Bearyweb.png" alt="Beary.png"></router-link>
                        <router-link @click="scrollToTop" to="/Solutions/Kaikong"><img @mouseover="activeBuKaikong = true,showHover = false" @mouseleave="activeBuKaikong = false" class="bu-kaikong hvr-grow" src="./../assets/Banner/Kaikong.png" alt="Kaikong.png"></router-link>
                        <img class="bu-size" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp">
                    </div>
                </div>
                <div class="d-block d-lg-none" style="margin-top: -30px;">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-sm-11 col-10">
                            <a><img @click="showHover = false,activeBuFuse = true ,activeBuLine = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-fuse hvr-grow" src="./../assets/Banner/Fuse.png" alt="Fuse.png"></a>
                            <a><img @click="showHover = false,activeBuLine = true ,activeBuFuse = false, activeBuAkita = false, activeBuBeary = false, activeBuKaikong = false" class="bu-line" :class="{'auto-pulse':showHover}" src="./../assets/Banner/Line.png" alt="Line.png"></a>
                            <a><img @click="showHover = false,activeBuAkita = true ,activeBuFuse = false, activeBuLine = false, activeBuBeary = false, activeBuKaikong = false" class="bu-akita" src="./../assets/Banner/AKT.png" alt="Akita.png"></a>
                            <a><img @click="showHover = false,activeBuBeary = true ,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuKaikong = false" class="bu-beary" src="./../assets/Banner/Bearyweb.png" alt="Beary.png"></a>
                            <a><img @click="showHover = false,activeBuKaikong = true ,activeBuFuse = false, activeBuLine = false, activeBuAkita = false, activeBuBeary = false" class="bu-kaikong" src="./../assets/Banner/Kaikong.png" alt="Kaikong.png"></a>
                            <img class="item-center bu-size" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/SSK_Main_fa38f3ed9d.webp">
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

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 549px) {
    .bu-size{
        max-width: 450px
    }
    .bu-fuse{
        position: absolute;
        margin: 55px 0 0 270px;
        width: 70px;
        cursor: pointer;
    }
    .bu-line{
        position: absolute;
        margin: 48px 0 0 125px;
        width: 70px;
        cursor: pointer;
    }
    .bu-akita{
        position: absolute;
        margin: 140px 0 0 60px;
        width: 70px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 150px 0 0 330px;
        width: 70px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 245px 0 0 325px;
        width: 70px;
        cursor: pointer;
    }
}

/* Extra small devices (phones, 991px and down) */
@media only screen and (min-width: 550px) and (max-width: 991px){
    .bu-size{
        max-width: 510px
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
        max-width: 661px
    }
    .bu-fuse{
        position: absolute;
        margin: 75px 0 0 380px;
        width: 110px;
        cursor: pointer;
    }

    .bu-line{
        position: absolute;
        margin: 60px 0 0 185px;
        width: 110px;
        cursor: pointer;
    }

    .bu-akita{
        position: absolute;
        margin: 200px 0 0 80px;
        width: 105px;
        cursor: pointer;
    }

    .bu-beary{
        position: absolute;
        margin: 215px 0 0 495px;
        width: 100px;
        cursor: pointer;
    }

    .bu-kaikong{
        position: absolute;
        margin: 360px 0 0 480px;
        width: 110px;
        cursor: pointer;
    }
} 
</style>