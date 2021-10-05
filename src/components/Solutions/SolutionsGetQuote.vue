<template>
    <div id="SolutionsGetQuote">
      <div class="d-none d-lg-block">
        <div style="background: #F2F3F5">
          <div style="padding: 40px 80px 40px 80px">
            <div class="row">
              <div class="col-7">
                  <h1 class="font-wght text-s-30" style="color:#373737">GET A QUOTE</h1>
                  <hr style="width: 100%;height: 2px;color:#373737">
                  <h2 style="font-weight: 400;font-size: 18px;color:#373737">Please complete the form to request a quotation</h2>
                <form>
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-16 text-dark">ชื่อ*</label>
                      <input type="email" class="form-control mt-2" placeholder="Name*">
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-16 text-dark">นามสกุล*</label>
                      <input type="password" class="form-control mt-2" placeholder="Last Name*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-dark">อีเมล*</label>
                      <input type="email" class="form-control mt-2" placeholder="Email*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-dark">เบอร์โทรศัพท์*</label>
                      <input type="password" class="form-control mt-2" placeholder="Tel*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-dark">ชื่อเเบรนด์*</label>
                      <input type="email" class="form-control mt-2" placeholder="Brand*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-dark">เลือกความต้องการ*</label>
                      <select class="form-select mt-2" placeholder="interested about*">
                          <option selected value="">interested about*</option>
                          <option value="1">บริการทำโฆษณาบน Social Media</option>
                          <option value="2">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                          <option value="3">LINE Agency เปิดบัญชี LINE OA</option>
                          <option value="4">บริการจัดทำเว็บไซต์และระบบหลังบ้าน</option>
                          <option value="5">บริการ Content Marketing และ แอดมิน</option>
                      </select>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-dark">ข้อความ*</label>
                      <textarea class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-solution button" :class="{'fuse-color':type === 'Fuse','line-color':type === 'Line','akita-color':type === 'Akita'}"><span>Submit</span></button>
                  </div>
                </form>
              </div>
              <div class="col-5 text-center">
                <div v-if="type === 'Fuse'">
                  <img class="item-center" src="./../../assets/SolutionsFuse/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="position-bu" src="./../../assets/SolutionsFuse/Group171.png" alt="">
                </div>
                <div v-if="type === 'Line'">
                  <img class="item-center" src="./../../assets/SolutionsLine/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="360" src="./../../assets/SolutionsLine/Line-qrcode.png" alt="">
                  <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.png" alt="">
                </div>
                <div v-if="type === 'Akita'">
                  <img class="item-center" src="./../../assets/SolutionsAkita/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="360" src="./../../assets/SolutionsAkita/Akita-qrcode.png" alt="">
                  <div style="width:100%">
                    <img class="position-bu" width="220" src="./../../assets/SolutionsAkita/Akita-bu.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-lg-none">
        <div class="p-3">
          <div class="card-mobile">
            <div class="bg" style="padding: 20px 20px 20px 20px">
              <div class="row ps-5 pe-5 pt-4 pb-2">
                <div class="col-12 text-center">
                    <h1 class="font-wght text-s-700 text-s-24" style="color:#373737">GET A QUOTE</h1>
                    <hr class="ms-auto me-auto" style="width: 70%;height: 2px;color:#373737">
                    <font class="text-s-16 mt-2" style="color:#373737">Please complete the form to <br>request a quotation</font>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <form>
                      <div class="form-group col-12">
                        <label class="text-s-16 text-dark">ชื่อ*</label>
                        <input type="email" class="form-control mt-2" placeholder="Name*">
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">นามสกุล*</label>
                        <input type="password" class="form-control mt-2" placeholder="Last Name*">
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">อีเมล*</label>
                        <input type="email" class="form-control mt-2" placeholder="Email*">
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">เบอร์โทรศัพท์*</label>
                        <input type="password" class="form-control mt-2" placeholder="Tel*">
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">ชื่อเเบรนด์*</label>
                        <input type="email" class="form-control mt-2" placeholder="Brand*">
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">เลือกความต้องการ*</label>
                        <select class="form-select mt-2" placeholder="interested about*">
                            <option selected value="">interested about*</option>
                            <option value="1">บริการทำโฆษณาบน Social Media</option>
                            <option value="2">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                            <option value="3">LINE Agency เปิดบัญชี LINE OA</option>
                            <option value="4">บริการจัดทำเว็บไซต์และระบบหลังบ้าน</option>
                            <option value="5">บริการ Content Marketing และ แอดมิน</option>
                        </select>
                      </div>
                      <div class="form-group col-12 mt-3">
                        <label class="text-s-16 text-dark">ข้อความ*</label>
                        <textarea class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                      </div>
                    <div class="text-center mt-4 mb-2" style="width: 100%">
                      <button type="submit" class="btn-solution button" :class="{'fuse-color':type === 'Fuse','line-color':type === 'Line','akita-color':type === 'Akita'}" style="width: 150px !important"><span>Submit</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4" style="height: 655px;">
            <div v-if="type === 'Fuse'">
              <img class="item-center" src="./../../assets/SolutionsFuse/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="position-bu" src="./../../assets/SolutionsFuse/Group171.png" alt="">
            </div>
            <div v-if="type === 'Line'">
              <img class="item-center" src="./../../assets/SolutionsLine/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="360" src="./../../assets/SolutionsLine/Line-qrcode.png" alt="">
              <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.png" alt="">
            </div>
            <div v-if="type === 'Akita'">
              <img class="item-center" src="./../../assets/SolutionsAkita/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="360" src="./../../assets/SolutionsAkita/Akita-qrcode.png" alt="">
              <img class="position-bu" src="./../../assets/SolutionsAkita/Akita-bu.png" alt="">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'SolutionsGetQuote',
    props:['type']
}
</script>

<style scoped>

.btn-solution {
  width: 184px !important;
  height: 40px !important;
  color: #FFFFFF !important;
  box-sizing: border-box !important;
  border-radius: 20px !important;
}

.card-mobile{
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #F2F3F5
}

.fuse-color{
  background-color: #542D84 !important;
  border: 1px solid #542D84 !important
}

.line-color{
  background-color: #2AAF5F !important;
  border: 1px solid #2AAF5F !important
}

.akita-color{
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.position-bu{
  margin-bottom: -90px;
  margin-top: 25px;
}
</style>