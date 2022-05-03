<template>
  <div>
    <div class="text-center height-div">
      <div v-if="error.statusCode === 404">
        <h1>{{ pageNotFound }}</h1>
        <p>OOPS. Looks like the page you're looking for no longer exists</p>
      </div>
      <div v-else>
        <h1>{{ otherError }}</h1>
      </div>
      <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
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
    //window.location.href = 'http://localhost:3000/'
    if(window.location.href == window.location.origin + '/terms.html')
    {
      window.location.href = window.location.origin + '/Blogs/Detail/68/what-is-line-premium-id'
    }

    if(window.location.href == window.location.origin + '/business-solutions_lineat')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/ซื้อ-package-กับ-sellsuki-ต่างกับซื้อเอง')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/บริการส่งของ-drop-off')
    {
      window.location.href = window.location.origin + '/Solutions/Shipmunk'
    }

    if(window.location.href == window.location.origin + '/business-solutions_sellsuki-partnership-program')
    {
      window.location.href = window.location.origin + '/Solutions/Fuse'
    }
    
    if(window.location.href == window.location.origin + '/line-sellsuki-รับทำโฆษณา-รับทำการตลาด')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/business-solutions_bearyweb')
    {
      window.location.href = window.location.origin + '/Solutions/Beary'
    }

    if(window.location.href == window.location.origin + '/line-คืออะไร')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }
    
    if(window.location.href == window.location.origin + '/line-homepage')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/line-premium-id-คืออะไร-เปลี่ยนชื่อ-premium-id')
    {
      window.location.href = window.location.origin + 'Blogs/Detail/68/what-is-line-premium-id'
    }

    if(window.location.href == window.location.origin + '/how-to-make-old-consumer-back')
    {
      window.location.href = window.location.origin + '/Blogs/Detail/43/5tips-to-keep-old-consumer'
    }

    if(window.location.href == window.location.origin + '/pricing-psychology')
    {
      window.location.href = window.location.origin + '/Blogs/Detail/33/pricing-strategy'
    }

    if(window.location.href == window.location.origin + '/additional-service_pos')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/lap#!/line_at_price')
    {
      window.location.href = window.location.origin + '/Solutions/Line'
    }

    if(window.location.href == window.location.origin + '/additional-service_facebook-shop')
    {
      window.location.href = window.location.origin + '/Solutions/Fuse'
    }

    if(window.location.href == window.location.origin + '/additional-service_pick-pack')
    {
      window.location.href = window.location.origin + '/Solutions/Akita'
    }

    // else{
    //   window.location.href = window.location.origin
    // }
    //window.location.href = window.location.origin
    console.log(window.location.href)
  }
}
</script>

<style scoped>
.height-div{
  margin-top: 300px;
  background-color: #fdf5e8 !important;
}
</style>
