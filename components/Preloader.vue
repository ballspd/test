<template>
<div class="d-none d-lg-block">
	<!-- <transition name="fade">
		<div v-if="show" class="preloader animate__animated animate__fadeIn">
			<img class="img-fluid logo-preloader"  src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp" alt="Header-sellsuki.webp" loading="lazy">
      <div class="waviy">
        <span style="--i:1">S</span>
        <span style="--i:2">E</span>
        <span style="--i:3">L</span>
        <span style="--i:4">L</span>
        <span style="--i:5">S</span>
        <span style="--i:6">U</span>
        <span style="--i:7">K</span>
        <span style="--i:8">I</span>
      </div>
		</div>
	</transition> -->
  </div>
</template>

<script>
export default {
	name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if(this.show) this.showToggle()
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
			}, 1000)
		}
	}
}
</script>

<style scoped>
  /* ----------------------preloader-------------------------- */

  .preloader{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	z-index: 99999;
  }

  .logo-preloader{
      width: 300px;
  }

/* .hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 15px;
      width: calc(30px * 3);
    }

    .hollow-dots-spinner .dot {
      width: 15px;
      height: 15px;
      margin: 0 calc(15px / 2);
      border: calc(15px / 5) solid #ff1d5e;
      border-radius: 50%;
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    } */
</style>