<template>
<div id="YoutubeVideo">
    <div class="row mt-3 p-3">
        <div class="col-12 d-xl-block">
            <YouTube src="https://www.youtube.com/embed/DACglXR_hho" width="100%" height="540"/>
            <!-- <iframe width="100%" height="540" src="https://www.youtube.com/embed/DACglXR_hho" title="YouTube video player" allowfullscreen></iframe> -->
        </div>
        <div class="col-12 d-block d-xl-none">
            <YouTube src="https://www.youtube.com/embed/DACglXR_hho" width="100%" height="320"/>
            <!-- <iframe width="100%" height="320" src="https://www.youtube.com/embed/DACglXR_hho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        </div>
    </div>
</div>
</template>

<script>
import YouTube from 'vue3-youtube'

export default {
    name: 'YoutubeVideo',
    components: { YouTube },
}
</script>

<style scoped>

</style>