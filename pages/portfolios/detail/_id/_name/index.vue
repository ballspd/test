<template>
<div id="PortfolioDetail">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150 p-xl-0 mb-xl-3 p-4 mb-0" style="color:#50151C;">
                        <router-link @click="scrollToTop" to="/"> Home</router-link> <i class="bi bi-chevron-right"></i>
                        <router-link @click="scrollToTop" to="/Portfolio"> Portfolio</router-link> <i class="bi bi-chevron-right"></i> 
                        <font class="text-s-16 text-w-700 ms-1" style="color:#50151C">{{responseData.title}}</font></p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-md-4 mt-0 text-color-this-page">
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                  <div class="col-12 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                       
                        <div class="row mt-5">
                            <div class="col-12"><h1 class="text-s-30 font-wght">{{responseData.title}}</h1><hr style="border: 1px solid #E5E5E5;"></div>
                            <div class="col-12">
                                <p class="text-s-16" style="color:#807F7F !important">{{dateTime(responseData.created_at)}}</p>
                            </div>
                            <div class="col-6 col-md-5 col-xl-3" style="border-right: 2px solid #E5E5E5;">
                                <span class="me-4">Share with : </span> 
                                <ShareNetwork
                                    network="facebook"
                                    :url="urls"
                                    :title="responseData.title"
                                    :description="responseData.description"
                                    quote="Sellsuki Co. Ltd"
                                    hashtags="Sellsuki"
                                >
                                    <img width="45" src="./../../../../../assets/icon/entypo-social_facebook-with-circle.webp">
                                </ShareNetwork>
                                <ShareNetwork
                                    network="twitter"
                                    :url="urls"
                                    :title="responseData.title"
                                    :description="responseData.description"
                                    twitter-user="Sellsuki Co. Ltd">
                                    
                                    <img width="45" src="./../../../../../assets/icon/entypo-social_twitter-with-circle.webp">
                                </ShareNetwork>
                            </div>
                            <div class="col-6 col-md-7 col-xl-9 p-2">
                                <i class="bi bi-eye ms-lg-5 ms-3"></i>
                                <span class="text-s-16 ms-4">{{count}}</span>
                            </div> 
                            <div v-for="(data, index) in responseData.contant" :key="index">
                                <div v-if="index == 0" class="row">
                                    <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                        <img v-if="data.image != null" class="img-cover" :src="data.image.url" :alt="data.image.alternativeText">
                                    </div>
                                    <div v-if="data.text != null" class="col-12">
                                        <p v-html="$md.render(data.text)"></p>
                                    </div>
                                </div>
                            </div> 
                            <div v-if="responseData.income != null && responseData.results != null" class="col-12 mt-4 mb-4">
                                <div class="row justify-content-center">
                                    <div v-if="responseData.income != null" class="col-lg-4 col-10">
                                        <div class="crad text-center card-port d-flex" style="background-color: #E27485">
                                            <div class="m-auto">
                                                <p class="text-w-700 text-s-24 m-0" style="color:#AA4051 !important">รายได้เพิ่มขึ้น</p>
                                                <p class="font-wght text-s-64 text-white">{{responseData.income}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="responseData.results != null" class="col-lg-4 col-10 mt-lg-0 mt-4">
                                        <div class="crad text-center card-port d-flex" style="background-color: #F4BF69">
                                            <div class="m-auto">
                                                <p class="text-w-700 text-s-24 m-0" style="color:#B57D23 !important">เดือนในการเห็นผล</p>
                                                <p class="font-wght text-s-64 text-white">{{responseData.results}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div v-for="(data, index) in responseData.contant" :key="index">
                                <div v-if="index != 0" class="row">
                                    <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                        <img class="img-cover" :src="data.image.url" :alt="data.image.alternativeText">
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                    <div v-if="data.text != null" class="col-12 show-text-color">
                                        <p v-html="$md.render(data.text)"></p>
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                </div>   
                            </div>                -->
                            <div v-for="data in responseData.contant" :key="data.id">
                                <div v-if="data.PositionImage == 'Left'" class="row mt-5">
                                    <div class="col-6">
                                        <div v-if="data.text != null" class="show-text-color">
                                            <div v-html="$md.render(data.text)"></div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div v-if="data.image != null">
                                            <img v-if="data.image != null" class="img-cover" :src="data.image.url" :alt="data.image.alternativeText">
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="data.PositionImage == 'Right'" class="row mt-5">
                                    <div class="col-6">
                                        <div v-if="data.image != null">
                                            <img v-if="data.image != null" class="img-cover" :src="data.image.url" :alt="data.image.alternativeText">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div v-if="data.text != null" class="show-text-color">
                                            <div v-html="$md.render(data.text)"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="row">
                                    <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                        <img v-if="data.image != null" class="img-cover" :src="data.image.url" :alt="data.image.alternativeText">
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                    <div v-if="data.text != null" class="col-12 show-text-color">
                                        <div v-html="$md.render(data.text)"></div>
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="col-12 mt-3 d-none d-lg-block">
                        <iframe width="100%" height="500" :src="responseData.linkVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col-12 d-block d-lg-none" style="margin-top: -70px;">
                        <iframe width="100%" height="320" :src="responseData.linkVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <!-- <div class="padding-card pt-0">
                    <div class="text-center pb-2">
                        <h1 class="text-s-30 font-wght">Reviews</h1>
                    </div>
                    <Review :type="this.$route.query.type_bu"/>
                </div> -->
                <RelatedPosts v-if="bu_category_id != ''" :type="'Portfolio'" :CategoryName="bu_category_id" :Id="$route.params.id"/>
                <RelatedPosts v-if="bu_category_id == ''" :type="'Portfolio'" :CategoryName="responseData.bu_category.id" :Id="$route.params.id"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RelatedPosts from '@/components/RelatedPosts'
import Preloader from '@/components/Preloader'
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'BlogsDetail',
    layout:"Layout",
    components:{
        RelatedPosts,
        Preloader
    },
    head() {
      return this.$headUtil({
        lang: this.$i18n.locale,
        title: this.responseData.title,
        description: this.responseData.description,
        site_name: 'Sellsuki',
        illustration: this.responseData.illustration.url,
        urls: this.urls
      });
    },
    async asyncData({ $axios, route, i18n }) {
      //const response = await $axios.$get('https://login.sellsuki.co.th/blogs/' + route.params.id + '?_locale='+ i18n.locale);
      const response = await $axios.$get(process.env.API_URL+'portfolios/' + route.params.id);
      return { responseData: response , bu_category_id : response.bu_category.id };
    },
    data() {
      return {
        responseData:[],
        //lang: this.$i18n.locale || 'th-TH',
        lang: 'th-TH',
        view: 1,
        count:0,
        blog_category_id:'',
        urls: 'https://www.sellsuki.co.th/portfolios/Detail/'+this.$route.params.id+'/'+this.$route.params.name
      }
    },
    methods: {
        scrollToTop() {
        window.scrollTo(0,0);
        },
      dateTime(value) {
        return moment(value).format('DD MMM YYYY');
      },
      addView(view){
        console.log(view)
        this.count = parseInt(view) + 1
        console.log(this.count)
        axios.put(process.env.API_URL+'portfolios/'+ this.$route.params.id, {view: this.count}, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU5NjA2NjQ0LCJleHAiOjE2NjIxOTg2NDR9.6QWY32k1VEZZzN8uUHbHahaPiby2QPlcn8YQeawdXhE`
            }
        })
        .then()
      }
    },
    //this.$route.params.id
    mounted () {
        //axios.get('https://login.sellsuki.co.th/portfolios/' + this.$route.params.id+'?_locale='+ this.lang)
        axios.get(process.env.API_URL+'portfolios/' + this.$route.params.id)
        .then(response => (this.responseData = response.data,this.addView(response.data.view)))
    }
}
</script>

<style scoped>
.show-text-color a{
    color: #0d6efd !important;
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

.img-cover {
  width: 100% !important;
  height: 400px;
  object-fit: cover;
}

div::v-deep(h1){
    font-size: 24px !important;
}

div::v-deep(h2){
    font-size: 22px !important;
}

div::v-deep(h3){
    font-size: 20px !important;
}

div::v-deep(h4){
    font-size: 18px !important;
}

::v-deep(p){
    font-size: 18px !important;
}

::v-deep(li){
    font-size: 18px !important;
}


/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

</style>
