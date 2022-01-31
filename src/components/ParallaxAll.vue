<template>
<div class="sticky-container">
  <main>
    <section>
      <img class="img-fluid" src="./../assets/Paralax/1/1.webp">
    </section>
    <section>
      <div v-if="section2">
        <img class="img-fluid position-absolute animate__animated animate__animated" src="./../assets/Paralax/2/2-bg-main.webp">
        <img class="img-fluid position-absolute animate__animated animate__slideInRight" src="./../assets/Paralax/2/2-3.webp">
        <img class="img-fluid position-absolute animate__animated animate__slideInLeft" src="./../assets/Paralax/2/2-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/2/2-bg-sup.webp">
        <img class="img-fluid position-absolute animate__animated animate__slideInUp" src="./../assets/Paralax/2/2-2.webp">
        <img class="img-fluid position-absolute animate__animated animate__slideInLeft" src="./../assets/Paralax/2/2-4.webp">
        <img class="img-fluid position-absolute animate__animated animate__slideInRight" src="./../assets/Paralax/2/2-5.webp">
      </div>
    </section>
    <section>
      <div v-if="section3">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInDown" src="./../assets/Paralax/3/3-7.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/3/3-6.webp">
        <img class="img-fluid position-absolute tranfer-size" src="./../assets/Paralax/2/2-1.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3.12.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/2/2-bg-sup.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/3/3-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__zoomIn" src="./../assets/Paralax/3/3-3.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/3/3-5.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/3/3-8.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/3/3-2.webp">
        <img class="img-fluid position-absolute tranfer-right" src="./../assets/Paralax/2/2-2.webp">

        <img class="img-fluid position-absolute animate__animated animate__bounceInUp animate__slower" src="./../assets/Paralax/3/3-4.webp">
        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/3/3-text-1.webp">
        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/3/3-text-2.webp">
        <img class="img-fluid position-absolute show-left" src="./../assets/Paralax/3/3-text-3.webp">
        
        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/all.webp">
        <img class="img-fluid position-absolute tranfer-right" src="./../assets/Paralax/2/2-4.webp">
        <img class="img-fluid position-absolute tranfer-left" src="./../assets/Paralax/2/2-5.webp">
      </div>
    </section>
    <section>
      <div v-if="section4">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/4/4-1.webp">
        <img class="img-fluid position-absolute tranfer-right-none-top" src="./../assets/Paralax/3/3-6.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/4/4.9.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/3/3.12.svg">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/4/4-2.webp">
        <img class="img-fluid position-absolute tranfer-right-none-top" src="./../assets/Paralax/3/3-2.webp">

        <img class="img-fluid position-absolute show-right-delay-15s" src="./../assets/Paralax/4/4-text-1.webp">
        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/4/4-text-2.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/4/4-4.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/4/4-5.webp">

        <img class="img-fluid position-absolute show-right-delay-15s" src="./../assets/Paralax/4/4-3.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-text-2.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-text-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-4.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-5.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-7.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/3/3-8.webp">
      </div>
    </section>
    <section>
      <div v-if="section5">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">
        <img class="img-fluid position-absolute show-left" src="./../assets/Paralax/5/5-4.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/5/5-3.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/5/5-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/4/4-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/5/5.8.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/4/4.9.svg">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/5/5-2.webp">
        <img class="img-fluid position-absolute tranfer-left-none-top" src="./../assets/Paralax/4/4-2.webp">

        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/5/5-text-1.webp">
        <img class="img-fluid position-absolute show-right-delay-15s" src="./../assets/Paralax/5/5-text-2.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeInUp" src="./../assets/Paralax/5/5-5.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/4/4-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/4/4-text-2.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/4/4-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/4/4-4.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/4/4-5.webp">
      </div>
    </section>
    <section>
      <div v-if="section6">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/6/6-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/5/5-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/6/6.6.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/5/5.8.svg">

        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/6/6-4.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/6/6-3.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/6/6-2.webp">
        <img class="img-fluid position-absolute tranfer-left-none-top" src="./../assets/Paralax/5/5-2.webp">

        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/6/6-text-1.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/5/5-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/5/5-text-2.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/5/5-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/5/5-4.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/5/5-5.webp">
      </div>
    </section>
    <section>
      <div v-if="section7">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/7/7.8.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/6/6.6.svg">
        
        <img class="img-fluid position-absolute show-right-delay-2s" src="./../assets/Paralax/7/7-text-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/7/7-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/6/6-1.webp">

        <img class="img-fluid position-absolute show-top-3" src="./../assets/Paralax/7/7-3.webp">
        <img class="img-fluid position-absolute show-top-2" src="./../assets/Paralax/7/7-4.webp">
        <img class="img-fluid position-absolute show-top-1" src="./../assets/Paralax/7/7-5.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/7/7-6.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/7/7-2.webp">
        <img class="img-fluid position-absolute tranfer-left-none-top" src="./../assets/Paralax/6/6-2.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/6/6-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/6/6-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/6/6-4.webp">
      </div>
    </section>
    <section>
      <div v-if="section8">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">      

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/8/8-1.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeOutRight" src="./../assets/Paralax/7/7-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/8/8.6.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/7/7.8.svg">

        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/8/8-3.webp">
        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/8/8-text-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/8/8-2.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/7/7-2.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/7/7-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/7/7-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/7/7-4.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/7/7-5.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/7/7-6.webp">
      </div>
    </section>
    <section>
      <div v-if="section9">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">

        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/9/9-6.webp">

                <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/9/9-1.webp">
        <img class="img-fluid position-absolute tranfer-right" src="./../assets/Paralax/8/8-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/9/9.8.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/8/8.6.svg">
        

        <img class="img-fluid position-absolute show-top-2" src="./../assets/Paralax/9/9-3.webp">
        <img class="img-fluid position-absolute show-top-1" src="./../assets/Paralax/9/9-4.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/9/9-5.webp">

        <img class="img-fluid position-absolute show-right-delay-2s" src="./../assets/Paralax/9/9-text-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/9/9-2.webp">
        <img class="img-fluid position-absolute tranfer-right-none-top" src="./../assets/Paralax/8/8-2.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/8/8-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/8/8-3.webp">
      </div>
    </section>
    <section>
      <div v-if="section10">
        <img class="img-fluid position-absolute" src="./../assets/Paralax/3/3-bg-main.webp">

         <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/10/10-8.webp">
        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/10/10-1.webp">
        <img class="img-fluid position-absolute tranfer-size" src="./../assets/Paralax/9/9-1.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn" src="./../assets/Paralax/10/10.7.svg">
        <img class="img-fluid position-absolute animate__animated animate__fadeOut" src="./../assets/Paralax/9/9.8.svg">
        
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/10/10-7.webp">
        <img class="img-fluid position-absolute show-bottom" src="./../assets/Paralax/10/10-3.webp">
        <img class="img-fluid position-absolute show-right" src="./../assets/Paralax/10/10-4.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/10/10-5.webp">
        <img class="img-fluid position-absolute show-top" src="./../assets/Paralax/10/10-6.webp">

        <img class="img-fluid position-absolute animate__animated animate__fadeIn animate__slow" src="./../assets/Paralax/10/10-2.webp">
        <img class="img-fluid position-absolute tranfer-right-none-top" src="./../assets/Paralax/9/9-2.webp">

        <img class="img-fluid position-absolute" src="./../assets/Paralax/all.webp">

        <!------------------ move-page ----------------->
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/9/9-text-1.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/9/9-3.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/9/9-4.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/9/9-5.webp">
        <img class="img-fluid position-absolute move-page" src="./../assets/Paralax/9/9-6.webp">
      </div>
    </section>
      
    <section>
      <img class="img-fluid" src="./../assets/Paralax/10/10.webp">
    </section>
  </main>
