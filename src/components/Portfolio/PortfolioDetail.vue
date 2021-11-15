<template>
<div id="PortfolioDetail">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150 p-xl-0 mb-xl-3 p-4 mb-0" style="color:#50151C;">Home > Join Us > <font class="text-s-16 text-w-700" style="color:#50151C">{{responseData.title}}</font></p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-md-4 mt-0 text-color-this-page">
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                  <div class="col-12 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                       
                        <div class="row mt-5">
                            <div class="col-12"><h1 class="text-s-30 text-w-700">{{responseData.title}}</h1><hr style="border: 1px solid #E5E5E5;"></div>
                            <div class="col-12">
                                <p class="text-s-16" style="color:#807F7F !important">21 July 2021</p>
                            </div>
                            <div class="col-6 col-md-5 col-xl-3" style="border-right: 2px solid #E5E5E5;">
                                <span class="me-4">Share with :</span> 
                                <img width="45" src="./../../assets/icon/entypo-social_facebook-with-circle.png"> 
                                <img width="45" src="./../../assets/icon/entypo-social_twitter-with-circle.png">
                            </div>
                            <div class="col-6 col-md-7 col-xl-9 p-2">
                                <i class="bi bi-eye ms-lg-5 ms-3"></i>
                                <span class="text-s-16 ms-4">{{count}}</span>
                            </div>
                            <div v-for="(data, index) in responseData.contant" :key="index">
                                <div v-if="index == 0" class="row">
                                    <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                        <img class="img-cover" :src="data.image.url" :alt="data.image.name">
                                    </div>
                                    <div v-if="data.text != null" class="col-12">
                                        <p v-html="markdownToHtml(data.text)"></p>
                                    </div>
                                </div>
                            </div> 
                            <div class="col-12 mt-4 mb-4">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-10">
                                        <div class="crad text-center card-port d-flex" style="background-color: #E27485">
                                            <div class="m-auto">
                                                <p class="text-w-700 text-s-24 m-0" style="color:#AA4051 !important">รายได้เพิ่มขึ้น</p>
                                                <p class="font-wght text-s-64 text-white">{{responseData.income}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-10 mt-lg-0 mt-4">
                                        <div class="crad text-center card-port d-flex" style="background-color: #F4BF69">
                                            <div class="m-auto">
                                                <p class="text-w-700 text-s-24 m-0" style="color:#B57D23 !important">เดือนในการเห็นผล</p>
                                                <p class="font-wght text-s-64 text-white">{{responseData.results}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="(data, index) in responseData.contant" :key="index">
                                <div v-if="index != 0" class="row">
                                    <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                        <img class="img-cover" :src="data.image.url" :alt="data.image.name">
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                    <div v-if="data.text != null" class="col-12">
                                        <p v-html="markdownToHtml(data.text)"></p>
                                    </div>
                                    <div v-else class="mt-3 mb-3">
                                    </div>
                                </div>   
                            </div>               
                        </div>
                    </div>
                </div>
                <!-- <div class="padding-card pt-0">
                    <div class="text-center pb-2">
                        <h1 class="text-s-30 font-wght">Reviews</h1>
                    </div>
                    <Review :type="this.$route.query.type_bu"/>
                </div> -->
                <RelatedPosts :type="'Portfolio'" :CategoryName="this.$route.query.type" :Id="this.$route.params.id"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Review from '@/components/Review'
import RelatedPosts from '@/components/RelatedPosts'
import marked from 'marked';
import Preloader from '@/components/Preloader'

export default {
    name: 'PortfolioDetail',
    components:{
        RelatedPosts,
        Preloader
    //     Review
    },
    data() {
      return {
            lang: localStorage.getItem('lang') || 'en',
            responseData:[],
            view: 1,
            count:''
      }
    },
    methods: {
      markdownToHtml(data){
            if(data != undefined){
                return marked(data);
            }else{
                return '';
            }
      },
      addView(view){
        this.count = this.view + view
        this.axios.put('portfolios/'+ this.$route.params.id, {view: this.count})
        .then()
      }
    },
    //this.$route.params.id
    mounted () {
        this.axios.get('portfolios/' + this.$route.params.id+'&_locale='+ this.lang)
        .then(response => (this.responseData = response.data,this.addView(response.data.view)))
    }
}
</script>

<style scoped>

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