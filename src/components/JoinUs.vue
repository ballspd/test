<template>
<div id="JoinUs">
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-16 mt-150" style="color:#50151C;">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Join Us</font></p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <font class="font-wght" style="font-size:64px;color:#50151C">Join Us</font>
                                <p class="text-s-16" style="color:#50151C">มาเป็นครอบครัวเดียวกัน กับ Sellsuki :)</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-16 mt-4 text-start" style="color:#50151C">Home > <font class="text-s-16 text-w-700" style="color:#50151C">Join Us</font></p>
                        <font class="font-wght mt-3" style="font-size:36px;color:#50151C">Join Us</font>
                        <p class="text-s-16" style="color:#50151C">มาเป็นครอบครัวเดียวกัน กับ Sellsuki :)</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="./../assets/image60.png" style="margin-top: 40px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="./../assets/mobile/image60.png">
                </div>
            </div>
            <div class="crad mt-4">
                <div class="row padding-contact">
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 border-contact">

                    </div>
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'JoinUs',
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