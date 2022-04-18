<template>
    <div id="Cookie">
		<div v-if="show" class="card-position shadow-lg animate__animated animate__fadeIn">
            <div class="p-4 p-md-5">
                <div class="row ps-2 pe-2">
                    <div class="col-md-12 col-lg-7 col-xl-7">
                        <p>เราใช้คุกกี้เพื่อช่วยให้ไซต์ของเราทำงานได้อย่างถูกต้อง แสดงเนื้อหาและโฆษณาที่ตรงกับความสนใจของผู้ใช้ เปิดให้ใช้คุณสมบัติทางโซเชียลมีเดีย และเพื่อวิเคราะห์การเข้าถึงข้อมูลของเรา เรายังแบ่งปันข้อมูลการใช้งาน ไซต์กับพาร์ทเนอร์โซเชียลมีเดีย การโฆษณาและพาร์ทเนอร์การวิเคราะห์ของเราอีกด้วย</p>
                    </div>
                    <div class="col-md-12 col-lg-5 col-xl-5 text-center text-lg-end mt-3">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#setting" class="btn btn-white-custom hvr-orange-pulse me-3">การตั้งค่าคุกกี้</button>
                        <button type="button" @click="CookieSettingAll" class="btn btn-orange-custom">ยอมรับคุกกี้ทั้งหมด</button>
                    </div>
                </div>
            </div>
		</div>

                <!-- Modal -->
        <div class="modal fade" id="setting" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel">Cookie Settings</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <p>
                                        ท่านสามารถปรับแต่งการใช้งานคุกกี้ได้ตามรายละเอียดต่อไปนี้
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-10">
                                    <h4>Strictly Necessary Cookies</h4>
                                    <p>คุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์</p>
                                </div>
                                <div class="col-2">
                                    <label class="switch pull-right">
                                        <input v-model="StrictlyNecessaryCookies" id="StrictlyNecessaryCookies" type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-10">
                                    <h4>Targeting Cookies</h4>
                                    <p>คุกกี้เพื่อปรับเนื้อหาเข้ากับกลุ่มเป้าหมาย</p>
                                </div>
                                <div class="col-2">
                                    <label class="switch pull-right">
                                        <input v-model="TargetingCookies" id="TargetingCookies" type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-10">
                                    <h4>Performance Cookies</h4>
                                    <p>คุกกี้ด้านประสิทธิภาพการทำงานของเว็บไซต์</p>
                                </div>
                                <div class="col-2">
                                    <label class="switch pull-right">
                                        <input v-model="PerformanceCookies" id="PerformanceCookies" type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-10">
                                    <h4>Advertising Cookies</h4>
                                    <p>คุกกี้เพื่อการโฆษณา</p>
                                </div>
                                <div class="col-2">
                                    <label class="switch pull-right">
                                        <input v-model="AdvertisingCookies" id="AdvertisingCookies" type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-12">
                                    <p>ข้อมูลที่ได้และใช้ประมวลผลจากการใช้คุกกี้นั้น ไม่มีการระบุชื่อ หรือบ่งบอกความเป็นตัวตนของท่านได้ อีกทั้งไม่มีการเก็บข้อมูลจำเพาะบุคคลเช่น ชื่อ อีเมล เป็นต้น และใช้เป็นข้อมูลทางสถิติเท่านั้น</p>
                                </div>
                                <div class="col-12 text-center mt-3 mb-2">
                                    <button type="button" @click="CookieSettingAll" data-bs-dismiss="modal" class="btn btn-white-custom hvr-orange-pulse me-2">ยอมรับทั้งหมด</button>
                                    <button type="button" @click="CookieSetting" data-bs-dismiss="modal" class="btn btn-orange-custom">บันทึกข้อมูล</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
	name: 'preloader',
	data(){
		return {
            StrictlyNecessaryCookies: false,
            TargetingCookies: false,
            PerformanceCookies: false,
			AdvertisingCookies: false,
            show:false
		}
	},
	mounted(){
        const StrictlyNecessaryCookies = this.$cookies.get('Strictly-Necessary-Cookies')
        if(StrictlyNecessaryCookies == true){
            this.StrictlyNecessaryCookies = StrictlyNecessaryCookies
        }

        const TargetingCookies = this.$cookies.get('Targeting-Cookies')
        if(TargetingCookies == true){
            this.TargetingCookies = TargetingCookies
        }

        const PerformanceCookies = this.$cookies.get('Performance-Cookies')
        if(PerformanceCookies == true){
            this.PerformanceCookies = PerformanceCookies
        }

        const AdvertisingCookies = this.$cookies.get('Advertising-Cookies')
        if(AdvertisingCookies == true){
            this.AdvertisingCookies = AdvertisingCookies
        }

        console.log(StrictlyNecessaryCookies, TargetingCookies, PerformanceCookies, AdvertisingCookies)
        if(StrictlyNecessaryCookies != true && TargetingCookies != true && PerformanceCookies != true && AdvertisingCookies != true){
            setTimeout(() => this.show = true, 2000);
        }
	},
	methods: {
        CookieSetting() {
            this.$cookies.set("Strictly-Necessary-Cookies", this.StrictlyNecessaryCookies, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Targeting-Cookies", this.TargetingCookies, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Performance-Cookies", this.PerformanceCookies, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Advertising-Cookies", this.AdvertisingCookies, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.show = false
        },
        CookieSettingAll() {
            this.$cookies.set("Strictly-Necessary-Cookies", true, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Targeting-Cookies", true, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Performance-Cookies", true, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.$cookies.set("Advertising-Cookies", true, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });
            this.show = false
        }
	}
}
</script>

<style scoped>
.card-position{
    position: fixed;
    z-index: 999;
    background-color: white;
    width: 100%;
    bottom: 0;
}

.btn-orange-custom {
  width: 164px;
  height: 40px;
  color: #FFFFFF !important;
  background-color: #F38100;
  border: 1px solid #F38100;
  box-sizing: border-box;
  border-radius: 5px;
}

.btn-white-custom {
  width: 164px;
  height: 40px;
  color: #F38100 !important;
  background-color: #FFFFFF;
  border: 1px solid #F38100;
  box-sizing: border-box;
  border-radius: 5px;
}

.hvr-white-pulse:hover, .hvr-white-pulse:focus, .hvr-white-pulse:active {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: white !important;
  color: #F38100 !important;
}

.hvr-orange-pulse:hover, .hvr-orange-pulse:focus, .hvr-orange-pulse:active {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #F38100 !important;
  color: white !important;
}

.btn-success{
    background-color: #F38100 !important;
    border: 1px solid #F38100;
}

hr{
    border: 1px solid rgb(216, 216, 216);;
}

h4{
    font-size: 18px !important;
    font-weight: 600 !important;
}

p{
    font-size: 14px !important;
    font-weight: 300 !important;
    color: #212529;
    padding-bottom: 0 !important;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #F38100;
}

input:focus + .slider {
  box-shadow: 0 0 1px #F38100;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.cookie-bar {
    background: #f8f8f8;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 14px 14px;
    box-shadow: 0 -2px 2px rgba(0,0,0,0.1);
}
</style>