<template>
<div id="page">
	<div>1</div>
	<div>2</div>
<div>Last</div>
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
        section4:false
      }
    },
    mounted () {
        const page = document.getElementById('page');

        window.onscroll = function(){
            let y = document.body.getBoundingClientRect().top;
            console.log(document.body.getBoundingClientRect());
            page.scrollLeft = -y;
        }
    },
    methods:{
    }

}
</script>

<style scoped>
body {
	overflow-x: hidden;
	font-family: sans-serif;
	font-size: 4rem;

}
#page {
	overflow:hidden;
	white-space: nowrap;
	display: flex;
	flex-wrap: no-wrap;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

#page div {
		flex: 0 0 50vw;
		height: 50vh;
		position: relative;
		align-items: center;
		display: flex;
		justify-content: center;
		background-color: #76dbd1;
		color: #fbfbfb;
	}
	#page div:nth-of-type(2){
		background-color: #89f8ce;
		
	}
	#page div:nth-of-type(3){
		background-color: #ff6473;
		
	}

</style>