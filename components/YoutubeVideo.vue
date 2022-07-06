<template>
<div id="YoutubeVideo">
    <div class="row">
        <div class="col-12 mt-3 d-none d-lg-block">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/JuRnEH7Aps4" title="Sellsuki ผู้ช่วยเจ้าของธุรกิจออนไลน์ครบวงจร" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-12 d-block d-lg-none" style="margin-top: -70px;">
            <iframe width="100%" height="320" src="https://www.youtube.com/embed/JuRnEH7Aps4" title="Sellsuki ผู้ช่วยเจ้าของธุรกิจออนไลน์ครบวงจร" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'YoutubeVideo',
    data() {
      return {
        responseData:[],
      }
    }
}
</script>

<style scoped>

</style>