<template>
    <div id="InterestingArticles">
        <div class="p-5" style="padding-top: 40px !important;padding-bottom: 40px !important;background: linear-gradient(110.74deg, #52B8E2 0%, #3D90DD 75.34%);">
          <div class="row">
            <div class="d-none d-lg-block d-xl-block" style="padding-bottom:60px">
            <div class="text-center">
              <font style="font-size:30px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</font>
            </div>
            <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators" style="top: 450px;">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button v-if="responseData.length > 3" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button v-if="responseData.length > 6" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row">
                      <div v-for="(data, index) in responseData.slice(0, 3)" :key="index" class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
                        <div class="card" style="width: 331px;border-radius: 10px">
                          <img class="card-img-top img-fix-size" :src="data.illustration.url">
                          <div class="card-body">
                            <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                            <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                            <router-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span class="m-auto">Read More</span></router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="responseData.length > 3" class="carousel-item" data-bs-interval="10000">
                    <div class="row">
                      <div v-for="(data, index) in responseData.slice(4, 6)" :key="index" class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
                        <div class="card" style="width: 331px;border-radius: 10px">
                          <img class="card-img-top img-fix-size" :src="data.illustration.url">
                          <div class="card-body">
                            <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                            <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                            <router-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span class="m-auto">Read More</span></router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="responseData.length > 6" class="carousel-item" data-bs-interval="10000">
                    <div class="row">
                      <div v-for="(data, index) in responseData.slice(7, 9)" :key="index" class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
                        <div class="card" style="width: 331px;border-radius: 10px">
                          <img class="card-img-top img-fix-size" :src="data.illustration.url">
                          <div class="card-body">
                            <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                            <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                            <router-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span class="m-auto">Read More</span></router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block d-lg-none d-xl-none">
              <div class="text-center">
                <font style="font-size:26px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</font>
              </div>
              <div id="carouselMobile" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div v-for="(data, index) in responseData" :key="index" :class="{'active': index == 0}" class="carousel-item" data-bs-interval="10000">
                      <div class="row">
                        <div class="col-12 d-flex justify-content-center" style="padding-top: 30px !important;">
                          <div class="card" style="width: 331px;border-radius: 10px">
                            <img class="card-img-top" src="./../assets/Rectangle21.png" alt="Card image cap">
                            <div class="card-body">
                              <font class="card-title text-limit-1" style="font-weight: bold;font-size: 24px;">{{data.title}}</font>
                              <p style="margin-bottom: 0rem;" class="card-text text-s-16 text-limit-2">{{data.description}}</p>
                              <router-link class="btn-transparent hvr-back-pulse d-flex mt-2" style="float: right;" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+'' , query: { type: data.blog_category.id }}"><span class="m-auto">Read More</span></router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-indicators mt-3" style="position: relative;">
                    <div v-for="(data, index) in responseData" :key="index">
                      <button type="button" data-bs-target="#carouselMobile" :data-bs-slide-to="index" :class="{'active':index == 0}" :aria-current="{'true':index == 0}" :aria-label="'Slide '+ (index + 1)"></button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'InterestingArticles',
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: localStorage.getItem('lang') || 'en'
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
            this.url = 'blogs?_sort=updated_at:DESC&_limit=9&blog_category.id='+blogType
        }
        else
        {
            this.url = 'blogs?_sort=updated_at:DESC&_limit=9'
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