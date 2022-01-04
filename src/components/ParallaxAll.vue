<template>
<div class="sticky-container">
  <main>
    <section>
      <img class="img-fluid" src="./../assets/Paralax/1/1.webp">
    </section>
    <section>
      <h1>Boop</h1>
    </section>
    <section>
      <h1>GG</h1>
    </section>
    <section>
      <h1>QQ</h1>
    </section>
    <section>
      <h1>Boop</h1>
    </section>
    <section>
      <h1>Geee</h1>
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
        section2:false
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
            container.setAttribute('style', 'height: 5000px');
        });
      },
      isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
      },
      wheelHandler(evt){
        
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
            containerInViewPort.querySelector('main').scrollLeft += 1100;

            window.removeEventListener("wheel", this.wheelHandler)
            setTimeout(() => window.addEventListener("wheel", this.wheelHandler), 500)

            if(containerInViewPort.querySelector('main').scrollLeft >= 200){
              //this.section1 = false
              //this.section2 = true
            }
            console.log(evt.deltaY)
        }
      },
    }

}
</script>

<style scoped>
main {
  overflow-x: hidden;
  display: flex;
  position: sticky;
  top:0;
}

h1 {
  margin: 0;
  padding: 0;
}

section {
  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4ch;
}

section:nth-child(even) {
  background-color: teal;
  color: white;
}
</style>