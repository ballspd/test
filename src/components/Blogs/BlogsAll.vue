<template>
<div id="BlogsAll">
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150" style="color:#50151C;">Home > <font class="text-s-16 font-wght" style="color:#50151C">Blogs</font></p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-4 text-color-this-page">
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mb-1">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"><img class="img-fluid" src="./../../assets/Group323.png" style="width: 510px;height: 330px;"></div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style="padding: 30px 10px 10px 10px;">
                            <p class="text-s-16" style="color:#807F7F">21 July 2021</p>
                            <font class="font-wght" style="font-size:24px;color:#15304E">Lorem ipsum</font>
                            <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                            <p class="text-s-16" style="color:#373737">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                            <button class="btn-transparent mt-3 button"><span>Read More</span></button>
                        </div>
                    </div>
                </div>
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mt-3">
                        <div v-for="data in responseData" :key="data.id" class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="row">
                                <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                    <img class="img-fix-size" :src="data.illustration.url">
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                                    <font class="font-wght" style="font-size:24px;color:#15304E">{{data.title}}</font>
                                    <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                    <p style="color:#373737;font-size:14px">{{data.description}}</p>
                                    <router-link class="btn btn-transparent mt-1 button" @click="scrollToTop" :to="{ path: '/Blogs/Detail/'+data.id+''}"><span>Read More</span></router-link>
                                </div>
                            </div>
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
    name: 'BlogsAll',
    data() {
      return {
        responseData:[]
      }
    },
    //this.$route.params.id
    created () {
        this.axios.get('https://staging-sellsukiadmin.bearyweb.com/Blogs?blog_category=' + this.$route.params.id)
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

.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}

</style>