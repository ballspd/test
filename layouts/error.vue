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
    window.location.href = window.location.origin
    //console.log(window.location.origin)
  }
}
</script>

<style scoped>
.height-div{
  margin-top: 300px;
  background-color: #fdf5e8 !important;
}
</style>
