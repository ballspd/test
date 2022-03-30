<template>
<div class="home">
  <Home/>
  <div class="fabs animate__animated animate__bounce" @click="isActive = !isActive" style="bottom:80px !important">
    <div class="social-chat">
      <i v-if="isActive == false" class="bi bi-x" style="font-size:38px;margin: 9.2px;"></i>
      <i v-if="isActive == true" class="bi bi-chat-text-fill" style="font-size:38px;margin: 9.2px;"></i>
    </div>
  </div>
  <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
      <div class="click-top">
        <i class="bi bi-arrow-up-short" style="font-size:38px;margin: 9.2px;"></i>
    </div>
  </div>
  <div v-if="!isActive" class="fabs animate__animated animate__fadeInUp" :class="{'animate__fadeInUp': isActive}" style="margin-bottom: 155px;">
    <a target="_blank" href="https://www.facebook.com/messages/t/Sellsuki"><img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_chat_871c1dec5a.png" alt="icon chat" style="width: 55px;margin-right: 2px;margin-bottom: 4px;"></a>
  </div>
  <div v-if="!isActive" class="fabs animate__animated animate__fadeInUp" :class="{'animate__fadeInUp': isActive}" style="margin-bottom: 222px;">
    <a target="_blank" href="https://lin.ee/eMB0DP0"><img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Group_351_6cfbba5ab1.png" alt="icon line" style="width: 65px;margin-right: -2px;"></a>
  </div>
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
