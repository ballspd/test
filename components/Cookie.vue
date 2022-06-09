<template>
    <div id="Cookie">
		<div v-if="show" class="card-position shadow-lg animate__animated animate__fadeIn">
            <div class="p-4 p-md-5">
                <div class="row ps-2 pe-2">
                    <div class="col-md-12 col-lg-7 col-xl-7">
                        <p>เราใช้คุกกี้เพื่อช่วยให้ไซต์ของเราทำงานได้อย่างถูกต้อง แสดงเนื้อหาและโฆษณาที่ตรงกับความสนใจของผู้ใช้ เปิดให้ใช้คุณสมบัติทางโซเชียลมีเดีย และเพื่อวิเคราะห์การเข้าถึงข้อมูลของเรา เรายังแบ่งปันข้อมูลการใช้งาน ไซต์กับพาร์ทเนอร์โซเชียลมีเดีย การโฆษณาและพาร์ทเนอร์การวิเคราะห์ของเราอีกด้วย</p>
                    </div>
                    <div class="col-md-12 col-lg-5 col-xl-5 text-center text-lg-end mt-3">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#setting" class="btn btn-white-custom hvr-orange-pulse me-0 me-md-3">การตั้งค่าคุกกี้</button>
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
                                    <p class="mb-0">
                                        ท่านสามารถปรับแต่งการใช้งานคุกกี้ได้ตามรายละเอียดต่อไปนี้
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-10">
                                    <h4>Strictly Necessary Cookies</h4>
                                    <div class="accordion accordion-flush" id="accordionExample1">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading1">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                คุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์
                                            </button>
                                            </h2>
                                            <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample1">
                                            <div class="accordion-body">
                                                <p>คุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์ (Strictly Necessary Cookies) คือ คุกกี้ที่มีความจำเป็นต่อการทำงานของเว็บไซต์ เพื่อให้เว็บไซต์สามารถทำงานได้เป็นปกติ มีความปลอดภัย และทำให้ท่านสามารถเข้าใช้เว็บไซต์ได้ เช่น การ log in เข้าสู่เว็บไซต์ การยืนยันตัวตน ทั้งนี้ ท่านไม่สามารถปิดการใช้งานของคุกกี้ประเภทนี้ผ่านระบบของเว็บไซต์ของเราได้</p>
                                                <table class="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ชื่อคุกกี้</th>
                                                            <th scope="col">Provider</th>
                                                            <th scope="col">วัตถุประสงค์</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">PHPSESSID</th>
                                                            <td>Sellsuki</td>
                                                            <td>ใช้เพื่อบันทึกการใช้เว็บไซต์ระหว่างเซสชั่น คุกกี้นี้ไม่มีข้อมูลส่วนบุคคล</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">__cfduid</th>
                                                            <td>Cloudflare</td>
                                                            <td>ใช้ตรวจสอบแหล่งการใช้งานของผู้ใช้ว่ามาจากแหล่งที่ปลอดภัย</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4>Performance Cookies</h4>
                                    <div class="accordion" id="accordionExample2">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                คุกกี้ด้านประสิทธิภาพการทำงานของเว็บไซต์
                                            </button>
                                            </h2>
                                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample2">
                                            <div class="accordion-body">
                                                <p>คุกกี้ด้านประสิทธิภาพการทำงานของเว็บไซต์ (Performance Cookies) คือ คุกกี้เพื่อให้เข้าใจว่าผู้ใช้งานเช่นท่าน มีปฏิสัมพันธ์กับเว็บไซต์ฯ อย่างไร โดยให้ข้อมูลเกี่ยวกับพื้นที่ ซึ่งมีการเข้าชมเว็บ เวลาที่ใช้ และประเด็นอื่นๆ ที่เกี่ยวข้อง เช่น ข้อผิดพลาดต่างๆ  คุกกี้ประเภทนี้จะไม่ระบุตัวตนของท่านได้ และข้อมูลที่ได้มาจะไม่สามารถระบุตัวตนได้</p>
                                                <table class="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ชื่อคุกกี้</th>
                                                            <th scope="col">Provider</th>
                                                            <th scope="col">วัตถุประสงค์</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">gtm_debug, gtm_auth, gtm_preview, _gcl_aw</th>
                                                            <td>Google Tag Manager</td>
                                                            <td>ใช้สำหรับเก็บพฤติกรรมการใช้งานในเว็บไซต์ เพื่อนำไปปรับปรุงผลิตภัณฑ์และเว็บไซต์ให้มีประสิทธิภาพยิ่งขึ้น</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">_hjid, __hs*, hubspotutk, _hjIncludedInSample</th>
                                                            <td>Hotjar</td>
                                                            <td>ใช้สำหรับเก็บพฤติกรรมการใช้งานในเว็บไซต์ เพื่อนำไปปรับปรุงผลิตภัณฑ์และเว็บไซต์ให้มีประสิทธิภาพยิ่งขึ้น</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">_ga, _gid, _gat, _gac_UA-*</th>
                                                            <td>Google Analytic</td>
                                                            <td>ใช้สำหรับเก็บพฤติกรรมการใช้งานในเว็บไซต์ เพื่อนำไปปรับปรุงผลิตภัณฑ์และเว็บไซต์ให้มีประสิทธิภาพยิ่งขึ้น</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4>Advertising Cookies</h4>
                                    <div class="accordion" id="accordionExample3">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                คุกกี้เพื่อการโฆษณา
                                            </button>
                                            </h2>
                                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample3">
                                            <div class="accordion-body">
                                                <p>คุกกี้เพื่อการโฆษณา (Advertising Cookies) คือ คุกกี้ที่จะจดจำการตั้งค่าของท่านในการเข้าใช้งานหน้าเว็บไซต์ และนำไปใช้เป็นข้อมูลประกอบการปรับเปลี่ยนหน้าเว็บไซต์เพื่อนำเสนอโฆษณาที่เหมาะสมกับท่านมากที่สุดเท่าที่จะเป็นไปได้ ตัวอย่างเช่น การเลือกแสดงโฆษณาสินค้าที่ท่านสนใจ การป้องกันหรือการจำกัดจำนวนครั้งที่ท่านจะเห็นหน้าเว็บไซต์ของโฆษณาซ้ำๆ  เพื่อช่วยวัดความมีประสิทธิผลของโฆษณา</p>
                                                <table class="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ชื่อคุกกี้</th>
                                                            <th scope="col">Provider</th>
                                                            <th scope="col">วัตถุประสงค์</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">external_id</th>
                                                            <td>Sellsuki</td>
                                                            <td>ใช้สำหรับเก็บพฤติกรรมการใช้งานของผู้ใช้เพื่อส่งให้กับบุคคลที่สาม คุกกี้นี้ไม่สามารถระบุตัวตนของผู้ใช้ได้</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">IDE,DSID</th>
                                                            <td>DoubleClick</td>
                                                            <td>ใช้สำหรับการโฆษณาผ่านทาง Google Adwords ทำให้ Google Adwords นำเสนอผลิตภัณฑ์ให้เหมาะกับผู้ใช้งานมากขึ้น</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">fr, _fbp, _fbc</th>
                                                            <td>Facebook</td>
                                                            <td>ใช้สำหรับการโฆษณาผ่านทาง Facebook ทำให้ Facebook นำเสนอผลิตภัณฑ์ให้เหมาะกับผู้ใช้งานมากขึ้น</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">bcookie, lang, lidc, lissc, li_sugr, UserMatchHistory</th>
                                                            <td>Linkedin</td>
                                                            <td>ใช้สำหรับประกาศรับสมัครงานทาง Linkedin</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <label class="switch pull-right">
                                        <input v-model="PerformanceCookies" id="PerformanceCookies" type="checkbox">
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
                                    <button type="button" @click="CookieSettingAll" data-bs-dismiss="modal" class="btn btn-white-custom hvr-orange-pulse me-1 me-md-2">ยอมรับทั้งหมด</button>
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

        //console.log(StrictlyNecessaryCookies, TargetingCookies, PerformanceCookies, AdvertisingCookies)
        if(StrictlyNecessaryCookies != true && TargetingCookies != true && PerformanceCookies != true && AdvertisingCookies != true){
            setTimeout(() => this.show = true, 1000);
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
@media only screen and (max-width: 450px) {
    .accordion-body{
        padding-top: 0;
        width: 100%;
    }
}

@media only screen and (min-width: 500px) {
    .accordion-body{
        padding-top: 0;
        width: 480px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 560px) {
    .accordion-body{
        padding-top: 0;
        width: 520px;
    }
}

@media only screen and (min-width: 575px) {
    .accordion-body{
        padding-top: 0;
        width: 465px;
    }
}

.accordion-item{
    border:none;
}

.accordion-button:not(.collapsed){
    background-color: #fff !important;
    color: #212529;
    box-shadow: none;
}

.accordion-button:not(.collapsed)::after{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

thead{
    background-color: #F38100;
    color: #fff;
}

table{
    font-size: 14px;
}

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
    margin: 0;
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