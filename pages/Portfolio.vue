<template>
<div id="Portfolio">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;">
                            <router-link @click="scrollToTop" to="/">{{ $t("page.Home") }}</router-link> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-16 text-w-700" style="color:#50151C"><router-link @click="scrollToTop" to="/Portfolio"> {{ $t("page.PORTFOLIO.Portfolio") }}</router-link></font>
                        </p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <h1 class="font-wght" style="font-size:64px;color:#50151C">{{ $t("page.PORTFOLIO.PORTFOLIO") }}</h1>
                                <p class="text-s-16 text-start" style="color:#50151C">{{ $t("page.PORTFOLIO.mata") }}</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 text-start" style="color:#50151C;margin-top:95px !important">
                            <router-link @click="scrollToTop" to="/" style="color:#50151C">{{ $t("page.Home") }}</router-link> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-16 text-w-700"><router-link @click="scrollToTop" to="/Portfolio" style="color:#50151C"> {{ $t("page.PORTFOLIO.Portfolio") }}</router-link></font>
                        </p>
                        <h1 class="font-wght mt-3" style="font-size:36px;color:#50151C">{{ $t("page.PORTFOLIO.PORTFOLIO") }}</h1>
                        <p class="text-s-16" style="color:#50151C">{{ $t("page.PORTFOLIO.mata") }}</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Portfolio_01_1_939e49f0a2.webp" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Portfolio_01_1_939e49f0a2.webp">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="d-block d-xl-none d-xxl-none">
                    <div class="row p-4" style="padding-top: 35px !important;">
                        <div class="col-12">
                            <select v-model="type" class="form-select" aria-label="Default select example">
                                <option selected value="Akita">Akita Fulfillment</option>
                                <option value="Fuse">Fuse</option>
                                <option value="Line">Line</option>
                                <option value="Beary">Beary tech</option>
                                <option value="Kaikong">Kaikong</option>
                                <!-- <option value="Shipmunk">Shipmunk</option>
                                <option value="Oc2Plus">Oc2Plus</option> -->
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <component :is="'Portfolio'+type"/>
                    </div>
                </div>
                <div class="d-none d-xl-block d-xxl-block">
                    <div style="padding: 50px 30px 50px 30px;">
                        <div class="row">
                            <div class="col-3 text-center" style="border-right: 1px solid #E5E5E5;">
                                <div class="p-3">
                                    <a @click="type = 'Akita',Akita = false,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Akita}">
                                            <img class="item-center" src="./../assets/logo/logo-Akita.webp" alt="">
                                            <font class="text-s-16" style="color:#373737">Akita Fulfillment</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <div class="p-3">
                                    <a @click="type = 'Fuse',Akita = true,Fuse = false,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Fuse}">
                                            <img class="item-center" src="./../assets/logo/logo-Fuse.webp" alt="">
                                            <font class="text-s-16" style="color:##413E93">Fuse Advertising</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <div class="p-3">
                                    <a @click="type = 'Line',Akita = true,Fuse = true,Line = false,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Line}">
                                            <img class="item-center" src="./../assets/logo/logo-line.webp" alt="">
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <div class="p-3">
                                    <a @click="type = 'Beary',Akita = true,Fuse = true,Line = true,Beary = false,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Beary}">
                                            <img class="item-center" src="./../assets/logo/logo-Beary.webp" alt="">
                                            <font class="text-s-16 color-231F20">Beary Web & Tech Service</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <div class="p-3">
                                    <a @click="type = 'Kaikong',Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = false,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Kaikong}">
                                            <img class="item-center" src="./../assets/logo/logo-Kaikong.webp" alt="">
                                            <font class="text-s-16 color-7E4922">Kaikong Content Marketing</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <!-- <div class="p-3">
                                    <a @click="type = 'Shipmunk',Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = false,Oc2Plus = true" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Shipmunk}">
                                            <img class="item-center" src="./../assets/logo/shipmunk.webp" alt="shipmunk">
                                            <font class="text-s-16" style="color:#0B195E">Shipmunk : Delivery Booking</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                                <div class="p-3">
                                    <a @click="type = 'Oc2Plus',Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = false" style="cursor: pointer;">
                                        <div class="hover-logo" :class="{'filter-gray':Oc2Plus}">
                                            <img class="item-center" src="./../assets/logo/Oc2Plus-01.webp" alt="Oc2Plus">
                                            <font class="text-s-16" style="color:#0F0D0D">Oc2Plus Customer <br>Data Platform</font>
                                        </div>
                                    </a>
                                </div>
                                <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div> -->
                            </div>
                            <div class="col-9">
                                <component :is="'Portfolio'+type"/>
                            </div>
                        </div>
                    </div>
                </div>
                <GetQuote/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GetQuote from '@/components/GetQuote'
import PortfolioAkita from '@/components/Portfolio/Akita'
import PortfolioFuse from '@/components/Portfolio/Fuse'
import PortfolioKaikong from '@/components/Portfolio/Kaikong'
import PortfolioLine from '@/components/Portfolio/Line'
import PortfolioBeary from '@/components/Portfolio/Beary'
import Preloader from '@/components/Preloader'

export default {
    name: 'Portfolio',
    layout:"Layout",
      components: {
        GetQuote,
        PortfolioAkita,
        PortfolioFuse,
        PortfolioKaikong,
        PortfolioLine,
        PortfolioBeary,
        Preloader
    },
    head() {
      return {
          title: "Portfolio"
      };
    },
    data () {
        return {
            isActive: true,
            Akita: false,
            Fuse: true,
            Line: true,
            Beary: true,
            Kaikong: true,
            Shipmunk: true,
            Oc2Plus: true,
            type: 'Akita'
    }
  },
      methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
    .filter-gray{
        filter: grayscale(100%);
        opacity: 0.5;
    }

    a .hover-logo:hover{
        filter: none;
        opacity: 1;
    }
</style>
