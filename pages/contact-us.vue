<template>
<div id="ContactUs">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;"><NuxtLink @click="scrollToTop" :to="localePath('/')">{{ $t("page.Home") }}</NuxtLink> <i class="bi bi-chevron-right"></i> <font class="text-s-16 text-w-700" style="color:#50151C"> {{ $t("page.CONTACTUS.ContactUs") }}</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <h1 class="font-wght" style="font-size:64px;color:#50151C">{{ $t("page.CONTACTUS.CONTACTUS") }}</h1>
                                <p class="text-s-16" style="color:#50151C">{{ $t("page.CONTACTUS.mata") }}</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 text-start" style="color:#50151C;margin-top:95px !important">
                            <NuxtLink @click="scrollToTop" :to="localePath('/')" style="color:#50151C">{{ $t("page.Home") }}</NuxtLink> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-16 text-w-700"><span style="color:#50151C"> {{ $t("page.CONTACTUS.CONTACTUS") }}</span></font>
                        </p>
                        <h1 class="font-wght mt-3" style="font-size:36px;color:#50151C">{{ $t("page.CONTACTUS.CONTACTUS") }}</h1>
                        <p class="text-s-16" style="color:#50151C">{{ $t("page.CONTACTUS.mata") }}</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Contact_Us_01_1_69a79d2720.webp" alt="Header Contact Us" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Contact_Us_01_1_69a79d2720.webp" alt="Header Contact Us ">
                </div>
            </div>
            <div class="crad mt-5">
                <p class="d-block d-xl-none d-xxl-none text-center text-s-30 font-wght pt-4" style="color:#50151C">{{ $t("page.CONTACTUS.CONTACTUS") }}</p>
                <div class="row padding-contact">
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 border-contact">
                       <form v-on:submit.prevent="submitForm">
                        <div class="row">
                            <div class="form-group col-12">
                                <label class="text-s-16" style="color: #373737;">Name<span class="text-danger">*</span></label>
                                <input v-model="form.name" id="name" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.name}">
                                <div v-if="validate">
                                    <p v-if="!form.name" class="text-danger mb-0">กรุณาระบุ</p>
                                </div>
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Phone Number<span class="text-danger">*</span></label>
                                <input v-model="form.phone_number" id="phone_number" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.phone_number}">
                                <div v-if="validate">
                                    <p v-if="!form.phone_number" class="text-danger mb-0 mb-0">กรุณาระบุ</p>
                                </div>
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Email<span class="text-danger">*</span></label>
                                <input v-model="form.email" id="email" type="email" class="form-control mt-2" :class="{'border border-danger': validate && !form.email}">
                                <div v-if="validate">
                                    <p v-if="!form.email" class="text-danger mb-0">กรุณาระบุ</p>
                                </div>
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Message<span class="text-danger">*</span></label>
                                <textarea v-model="form.message" id="message" class="form-control mt-2" :class="{'border border-danger': validate && !form.message}" style="height:180px"></textarea>
                                <div v-if="validate">
                                    <p v-if="!form.message" class="text-danger mb-0">กรุณาระบุ</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center" style="width: 100%;margin-top:32px">
                            <button type="submit" class="btn-orange hvr-back-pulse"><span style="font-size:18px"><i class="bi bi-cursor-fill"></i> Send</span></button>
                        </div>
                        </form>
                    </div>
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                        <img class="item-center mt-5 cover-img" width="193" height="82" src="../assets/logo-Sellsuki.svg" alt="sellsuki-logo">
                        <p class="text-s-16 mt-4" style="color:#23243D">Sellsuki Co,. Ltd. อาคาร 4 Simplex <br>ชั้น 3 เลขที่ 10/39 ถนนรัชดาภิเษก <br>แขวงจันทรเกษม เขตจตุจักร กรุงเทพมหานคร 10900</p>
                        <p class="text-s-16 mt-5" style="color:#23243D">โทรศัพท์ : 02-026-3250</p>
                        <img class="item-center mt-4" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/sellsuki_actor_2_0237634e46.webp" alt="sellsuki actor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <GMapMap
                            :center="{lat: 13.8019328, lng: 100.5751006}"
                            :zoom="20"
                            map-type-id="terrain"
                            style="width: 100%; height: 400px"
                        >
                        <GMapCluster>
                        <GMapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=m.position"
                        />
                        </GMapCluster>
                        </GMapMap>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Preloader from '@/components/Preloader'
import axios from 'axios'
export default {
    name: 'ContactUs',
    layout:"Layout",
    components: {
        Preloader
    },
    head() {
      return {
          title: "Contact Us"
      };
    },
    data() {
      return {
          validate:false,
          form: {
                    name:'',
                    phone_number:'',
                    email:'',
                    message:''
          },
          center: {lat: 13.8019328, lng: 100.5751006},
          markers: [
          {
            position: {
              lat: 13.8019328, lng: 100.5751006
            },
          }
          , // Along list of clusters
          ]
      }
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
        submitForm() {
            if(this.form.name == '' || this.form.phone_number == '' || this.form.email == '' || this.form.message == ''){
                this.validate = true
                return false
            }
            if (this.form.name != '' && this.form.phone_number != '' && this.form.email != '' && this.form.message != '') {

                //const params = new URLSearchParams()
                //params.append('title', 'web ssk test')
                //params.append('user_id', 6542084)
                //params.append('pipeline_id', 4)

                //const config = {
                //    headers: {
                //        'Content-Type': 'application/x-www-form-urlencoded'
                //    }
                //}

                //var api_token = "4e9d4073e72ab32c7ffff64dcee32836be9954f8"

                //this.axios.post('https://api.pipedrive.com/v1/leads?api_token='+ api_token, params, config)
                //.then(
                //    this.$swal.fire(
                //        'Success',
                //        'Send information successfully',
                //        'success'
                //    )
                //).catch((error) => {
                //    this.$swal.fire({
                //        icon: 'error',
                //        title: 'Oops...',
                //        text: error,
                //    })
                //})
                const data = { 
                    "title": this.form.name +' (Contact us)',
                    "owner_id": 6542084,
                    "person_id": null,
                    "organization_id": null,
                    "dd1bbc90338efc249596b00527d3d2d47ae4fb46" : this.form.name,
                    "f4f7afcb9529346468dd737251033edf6c04847b": this.form.phone_number,
                    "1681c8caf179eaa804c3abe3bdd3456bf053fd38": this.form.email,
                    "1bc506f7722eb25f5f7bd1fdfaad6d06ebbe14b4": this.form.message
                };

                //console.log(data)

                var api_token = "4e9d4073e72ab32c7ffff64dcee32836be9954f8"
                axios.post('https://api.pipedrive.com/v1/leads?api_token='+ api_token, data)
                .then(
                    this.$router.push({ path: '/thankyou/contact-us' }),
                    this.scrollToTop()
                ).catch((error) => {
                    alert(error)
                })

                this.form.name == ''
                this.form.phone_number == ''
                this.form.email == ''
                this.form.message == ''
            }
        }
    }
}
</script>

<style scoped>
    
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .padding-contact{
    padding:30px 30px 40px 30px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .padding-contact{
    padding:30px 30px 40px 30px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .padding-contact{
    padding:30px 50px 30px 50px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .padding-contact{
    padding:40px 60px 40px 60px;
  }
    .border-contact{
      border-right: 1px solid #E5E5E5;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .padding-contact{
    padding:60px 80px 80px 80px;
  }
  .border-contact{
      border-right: 1px solid #E5E5E5;
  }
}
</style>