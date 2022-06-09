<template>
<div id="YoutubeVideo">
    <div class="row">
        <div class="col-12 mt-3 d-none d-lg-block">
            <iframe
                width="100%" height="500"
                src="https://www.youtube.com/embed/DACglXR_hho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="รวมพื้นที่โฆษณาบน LINE ที่เจ้าของธุรกิจควรรู้!">
            </iframe>
        </div>
        <div class="col-12 d-block d-lg-none" style="margin-top: -70px;">
            <iframe
                width="100%" height="320"
                src="https://www.youtube.com/embed/DACglXR_hho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="รวมพื้นที่โฆษณาบน LINE ที่เจ้าของธุรกิจควรรู้!">
            </iframe>
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