<template>
    <div id="PortfolioLine">
      <div class="row ps-xxl-4 ps-xl-4">
        <div class="col-12 mb-3 d-block d-xl-none d-xxl-none"><img class="item-center" src="./../../assets/mobile/Line-logo.png" alt="Line-logo.png"></div>
        <div v-for="data in responseData" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4 mb-4 hvr-hang">
            <NuxtLink @click="scrollToTop" :to="localePath({ path: '/Portfolio/Detail/'+data.id+'/'+data.url+''})">
                <div class="row ps-lg-2 pe-lg-2 ps-0 pe-0 animate__animated animate__bounceIn">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img v-if="data.illustration != null" class="mb-2 img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText"></div>
                    <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <font class="text-w-700 text-limit-1" style="font-size:24px;color:#373737">{{data.title}}</font>
                        <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                        <p class="text-s-14 text-limit-2" style="color:#373737">{{data.description}}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PortfolioLine',
    data () {
        return {
            lang: this.$i18n.locale || 'th-TH',
            responseData:[]
        }
    },
    methods : {
        getData(){
            axios.get(process.env.API_URL+'Portfolios?bu_category.name=Line&_locale='+ this.lang)
            .then(response => (this.responseData = response.data))
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    mounted () {
        this.getData();
    }
}
</script>

<style scoped>
.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}
</style>