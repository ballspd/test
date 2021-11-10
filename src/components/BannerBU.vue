<template>
    <div id="BannerBU">
        <div class="row banner-hero">
            <div class="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="d-none d-lg-block">
                    <table class="align-middle" style="width: 100%;">
                        <td style="height: 690px !important;">
                            <div v-if="activeBuFuse">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Fuse.png" alt="logo-fuse.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:550px">FUSE <br>DIGITAL ADVERTISING</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:400px">บริการคลังสินค้าครบวงจรที่ช่วยดูแลสินค้าของคุณในทุก ๆ ขั้นตอนตั้งกระบวนการจัดเก็บ แพ็ก หรือขนส่งสินค้าถึงมือผู้รับ อย่างปลอดภัย ช่วยเพิ่มเวลาในการทำงานของคุณเพื่อไปวาง แผนในการขยายธุรกิจ</p>
                            </div>
                            <div v-else-if="activeBuLine">
                                <img class="mt-5 animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-line.png" alt="logo-Akita.png">
                                <h1 class="font-wght mt-3 animate__animated animate__fadeInLeft text-s-banner" style="color:#50151C;line-height: 1.4;width:500px">LINE <br>FULFILLMENT</h1>
                                <p class="text-s-16 mt-3 animate__animated animate__fadeInRight" style="color:#50151C;width:400px">บริการคลังสินค้าครบวงจรที่ช่วยดูแลสินค้าของคุณในทุก ๆ ขั้นตอนตั้งกระบวนการจัดเก็บ แพ็ก หรือขนส่งสินค้าถึงมือผู้รับ อย่างปลอดภัย ช่วยเพิ่มเวลาในการทำงานของคุณเพื่อไปวาง แผนในการขยายธุรกิจ</p>
                            </div>
                            <div v-else><h1 class="font-wght mt-5 text-s-banner" style="color:#50151C;width:600px">E-COMMERCE <br>SOLUTION</h1></div>
                        </td>
                    </table>
                </div>
                <div class="d-block d-lg-none">
                    <div v-if="activeBuFuse" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Fuse.png" alt="logo-fuse.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">FUSE DIGITAL ADVERTISING</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">บริการคลังสินค้าครบวงจรที่ช่วยดูแลสินค้าของคุณในทุก ๆ ขั้นตอนตั้งกระบวนการจัดเก็บ แพ็ก หรือขนส่งสินค้าถึงมือผู้รับ อย่างปลอดภัย ช่วยเพิ่มเวลาในการทำงานของคุณเพื่อไปวาง แผนในการขยายธุรกิจ</p>
                    </div>
                    <div v-else-if="activeBuLine" class="text-center ps-5 pe-5">
                        <img class="animate__animated animate__flipInX animate__delay-1s" src="./../assets/logo/logo-Beary.png" alt="logo-Akita.png" style="margin-top:120px">
                        <h1 class="font-wght mt-3 text-center animate__animated animate__fadeInDown" style="font-size:36px;color:#50151C;line-height: 1.2;">LINE FULFILLMENT</h1>
                        <p class="text-s-16 mt-3 animate__animated animate__fadeInUp" style="color:#50151C;">บริการคลังสินค้าครบวงจรที่ช่วยดูแลสินค้าของคุณในทุก ๆ ขั้นตอนตั้งกระบวนการจัดเก็บ แพ็ก หรือขนส่งสินค้าถึงมือผู้รับ อย่างปลอดภัย ช่วยเพิ่มเวลาในการทำงานของคุณเพื่อไปวาง แผนในการขยายธุรกิจ</p>
                    </div>
                    <div v-else class="text-center"><h1 class="font-wght" style="font-size:36px;color:#50151C;margin-top:120px">E-COMMERCE <br>SOLUTION</h1></div>
                </div>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="row d-none d-lg-block" style="margin-top: 80px;">
                    <div class="col-12">
                        <img @mouseover="activeBuFuse = true" @mouseleave="activeBuFuse = false" class="bu-fuse hvr-pulse" src="./../assets/Banner/Fuse.png" alt="Fuse.png">
                        <img @mouseover="activeBuLine = true" @mouseleave="activeBuLine = false" class="bu-line hvr-pulse" src="./../assets/Banner/Line.png" alt="Fuse.png">
                        <img src="./../assets/Main.png" style="max-width: 661px">
                    </div>
                </div>
                <div class="d-block d-lg-none">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-sm-11 col-10">
                            <img @click="activeBuFuse = true ,activeBuLine = false" class="bu-fuse" src="./../assets/Banner/Fuse.png" alt="Fuse.png">
                            <img @click="activeBuLine = true ,activeBuFuse = false" class="bu-line" src="./../assets/Banner/Line.png" alt="Fuse.png">
                            <img class="item-center" src="./../assets/Main.png" style="max-width: 500px">
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
    activeBuFuse: false,
    activeBuLine: false
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

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 991px and down) */
@media only screen and (max-width: 991px) {
    .bu-fuse{
        position: absolute;
        margin: 55px 0 0 300px;
        width: 70px;
        cursor: pointer;
    }

    .bu-line{
        position: absolute;
        margin: 55px 0 0 140px;
        width: 70px;
        cursor: pointer;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .bu-fuse{
        position: absolute;
        margin: 70px 0 0 380px;
        width: 100px;
        cursor: pointer;
    }

    .bu-line{
        position: absolute;
        margin: 70px 0 0 185px;
        width: 100px;
        cursor: pointer;
    }
} 
</style>