<template>
<div id="BlogsDetail">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <router-link @click="scrollToTop" to="/Blog">Blog</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C">{{responseData.title}}</font></p>
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
                                <span class="me-4">Share with :</span> 
                                <img width="45" src="./../../assets/icon/entypo-social_facebook-with-circle.png"> 
                                <img width="45" src="./../../assets/icon/entypo-social_twitter-with-circle.png">
                            </div>
                            <div class="col-6 col-md-7 col-xl-9 p-2">
                                <i class="bi bi-eye ms-lg-5 ms-3"></i>
                                <span class="text-s-16 ms-4">{{count}}</span>
                            </div>                 
                        </div>
                        <div v-for="data in responseData.contant" :key="data.id" class="row">
                            <div v-if="data.image != null" class="col-12 mt-5 mb-5">
                                <img v-if="data.image != null" class="img-cover" :src="data.image.url" :alt="data.image.name">
                            </div>
                            <div v-else class="mt-3 mb-3">
                            </div>
                            <div v-if="data.text != null" class="col-12">
                                <div v-html="markdownToHtml(data.text)"></div>
                            </div>
                            <div v-else class="mt-3 mb-3">
                            </div>
                        </div> 
                    </div>
                </div>
                <RelatedPosts :type="'Blogs'" :CategoryName="responseData.blog_category.id" :Id="this.$route.params.id"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RelatedPosts from '@/components/RelatedPosts'
import marked from 'marked';
import Preloader from '@/components/Preloader'
import moment from 'moment'

export default {
    name: 'BlogsDetail',
    components:{
        RelatedPosts,
        Preloader
    },
    data() {
      return {
        responseData:[],
        lang: localStorage.getItem('lang') || 'th-TH',
        view: 1,
        count:0
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
      dateTime(value) {
        return moment(value).format('DD MMM YYYY');
      },
      addView(view){
        //console.log(view)
        this.count = parseInt(view) + 1
        //console.log(this.count)
        this.axios.put('blogs/'+ this.$route.params.id, {view: this.count}, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ2Mjg3OTE5LCJleHAiOjE2NDg4Nzk5MTl9.vNDWq9auv0zy3i4AZba2IUR8zbezstz1Pb67Wr_0a2M`
            }
        })
        .then()
      }
    },
    //this.$route.params.id
    created () {
        this.axios.get('blogs/' + this.$route.params.id+'&_locale='+ this.lang)
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