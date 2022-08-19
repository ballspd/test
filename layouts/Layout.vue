<template>
<div>
    <Cookie/>
    <Menu/>
    <nuxt/>
    <Footer/>
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
        <a target="_blank" rel="noopener" href="https://www.facebook.com/messages/t/Sellsuki"><img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/icon_chat_5cbd188cbf.webp" alt="icon chat" style="width: 55px;margin-right: 2px;margin-bottom: 4px;"></a>
    </div>
    <div v-if="!isActive" class="fabs animate__animated animate__fadeInUp" :class="{'animate__fadeInUp': isActive}" style="margin-bottom: 222px;">
        <a target="_blank" rel="noopener" href="https://lin.ee/eMB0DP0"><img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Group_351_3cb84c9d39.webp" alt="icon line" style="width: 65px;margin-right: -2px;"></a>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sellsuki",
        "image": "https://www.sellsuki.co.th/nuxt/img/logo-Sellsuki.0b4477c.svg",
        "description":"Sellsuki เป็น Business Enabler หรือผู้ให้บริการ e-Commerce Solution Service อย่างครอบคลุมสำหรับผู้ประกอบการหรือเจ้าของธุรกิจออนไลน์ในไทย มีบริการที่หลากหลายตั้งแต่บริการทำโฆษณาออนไลน์ ขยายช่องทางการขาย ช่วยทำ Content Marketing และระบบ Customer Data Platform ไปจนถึงบริการ Fulfillment ทำให้ Sellsuki เป็นคำตอบสำหรับการทำธุรกิจออนไลน์ที่ครอบคลุมที่สุด",
        "@id": "",
        "url": "https://www.sellsuki.co.th/",
        "telephone": "+6620263250",
        "email": "mailto:hello@sellsuki.com",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10/39 4Simplex Building, 3rd Floor, Ratchadaphisek Rd, Chan Kasem",
          "addressLocality": "Bangkok",
          "postalCode": "10900",
          "addressCountry": "TH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.801901,
          "longitude": 100.5751
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.facebook.com/Sellsuki/",
          "https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ"
        ] 
      }
    },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>

</style>
