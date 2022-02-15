<template>
    <div id="InterestingArticles">
        <div class="p-5" style="padding-top: 40px !important;padding-bottom: 40px !important;background: linear-gradient(110.74deg, #52B8E2 0%, #3D90DD 75.34%);">
          <div class="row">
            <div class="d-none d-lg-block d-xl-block">
            <div class="text-center">
              <font style="font-size:30px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</font>
            </div>
                <Splide data-splide='{"type":"loop","autoplay": true,"interval": 2000}' :options="{ perPage: 3,perMove: 3,pagination:true}">
                      <SplideSlide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                        <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'/'+data.url+''}" style="color:unset !important">
                        <div class="card" style="border-radius: 10px">
                          <img v-if="data.illustration != null" class="card-img-top img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                          <div class="card-body">
                            <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                            <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                            <router-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'/'+data.url+''}"><span class="m-auto">Read More</span></router-link>
                          </div>
                        </div>
                        </router-link>
                      </SplideSlide>
                </Splide>
            </div>
            <div class="d-block d-lg-none d-xl-none">
              <div class="text-center">
                <font style="font-size:26px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</font>
              </div>
              <Splide :options="{ perPage: 1,perMove: 1,pagination:true}">
                      <SplideSlide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                        <router-link @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'/'+data.url+''}" style="color:unset !important">
                        <div class="card" style="border-radius: 10px">
                          <img v-if="data.illustration != null" class="card-img-top img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText">
                          <div class="card-body">
                            <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                            <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                            <router-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'/'+data.url+''}"><span class="m-auto">Read More</span></router-link>
                          </div>
                        </div>
                        </router-link>
                      </SplideSlide>
                </Splide>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name: 'InterestingArticles',
    components:{
        Splide,
        SplideSlide
    },
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: localStorage.getItem('lang') || 'th-TH'
      }
    },
    //this.$route.params.id
    mounted () {

      var blogType

      if(this.type == 'Fuse' || this.type == 'Kaikong'){
        blogType = 2
      }else if(this.type == 'Akita' || this.type == 'Shipmunk'){
        blogType = 4
      }else if(this.type == 'Line'){
        blogType = 5
      }else if(this.type == 'Oc2Plus'){
        blogType = 7
      }else if(this.type == 'Beary'){
        blogType = 6
      }
      
        if(this.type != 'All'){
            this.url = 'blogs?_sort=created_at:DESC&_limit=9&blog_category.id='+blogType
        }
        else
        {
            this.url = 'blogs?_sort=created_at:DESC&_limit=9'
        }
        this.axios.get(this.url + '&_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
    },
    methods:{
      scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style scoped>
.position-btn{
    margin-left: auto;
    margin-right: 10px;
    display: flex;
}

.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.card-img, .card-img-top{
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
</style>