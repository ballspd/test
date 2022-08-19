<template>
<div id="BlogsAll">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <router-link @click="scrollToTop" to="/blog">Blog</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">{{this.$route.params.name}}</font></p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-4 text-color-this-page">
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div v-for="(data, index) in responseData" :key="index">
                        <router-link @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                        <div v-if="index == 0" class="row mb-1">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"><img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" style="height: 330px;"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style="padding: 30px 10px 10px 10px;">
                                <p class="text-s-16" style="color:#807F7F">{{dateTime(responseData.created_at)}}</p>
                                <h1 class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</h1>
                                <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                                <p class="text-s-16" style="color:#373737">{{data.description}}</p>
                                <router-link class="btn btn-transparent mt-3 hvr-back-pulse" @click="scrollToTop" :to="{ path: '/blogs/detail/'+data.id+'/'+data.url+''}"><span>Read More</span></router-link>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mt-3">
                        <div v-for="(data, index) in responseData" :key="index" :class="{'hide-col':index == 0}" class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 crad-height">
                            <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})">
                                <div class="row">
                                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                        <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                                    </div>
                                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 p-2">
                                        <font class="text-w-700 text-limit-3 color-15304E text-s-18">{{data.title}}</font>
                                        <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                        <p class="text-limit-3" style="color:#373737;font-size:14px">{{data.description}}</p>
                                        <div class="text-end">
                                        <NuxtLink class="btn btn-transparent mt-1 hvr-back-pulse" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span>Read More</span></NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
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
    name: 'BlogsAll',
    layout:"Layout",
    components: {
        Preloader
    },
    head() {
      return {
          title: this.$route.params.name
      };
    },
    data() {
      return {
        responseData:[],
        //lang: this.$i18n.locale || 'th-TH',
        lang: 'th-TH',
        paramsId: this.$route.params.id
      }
    },
    //this.$route.params.id
    mounted () {
        axios.get(process.env.API_URL+'Blogs?blog_category=' + this.paramsId + '&_sort=created_at:DESC&_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
    },
    methods:{
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active{
    opacity: 0.8 !important;
}

.card {
  background: #FBFBFB;
  border: 1px solid #E5E5E5 !important;
  box-sizing: border-box;
  border-radius: 10px;
}

.card-port{
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    height: 230px;
}

p {
    color: #373737;
    font-size: 16px;
}

.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.hide-col{
    display: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
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
}
</style>
