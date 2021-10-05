<template>
    <div id="PortfolioList">
      <div v-if="type === 'Akita'" class="row ps-xxl-4 ps-xl-4">
        <div class="col-12 mb-3 d-block d-xl-none d-xxl-none"><img class="item-center" src="./../../assets/mobile/Akita.png" alt=""></div>
        <!-- <div v-for="data in info" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-3 pe-3">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" width="220" height="240" :src="'http://localhost:1337'+data.img.url" :alt="data.img.name"></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">{{data.title}}</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">{{data.detail}}</p>
                </div>
            </div>
        </div> -->
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4">
            <div class="row ps-lg-3 pe-lg-3 ps-0 pe-0">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img class="mb-2 img-fluid" src="./../../assets/Group364.png" alt=""></div>
                <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <font class="text-w-700" style="font-size:24px;color:#373737">Lorem ipsum</font>
                    <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                    <p class="text-s-14" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'PortfolioList',
    props: ['type'],
    data () {
        return {
            isActive: true,
            info:null
        }
    },
    // mounted () {
    //     this.axios.get('http://localhost:1337/Portfolios')
    //     .then(response => (this.info = response.data))
    // }
  
}
</script>

<style scoped>

</style>