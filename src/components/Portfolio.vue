<template>
<div id="Portfolio">
    <div class="background-main">
        <div class="container">
            <div class="row" style="height :675px">
                <div class="col-5">
                    <p class="text-s-16" style="color:#50151C;margin-top: 69px;">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Portfolio</font></p>
                    <p class="font-wght" style="font-size:64px;color:#50151C;margin-top: 188px;">Portfolio</p>
                    <p class="text-s-16" style="color:#373737">เรื่องเล่าจากลูกค้าเรา ตัวอย่างผลงาน Review <br>ส่วนหนึ่งจากลูกค้าที่ไว้ใจใช้บริการเรา</p>
                </div>
                <div class="col-7">
                    <img src="./../assets/image60.png" style="margin-top: -40px;">
                </div>
            </div>
            <div class="crad mt-4">
                <div style="padding: 50px 30px 50px 30px;">
                    <div class="row">
                        <div class="col-3 text-center" style="border-right: 1px solid #E5E5E5;">
                            <div class="p-3">
                                <a @click="Akita = false,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Akita}" src="./../assets/logo/image32.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Akita}" style="color:#373737">Akita Fulfillment</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = false,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Fuse}" src="./../assets/logo/fuse.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Fuse}" style="color:##413E93">Fuse Advertising</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = true,Line = false,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Line}" src="./../assets/logo/image68.png" alt="">
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = true,Line = true,Beary = false,Kaikong = true,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Beary}" src="./../assets/logo/image24.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Beary}" style="color:#231F20">Beary Web & Tech Service</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = false,Shipmunk = true,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Kaikong}" src="./../assets/logo/image51.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Kaikong}" style="color:#7E4922">Kaikong Content Marketing</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = false,Oc2Plus = true" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Shipmunk}" src="./../assets/logo/shipmunk.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Shipmunk}" style="color:#0B195E">Shipmunk : Dropshipping</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                            <div class="p-3">
                                <a @click="Akita = true,Fuse = true,Line = true,Beary = true,Kaikong = true,Shipmunk = true,Oc2Plus = false" style="cursor: pointer;">
                                    <img class="item-center" :class="{'filter-gray':Oc2Plus}" src="./../assets/logo/Oc2Plus-01.png" alt="">
                                    <font class="text-s-16" :class="{'filter-gray':Oc2Plus}" style="color:#0F0D0D">Oc2Plus Customer <br>Data Platform</font>
                                </a>
                            </div>
                            <div class="item-center" style="border: 1px solid #E5E5E5;transform: rotate(180deg);width: 221px;height: 0px;"></div>
                        </div>
                        <div class="col-9">
                            <div class="row" style="padding-left: 25px;">
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
                                <div class="col-4">
                                    <img class="mb-2" src="./../assets/Group364.png" alt="">
                                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                    <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                                </div>
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

export default {
    name: 'Portfolio',
      components: {
        GetQuote
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
    }
  }
}
</script>

<style scoped>
    .filter-gray{
        filter: grayscale(100%);
        opacity: 0.5;
    }
</style>