<template>
    <div id="InterestingArticles" v-if="responseData.length != 0">
        <div class="p-5" style="padding-top: 40px !important;padding-bottom: 40px !important;background: linear-gradient(110.74deg, #52B8E2 0%, #3D90DD 75.34%);">
          <div class="row">
            <div class="d-none d-lg-block d-xl-block">
            <div class="text-center">
              <div style="font-size:30px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</div>
            </div>
            <carousel v-bind="options" :perPage="3">
              <slide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})" style="color:unset !important">
                    <div class="card" style="border-radius: 10px">
                      <img v-if="data.illustration != null" class="card-img-top img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy">
                      <div itemscope class="card-body">
                        <div itemprop="name" class="card-title text-limit-2" style="font-weight: bold;font-size: 20px;">{{data.title}}</div>
                        <p itemprop="desc" style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-3">{{data.description}}</p>
                        <NuxtLink class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span class="m-auto">Read More</span></NuxtLink>
                      </div>
                    </div>
                </NuxtLink>
              </slide>
            </carousel>
            </div>
            <div class="d-block d-lg-none d-xl-none">
              <div class="text-center">
                <div style="font-size:26px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</div>
              </div>
              <carousel v-bind="options" :perPage="1">
                <slide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                  <NuxtLink @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})" style="color:unset !important">
                      <div class="card" style="border-radius: 10px">
                        <img v-if="data.illustration != null" class="card-img-top img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy">
                        <div itemscope class="card-body">
                          <div itemprop="name" class="card-title text-limit-2" style="font-weight: bold;font-size: 20px;">{{data.title}}</div>
                          <p itemprop="desc" style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-3">{{data.description}}</p>
                          <NuxtLink class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.url+''})"><span class="m-auto">Read More</span></NuxtLink>
                        </div>
                      </div>
                  </NuxtLink>
                </slide>
              </carousel>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'InterestingArticles',
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        //lang: this.$i18n.locale || 'th-TH',
        lang: 'th-TH',
        options: {
          loop: true,
          //perPage: 3,
          paginationEnabled: true,
          autoplay:true
        }
      }
    },
    //this.$route.params.id
    mounted () {

      var blogType

      if(this.type == 'Fuse' || this.type == 'Kaikong'){
        blogType = 9
      }else if(this.type == 'Akita' || this.type == 'Shipmunk'){
        blogType = 11
      }else if(this.type == 'Line'){
        blogType = 12
      }else if(this.type == 'Oc2Plus'){
        blogType = 14
      }else if(this.type == 'Beary'){
        blogType = 13
      }
      
        if(this.type != 'All'){
            this.url = process.env.API_URL+'blogs?_sort=created_at:DESC&_limit=9&blog_category.id='+blogType
        }
        else
        {
            this.url = process.env.API_URL+'blogs?_sort=created_at:DESC&_limit=9'
        }
        axios.get(this.url + '&_locale='+ this.lang)
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
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .card{
      height: 400px !important;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card{
      height: 400px !important;
    }
}
</style>