</div>
</template>

<script>
export default {
    name:"ParallaxAll",
    data(){
      return{
        section1:true,
        section2:false,
        section3:false,
        section4:false,
        section5:false,
        section6:false,
        section7:false,
        section8:false,
        section9:false,
        section10:false
      }
    },
    mounted () {
        this.init();
    },
    methods:{
      init(){
        this.setStickyContainersSize();
        this.bindEvents();
      },
      bindEvents(){
        window.addEventListener("wheel", this.wheelHandler);       
      },
      setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            container.setAttribute('style', 'height: 2200px');
        });
      },
      isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
      },
      wheelHandler(event){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return container;
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            if(document.documentElement.scrollTop > 3058){
              return false
            }
            containerInViewPort.querySelector('main').scrollLeft += event.deltaY < 0 ? -1100 : 1100;

            if(containerInViewPort.querySelector('main').scrollLeft > 1 && containerInViewPort.querySelector('main').scrollLeft <= 1100){
              this.section2 = true
            }else
            {
              this.section2 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 1100 && containerInViewPort.querySelector('main').scrollLeft <= 2200){
              this.section3 = true
            }else
            {
              this.section3 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 2200 && containerInViewPort.querySelector('main').scrollLeft <= 3300){
              this.section4 = true
            }else
            {
              this.section4 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 3300 && containerInViewPort.querySelector('main').scrollLeft <= 4400){
              this.section5 = true
            }else
            {
              this.section5 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 4400 && containerInViewPort.querySelector('main').scrollLeft <= 5500){
              this.section6 = true
            }else
            {
              this.section6 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 5500 && containerInViewPort.querySelector('main').scrollLeft <= 6600){
              this.section7 = true
            }else
            {
              this.section7 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 6600 && containerInViewPort.querySelector('main').scrollLeft <= 7700){
              this.section8 = true
            }else
            {
              this.section8 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 7700 && containerInViewPort.querySelector('main').scrollLeft <= 8800){
              this.section9 = true
            }else
            {
              this.section9 = false
            }

            if(containerInViewPort.querySelector('main').scrollLeft > 8800 && containerInViewPort.querySelector('main').scrollLeft <= 9900){
              this.section10 = true
            }else
            {
              this.section10 = false
            }
            console.log(containerInViewPort.querySelector('main').scrollLeft)
        }
      },
    }

}
</script>

