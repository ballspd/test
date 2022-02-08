 <template>
    <div id="NavMobile">
        
            <nav class="navbar fixed-top" style="background-color: #F6ECE0;">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" @click="display_manu = !display_manu" >
                        <i class="bi bi-list" style="font-size: 35px;"></i>
                    </button>
                    <img src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Sellsuki_logo_01_3_41353765c4.png">
                    <a href="tel:020263250" target="_blank"><img class="shadow" src="./../../assets/mobile/Vector.png" style="background-color: #FFFFFF;border-radius: 50px;"></a>
                </div>
            </nav>
            <div v-if="display_manu" class="side-bg"></div>
            <div class="sidenav animate__animated" :class="{'animate__fadeInLeft':display_manu,'animate__fadeOutLeft':!display_manu}">
                <div class="row p-3">
                    <div class="col-5">
                    <div class="p-1" style="background: #50151C;border-radius: 2px;">
                        <div class="row text-center">
                        <div class="col-6">
                            <a @click="langChange('en'),lang = 'en'" :class="{'active-lang':active_lang == 'en'}" class="text-s-18 p-1" style="color:#FFFFFF">EN</a>
                        </div>
                        <div class="col-6">
                            <a @click="langChange('th-TH'),lang = 'th-TH'" :class="{'active-lang':active_lang == 'th-TH'}" class="text-s-18 p-1" style="color:#FFFFFF">ไทย</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-7">
                    <a class="closebtn" style="cursor:pointer;float: right" @click="display_manu = false"><i class="bi bi-x"></i></a>
                    </div>
                </div>
                <div class="row p-3 menu">
                    <div class="col-12">
                        <div v-if="component == ''">
                            <router-link @click="display_manu = false" to="/">Home</router-link>
                            <!-- <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'ServicesMenu'" class="d-flex" >
                            <a href="#">Services</a>
                            <i class="ms-auto bi bi-chevron-right"></i>
                            </div> -->
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'SolutionsMenu'" class="d-flex" >
                            <a href="#">Solutions</a>
                            <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/AboutUs">About Us</router-link>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Portfolio">Portfolio</router-link>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Blog">Blog</router-link>

                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/ContactUs">Contact Us</router-link>
                            
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/JoinUs">Join Us</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>

                        <div v-if="component == 'SolutionsMenu'">
                            <a @click="component = ''"><i class="bi bi-chevron-left me-2"></i> Back</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <font class="text-w-700 text-s-18" style="color:#50151C;">Solutions</font>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'Group'" class="d-flex" >
                                <a href="#">Group</a>
                                <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'BU'" class="d-flex" >
                                <a href="#">BU</a>
                                <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                        <div v-if="component == 'Group'">
                            <a @click="component = 'SolutionsMenu'"><i class="bi bi-chevron-left me-2"></i> Back</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <font class="text-w-700 text-s-18" style="color:#50151C;">Group</font>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/TypesOfBusiness/BusinessOwner">Business Owner</router-link>                           
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/TypesOfBusiness/OnlineMerchant">Online Merchant</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/TypesOfBusiness/Corporate">Corporate</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                        <div v-if="component == 'BU'">
                            <a @click="component = 'SolutionsMenu'"><i class="bi bi-chevron-left me-2"></i> Back</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <font class="text-w-700 text-s-18" style="color:#50151C;">BU</font>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Fuse">Fuse Advertising</router-link>                           
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Line">LINE Agency</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Kaikong">Kaikong Content Marketing</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Beary">Beary Web & Tech Service</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Akita">Akita Fulfillment</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Shipmunk">Shipmunk : Dropshipping</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <router-link @click="display_manu = false,scrollToTop()" to="/Solutions/Oc2Plus">Oc2Plus : Customer Data Platform</router-link>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'NavMobile',
    data () {
        const lang = localStorage.getItem('lang') || 'th-TH';
        return {
            component: '',
            display_manu: false,
            lang:lang,
            active_lang:lang
        }
    },
    methods:{
        langChange(event){
            localStorage.setItem('lang',event);
            window.location.reload();
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    font-size: 18px;
    color: #50151C;
    display: block;
    transition: 0.3s;
}

a:hover {
    color: #50151C;
}

.sidenav {
  height: 100%;
  width: 80%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 15px;
}

.side-bg {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: #000000;
  overflow-x: hidden;
  transition: 0.5s;
  opacity: 0.5;
}

.sidenav .closebtn {
  font-size: 36px;
  bottom: 5px;
  position: relative;
}

.active-lang{
  background: #F6ECE0;
  color:#50151C !important;
  font-family: 'PromptBold', sans-serif !important;
  font-weight: bold !important;
}
</style>