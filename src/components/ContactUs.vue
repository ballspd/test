<template>
<div id="ContactUs">
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-xl-block d-xxl-block">
                        <p class="text-s-16" style="color:#50151C;margin-top: 150px;">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Contact Us</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td style="height: 350px !important;">
                                <font class="font-wght" style="font-size:64px;color:#50151C">Contact Us</font>
                                <p class="text-s-16 text-start" style="color:#50151C">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 mt-4 text-start" style="color:#50151C">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Contact Us</font></p>
                        <font class="font-wght mt-3" style="font-size:36px;color:#50151C">Contact US</font>
                        <p class="text-s-16" style="color:#50151C">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="./../assets/image60.png" style="margin-top: 40px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="./../assets/mobile/image60.png">
                </div>
            </div>
            <div class="crad mt-4">
                <p class="d-block d-xl-none d-xxl-none text-center text-s-30 font-wght pt-4" style="color:#50151C">Contact Us</p>
                <div class="row padding-contact">
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 border-contact">
                       <form>
                        <div class="row">
                            <div class="form-group col-12">
                                <label class="text-s-16" style="color: #373737;">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Phone Number<span class="text-danger">*</span></label>
                                <input type="number" class="form-control mt-2">
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Email<span class="text-danger">*</span></label>
                                <input type="email" class="form-control mt-2">
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label class="text-s-16" style="color: #373737;">Message<span class="text-danger">*</span></label>
                                <textarea class="form-control mt-2" style="height:180px"></textarea>
                            </div>
                        </div>
                        <div class="text-center" style="width: 100%;margin-top:32px">
                            <button type="submit" class="btn-orange button"><span style="font-size:18px"><i class="bi bi-cursor-fill"></i> Send</span></button>
                        </div>
                        </form>
                    </div>
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                        <img class="item-center mt-5" width="193" height="82" src="./../assets/image103.png">
                        <p class="text-s-16 mt-4" style="color:#23243D">Sellsuki Co,. Ltd. อาคาร 4 Simplex <br>ชั้น 3 เลขที่ 10/39 ถนนรัชดาภิเษก <br>แขวงจันทรเกษม เขตจตุจักร กรุงเทพมหานคร 10900</p>
                        <p class="text-s-16 mt-5" style="color:#23243D">โทรศัพท์ : 02-026-3250</p>
                        <img class="item-center mt-4" src="./../assets/image65.png" >
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

export default {
    name: 'ContactUs',
    data() {
    return {
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