<style scoped>
main {
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  position: sticky;
  top:0;
  margin-top: -90px;
  /* background: linear-gradient(110.74deg, rgb(82, 184, 226) 0%, rgb(61, 144, 221) 75.34%); */
}

h1 {
  margin: 0;
  padding: 0;
}

.position-absolute {
  position: absolute;
}

section {
  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4ch;
  overflow-x: hidden;
}

section div {
  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.move-page {
  width: 100%;
  animation: move-page 0.5s forwards;
  animation-iteration-count: 1;
}

.tranfer-size {
  width: 100%;
  animation: tranfersize 0.8s forwards;
  animation-iteration-count: 1;
}

.tranfer-size-up {
  width: 100%;
  animation: tranfer-size-up 0.8s forwards;
  animation-iteration-count: 1;
}

.tranfer-left-none-top {
  animation: tranfer-left-none-top 0.8s forwards;
  animation-iteration-count: 1;
}

.tranfer-right-none-top {
  animation: tranfer-right-none-top 0.8s forwards;
  animation-iteration-count: 1;
}

.tranfer-left {
  animation: tranferleft 0.8s forwards;
  animation-iteration-count: 1;
}

.tranfer-right {
  animation: tranferright 0.8s forwards;
  animation-iteration-count: 1;
}

.show-left{
  animation: show-left 1s forwards;
  animation-iteration-count: 1;
}

.show-right{
  animation: show-right 1s forwards;
  animation-iteration-count: 1;
}

.show-left-delay-15s{
  animation: show-left 1.5s forwards;
  animation-iteration-count: 1;
}

.show-right-delay-15s{
  animation: show-right 1.5s forwards;
  animation-iteration-count: 1;
}

.show-left-delay-2s{
  animation: show-left 2s forwards;
  animation-iteration-count: 1;
}

.show-right-delay-2s{
  animation: show-right 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 2s;
  opacity: 0;

}

.show-top{
  animation: show-top 1s forwards;
  animation-iteration-count: 1;
}

.show-top-1{
  animation: show-top 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  opacity: 0;
}

.show-top-2{
  animation: show-top 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 1s;
  opacity: 0;
}

.show-top-3{
  animation: show-top 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 1.5s;
  opacity: 0;
}

.show-bottom{
  animation: show-bottom 1s forwards;
  animation-iteration-count: 1;
}

@keyframes move-page {
  0%   {margin-right: 0px;}
  100% {margin-right: 500px;opacity: 0;}
}

@keyframes tranfersize {
  0%   {width: 100%}
  100% {width: 70%;opacity: 0;}
}

@keyframes tranfer-size-up {
  0%   {width: 100%}
  100% {width: 120%;opacity: 0;margin-top: 50px;}
}

@keyframes tranferright {
  0%   {width: 100%}
  100% {width: 100%;opacity: 0;margin-right: 250px;margin-top: -100px;}
}

@keyframes tranferleft {
  0%   {width: 100%}
  100% {width: 100%;opacity: 0;margin-left: 250px;margin-top: 100px;}
}

@keyframes tranfer-right-none-top {
  0%   {width: 100%}
  100% {width: 100%;opacity: 0;margin-right: 250px;}
}

@keyframes tranfer-left-none-top {
  0%   {width: 100%}
  100% {width: 100%;opacity: 0;margin-left: 250px;}
}

@keyframes show-left {
  0%   {margin-left: -300px;opacity: 0}
  100% {margin-left: 0;opacity: 1}
}

@keyframes show-right {
  0%   {margin-right: -300px;opacity: 0}
  100% {margin-right: 0;opacity: 1}
}

@keyframes show-top {
  0%   {margin-top: 300px;}
  100% {margin-top: 0px;opacity: 1;}
}

@keyframes show-bottom {
  0%   {margin-bottom: 300px;}
  100% {margin-bottom: 0px;opacity: 1;}
}
</style>