<template>
<div class="home">
  <Home/>
</div>
</template>

<script>

export default {
  layout:"Layout",
  name: 'App',
  head() {
      return {
          title: "Home"
      };
    },
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style>
</style>
