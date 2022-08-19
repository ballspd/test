<template>
<div id="error">               
    <div class="background-main page-top">
        <div class="container">
            <div class="crad text-color-this-page p-5">
                <div v-if="error.statusCode === 404" class="row justify-content-center pt-2 pb-2 pt-lg-5 pb-lg-5">
                    <div class="col-12 col-lg-4 order-2 order-lg-1 text-center pt-3">
                        <h1 class="text-s-1 text-w-700 color-FF773B mb-0">404</h1>
                        <h2 class="text-s-2 text-w-700 color-15304E mb-1">ERROR</h2>
                        <p class="text-s-3 text-w-500 color-15304E">Page not found</p>
                        <div class="p-5">
                            <a href="/" class="btn btn-orange text-s-16 text-w-400 hvr-back-pulse"><span>กลับสู่หน้าหลัก</span></a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5 order-1 order-lg-2 text-center">
                        <img class="img-fluid" width="370" height="370" src="../assets/SSK-Crying-01-1.webp" alt="Header-sellsuki">
                    </div>
                </div>
                <div v-else class="row justify-content-center pt-2 pb-2 pt-lg-5 pb-lg-5">
                    <div class="col-12 col-lg-4 order-2 order-lg-1 text-center pt-3">
                        <h1 class="text-s-1 text-w-700 color-FF773B mb-0">{{otherError}}</h1>
                        <div class="p-5">
                            <a href="/" class="btn btn-orange text-s-16 text-w-400 hvr-back-pulse"><span>กลับสู่หน้าหลัก</span></a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5 order-1 order-lg-2 text-center">
                        <img class="img-fluid" width="370" height="370" src="../assets/SSK-Crying-01-1.webp" alt="Header-sellsuki">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  <!-- <div>
    <div class="text-center height-div">
      <div v-if="error.statusCode === 404">
        <h1>{{ pageNotFound }}</h1>
        <p>OOPS. Looks like the page you're looking for no longer exists</p>
        <NuxtLink to="/"> Home page </NuxtLink>
      </div>
      <div v-else>
        <h1>{{ otherError }}</h1>
        <NuxtLink to="/"> Home page </NuxtLink>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'error',
  layout: 'Layout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted() {
    return this.error.statusCode
    //window.location.href = 'http://localhost:3000/'
    // if(window.location.href == window.location.origin + '/terms.html')
    // {
    //   window.location.href = window.location.origin + '/Blogs/Detail/68/what-is-line-premium-id'
    // }

    // else if(window.location.href == window.location.origin + '/business-solutions_lineat')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/ซื้อ-package-กับ-sellsuki-ต่างกับซื้อเอง')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/บริการส่งของ-drop-off')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Shipmunk'
    // }

    // else if(window.location.href == window.location.origin + '/business-solutions_sellsuki-partnership-program')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Fuse'
    // }
    
    // else if(window.location.href == window.location.origin + '/line-sellsuki-รับทำโฆษณา-รับทำการตลาด')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/business-solutions_bearyweb')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Beary'
    // }

    // else if(window.location.href == window.location.origin + '/line-คืออะไร')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }
    
    // else if(window.location.href == window.location.origin + '/line-homepage')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/line-premium-id-คืออะไร-เปลี่ยนชื่อ-premium-id')
    // {
    //   window.location.href = window.location.origin + 'Blogs/Detail/68/what-is-line-premium-id'
    // }

    // else if(window.location.href == window.location.origin + '/how-to-make-old-consumer-back')
    // {
    //   window.location.href = window.location.origin + '/Blogs/Detail/43/5tips-to-keep-old-consumer'
    // }

    // else if(window.location.href == window.location.origin + '/pricing-psychology')
    // {
    //   window.location.href = window.location.origin + '/Blogs/Detail/33/pricing-strategy'
    // }

    // else if(window.location.href == window.location.origin + '/additional-service_pos')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/lap#!/line_at_price')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Line'
    // }

    // else if(window.location.href == window.location.origin + '/additional-service_facebook-shop')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Fuse'
    // }

    // else if(window.location.href == window.location.origin + '/additional-service_pick-pack')
    // {
    //   window.location.href = window.location.origin + '/Solutions/Akita'
    // }

    //else{
    //   window.location.href = window.location.origin
    //}
    //window.location.href = window.location.origin
    //console.log(window.location.href)
  }
}
</script>


<style scoped>
.hide-class{
    display: none;
}
.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.btn-orange{
  width: 140px !important;
  height: 36px !important;
}
.page-top{
    padding-top: 120px;
}

.text-s-1{
  font-size: 90px !important;
}

.text-s-2{
  font-size: 55px !important;
}

.text-s-3{
  font-size: 25px !important;
}
</style>
