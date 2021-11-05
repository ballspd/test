<template>
<div id="BlogsDetail">
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150 p-xl-0 mb-xl-3 p-4 mb-0" style="color:#50151C;">Home > Blogs > <font class="text-s-16 text-w-700" style="color:#50151C">{{responseData.title}}</font></p>
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
                                <p class="text-s-16" style="color:#807F7F !important">21 July 2021</p>
                            </div>
                            <div class="col-6 col-md-5 col-xl-3" style="border-right: 2px solid #E5E5E5;">
                                <span class="me-4">Share with :</span> 
                                <img width="45" src="./../../assets/icon/entypo-social_facebook-with-circle.png"> 
                                <img width="45" src="./../../assets/icon/entypo-social_twitter-with-circle.png">
                            </div>
                            <div class="col-6 col-md-7 col-xl-9 p-2">
                                <i class="bi bi-eye ms-lg-5 ms-3"></i>
                                <span class="text-s-16 ms-4">{{responseData.view}}</span>
                            </div>
                            <div class="col-12 mt-5 mb-5">
                                <img class="img-cover" :src="responseData.banner_1.url" :alt="responseData.banner_1.name">
                            </div>
                            <div class="col-12">
                                <p v-html="markdownToHtml(responseData.content_1)"></p>
                            </div>
                            <div class="col-12 mt-3 mb-5">
                                <img class="img-cover" :src="responseData.banner_2.url" :alt="responseData.banner_2.name">
                            </div>
                            <div class="col-12">
                                <p v-html="markdownToHtml(responseData.content_2)"></p>
                                <hr class="mt-5" style="border: 1px solid #E5E5E5;">
                            </div>                  
                        </div>
                    </div>
                </div>
                <RelatedPosts :type="'Blogs'" :CategoryName="this.$route.query.type" :Id="this.$route.params.id"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RelatedPosts from '@/components/RelatedPosts'
import marked from 'marked';

export default {
    name: 'BlogsDetail',
    components:{
        RelatedPosts
    },
    data() {
      return {
        responseData:[],
        lang: localStorage.getItem('lang') || 'en',
      }
    },
    methods: {
      markdownToHtml(data){
            if(data != undefined){
                return marked(data);
            }else{
                return '';
            } 
      }
    },
    //this.$route.params.id
    created () {
        this.axios.get('Blogs/' + this.$route.params.id+'&_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
    },
    updated () {
        this.axios.get('Blogs/' + this.$route.params.id+'&_locale='+ this.lang)
        .then(response => (this.responseData = response.data))
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