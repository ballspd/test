<template>
    <div id="GetQuote">
        <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
          <div style="padding: 40px 80px 40px 80px">
            <div class="row">
              <div class="col-12">
                  <font style="font-weight: 700;font-size: 30px;color:#ffffff">GET A QUOTE</font>
                  <hr style="width: 578px;height: 2px;color:#FFFFFF">
                  <font style="font-weight: 400;font-size: 18px;color:#ffffff">Please complete the form to request a quotation</font>
              </div>
            </div>
            <div class="row">
              <div class="col-7">
                <form>
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">ชื่อ*</label>
                      <input type="email" class="form-control mt-2" placeholder="Name*">
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">นามสกุล*</label>
                      <input type="password" class="form-control mt-2" placeholder="Last Name*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">อีเมล*</label>
                      <input type="email" class="form-control mt-2" placeholder="Email*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เบอร์โทรศัพท์*</label>
                      <input type="password" class="form-control mt-2" placeholder="Tel*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">ชื่อเเบรนด์*</label>
                      <input type="email" class="form-control mt-2" placeholder="Brand*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เลือกความต้องการ*</label>
                      <input type="password" class="form-control mt-2" placeholder="interested about*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">ข้อความ*</label>
                      <textarea class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-orange button"><span>Submit</span></button>
                  </div>
                </form>
              </div>
              <div class="col-5">
                <img class="mt-4" src="./../assets/image52.png" style="position: relative;">
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetQuote'
}
</script>

<style>

</style>