<template>
    <div id="Review">
        <div v-if="responseData.length != 0" class="row mt-4 mb-2 p-3">
            <div class="col-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(data, index) in responseData" :key="index" class="carousel-item" :class="{'active': index == 0}">
                        <router-link @click="scrollToTop" :to="{ path: '/Portfolio/Detail/'+data.id+'' , query: { type: data.bu_category.name } }">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><img class="d-block image-review" :src="data.illustration.url" :alt="data.illustration.name"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-xxl-5 p-lg-5 p-sm-3 p-3">
                                <div class="ps-sm-2 pe-sm-2 ps-2 pe-0">
                                <p style="color:#FF773B">-- TESTIMONIALS</p>
                                    <font class="text-review text-limit-1">{{data.title}}</font>
                                    <p class="mt-3 text-limit-7">{{data.description}}</p>
                                    <p class="mt-xxl-5 mt-4" style="color:#FF773B">{{data.name}}<br>{{data.position}}</p>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="d-none d-xl-block d-xxl-block">
                    <button class="carousel-control-prev-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style="padding: 12px !important;background-color: #FF773B !important;width: 55px;;buttom:none">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style="padding: 12px !important;background-color: #FF773B !important;width: 55px;buttom:none">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="d-block d-xl-none d-xxl-none text-center mt-4 show-hover">
                    <a class="me-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="" aria-hidden="true"><i class="me-1 bi bi-chevron-left" style="font-size: 26px;"></i></span>
                    </a>
                    <a class="ms-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="" aria-hidden="true"><i class="ms-1 bi bi-chevron-right" style="font-size: 26px;"></i></span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review',
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: localStorage.getItem('lang') || 'TH-th'
      }
    },
    //this.$route.params.id
    mounted () {
        if(this.type != 'All'){
            this.url = 'portfolios?bu_category.name='+this.type
        }
        else
        {
            this.url = 'portfolios'
        }
        this.axios.get(this.url + '?_locale='+ this.lang)
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
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .image-review{
    height:350px;
    width:500px;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
  .text-review{
      font-size:32px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 0px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .image-review{
        height:350px;
        width:500px;
        object-fit: cover;
        border-radius: 0px 25px 25px 0px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .image-review{
    height:350px;
    width:100%;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .image-review{
    height:450px;
    width:100%;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
    .text-review{
      font-size:45px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 1.5;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .image-review{
    height:500px;
    width:450px;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
    .text-review{
      font-size:45px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 1.5;
  }
}

a{
    color: #50151C;
    padding: 5px 10px;
}
.show-hover a:hover{
    background: #FF773B;
    border-radius: 50%;
}

</style>