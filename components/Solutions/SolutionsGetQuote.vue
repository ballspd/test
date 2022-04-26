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
                <form v-on:submit.prevent="submitForm">
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-16 text-text-dark">{{ $t("form.FirstName") }}*</label>
                      <input v-model="form.fname" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.fname}" placeholder="First Name*">
                      <div v-if="validate">
                          <p v-if="!form.fname" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-16 text-dark">{{ $t("form.LastName") }}*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.lname}" placeholder="Last Name*">
                      <div v-if="validate">
                          <p v-if="!form.lname" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Email") }}*</label>
                      <input v-model="form.email" type="email" class="form-control mt-2" :class="{'border border-danger': validate && !form.email}" placeholder="Email*">
                      <div v-if="validate">
                          <p v-if="!form.email" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Tel") }}*</label>
                      <input v-model="form.tel" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.tel}" placeholder="Tel*">
                      <div v-if="validate">
                          <p v-if="!form.tel" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Brand") }}*</label>
                      <input v-model="form.brand" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.brand}" placeholder="Brand*">
                      <div v-if="validate">
                          <p v-if="!form.brand" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-dark">{{ $t("form.interestedabout") }}*</label>
                      <select v-model="form.interested" class="form-select mt-2" :class="{'border border-danger': validate && !form.interested}" placeholder="interested about*">
                          <option selected value="">interested about*</option>
                          <option value="บริการทำโฆษณาบน Social Media">บริการทำโฆษณาบน Social Media</option>
                          <option value="บริการ Fulfillment เก็บ แพ็ก ส่ง">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                          <option value="LINE Agency เปิดบัญชี LINE OA">LINE Agency เปิดบัญชี LINE OA</option>
                          <option value="บริการจัดทำเว็บไซต์และระบบหลังบ้าน">บริการจัดทำเว็บไซต์, System, และ API</option>
                          <option value="บริการ Content Marketing และ แอดมิน">บริการ Content Marketing และ แอดมิน</option>
                      </select>
                      <div v-if="validate">
                          <p v-if="!form.interested" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-dark">{{ $t("form.Message") }}*</label>
                      <textarea v-model="form.message" class="form-control mt-2" :class="{'border border-danger': validate && !form.message}" style="height:130px" placeholder="Message*"></textarea>
                      <div v-if="validate">
                          <p v-if="!form.message" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-solution button" 
                      :class="{'fuse-color':type === 'Fuse',
                               'line-color':type === 'Line',
                               'akita-color':type === 'Akita',
                               'beary-color':type === 'Beary',
                               'kaikong-color':type === 'Kaikong',
                               'shipmunk-color':type === 'Shipmunk',
                               'oc2plus-color':type === 'Oc2Plus',
                               }"><span>Submit</span></button>
                  </div>
                </form>
              </div>
              <div class="col-5 text-center">
                <div v-if="type === 'Fuse'">
                  <img class="item-center" src="./../../assets/SolutionsFuse/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsFuse/Fuse-qrcode.png" alt="">
                  <img class="position-bu mt-5" src="./../../assets/SolutionsFuse/Fuse-bu.png" alt="">
                </div>
                <div v-if="type === 'Line'">
                  <img class="item-center" src="./../../assets/SolutionsLine/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsLine/Line-qrcode.png" alt="">
                  <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.png" alt="">
                </div>
                <div v-if="type === 'Akita'">
                  <img class="item-center" src="./../../assets/SolutionsAkita/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsAkita/Akita-qrcode.png" alt="">
                  <img class="position-bu" width="220" src="./../../assets/SolutionsAkita/Akita-bu.png" alt="">
                </div>
                <div v-if="type === 'Beary'">
                  <img class="item-center" src="./../../assets/SolutionsBeary/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsBeary/Beary-qrcode.png" alt="">
                    <img class="position-bu" width="220" src="./../../assets/SolutionsBeary/Beary-bu.png" alt="">
                </div>
                <div v-if="type === 'Kaikong'">
                  <img class="item-center" src="./../../assets/SolutionsKaikong/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Kaikong_qrcode_cece10d44a.png" alt="">
                  <img class="position-bu" width="220" src="./../../assets/SolutionsKaikong/Kaikong-bu.png" alt="">
                </div>
                <div v-if="type === 'Shipmunk'">
                  <img class="item-center" src="./../../assets/SolutionsShipmunk/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.png" alt="">
                  <img class="position-bu mt-4" width="220" src="./../../assets/SolutionsShipmunk/Shipmunk-bu.png" alt="">
                </div>
                <div v-if="type === 'Oc2Plus'">
                  <img class="item-center" src="./../../assets/SolutionsOc2plus/logo.png" alt="">
                  <p class="txt-s-16 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.png" alt="">
                  <img class="position-bu mt-2" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.png" alt="">
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
                <form v-on:submit.prevent="submitForm">
                    <div class="form-group col-12">
                      <label class="text-s-16 text-text-dark">{{ $t("form.FirstName") }}*</label>
                      <input v-model="form.fname" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.fname}" placeholder="First Name*">
                      <div v-if="validate">
                          <p v-if="!form.fname" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.LastName") }}*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.lname}" placeholder="Last Name*">
                      <div v-if="validate">
                          <p v-if="!form.lname" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Email") }}*</label>
                      <input v-model="form.email" type="email" class="form-control mt-2" :class="{'border border-danger': validate && !form.email}" placeholder="Email*">
                      <div v-if="validate">
                          <p v-if="!form.email" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Tel") }}*</label>
                      <input v-model="form.tel" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.tel}" placeholder="Tel*">
                      <div v-if="validate">
                          <p v-if="!form.tel" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Brand") }}*</label>
                      <input v-model="form.brand" type="text" class="form-control mt-2" :class="{'border border-danger': validate && !form.brand}" placeholder="Brand*">
                      <div v-if="validate">
                          <p v-if="!form.brand" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.interestedabout") }}*</label>
                      <select v-model="form.interested" class="form-select mt-2" :class="{'border border-danger': validate && !form.interested}" placeholder="interested about*">
                          <option selected value="">interested about*</option>
                          <option value="บริการทำโฆษณาบน Social Media">บริการทำโฆษณาบน Social Media</option>
                          <option value="บริการ Fulfillment เก็บ แพ็ก ส่ง">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                          <option value="LINE Agency เปิดบัญชี LINE OA">LINE Agency เปิดบัญชี LINE OA</option>
                          <option value="บริการจัดทำเว็บไซต์และระบบหลังบ้าน">บริการจัดทำเว็บไซต์, System, และ API</option>
                          <option value="บริการ Content Marketing และ แอดมิน">บริการ Content Marketing และ แอดมิน</option>
                      </select>
                      <div v-if="validate">
                          <p v-if="!form.interested" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-text-dark">{{ $t("form.Message") }}*</label>
                      <textarea v-model="form.message" class="form-control mt-2" :class="{'border border-danger': validate && !form.message}" style="height:130px" placeholder="Message*"></textarea>
                      <div v-if="validate">
                          <p v-if="!form.message" class="text-danger mb-0">กรุณาระบุ</p>
                      </div>
                    </div>
                    <div class="text-center mt-4 mb-2" style="width: 100%">
                      <button type="submit" class="btn-solution button" 
                      :class="{'fuse-color':type === 'Fuse',
                               'line-color':type === 'Line',
                               'akita-color':type === 'Akita',
                               'beary-color':type === 'Beary',
                               'kaikong-color':type === 'Kaikong',
                               'shipmunk-color':type === 'Shipmunk',
                               'oc2plus-color':type === 'Oc2Plus',
                               }"><span>Submit</span>
                      </button>
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
              <img class="item-center" width="320" src="./../../assets/SolutionsFuse/Fuse-qrcode.png" alt="">
              <img class="position-bu mt-5" src="./../../assets/SolutionsFuse/Fuse-bu.png" alt="">
            </div>
            <div v-if="type === 'Line'">
              <img class="item-center" src="./../../assets/SolutionsLine/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/SolutionsLine/Line-qrcode.png" alt="">
              <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.png" alt="">
            </div>
            <div v-if="type === 'Akita'">
              <img class="item-center" src="./../../assets/SolutionsAkita/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/SolutionsAkita/Akita-qrcode.png" alt="">
              <img class="position-bu" src="./../../assets/SolutionsAkita/Akita-bu.png" alt="">
            </div>
            <div v-if="type === 'Beary'">
              <img class="item-center" src="./../../assets/SolutionsBeary/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/SolutionsBeary/Beary-qrcode.png" alt="">
              <img class="position-bu" src="./../../assets/SolutionsBeary/Beary-bu.png" alt="">
            </div>
            <div v-if="type === 'Kaikong'">
              <img class="item-center" src="./../../assets/SolutionsKaikong/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/SolutionsKaikong/Kaikong-qrcode.png" alt="">
              <img class="position-bu" width="120" src="./../../assets/SolutionsKaikong/Kaikong-bu.png" alt="">
            </div>
            <div v-if="type === 'Shipmunk'">
              <img class="item-center" src="./../../assets/SolutionsShipmunk/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.png" alt="">
              <img class="position-bu" width="180" src="./../../assets/SolutionsShipmunk/Shipmunk-bu.png" alt="">
            </div>
            <div v-if="type === 'Oc2Plus'">
              <img class="item-center" src="./../../assets/SolutionsOc2plus/logo.png" alt="">
              <p class="txt-s-16 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
              <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.png" alt="">
              <img class="position-bu" width="120" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.png" alt="">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SolutionsGetQuote',
    props:['type'],
    data() {
      return {
          form: {
                    fname:'',
                    lname:'',
                    tel:'',
                    email:'',
                    brand:'',
                    interested:'',
                    message:''
          },
          validate: false,
      }
    },
    methods:{
        submitForm() {
            if(this.form.fname == '' || this.form.lname == '' || this.form.tel == '' || this.form.email == '' || this.form.brand == '' || this.form.interested == '' || this.form.message == ''){
                this.validate = true
                return false
            }
            if (this.form.fname != '' && this.form.lname != '' && this.form.tel != '' && this.form.email != '' && this.form.brand != '' && this.form.interested != '' && this.form.message != '') {
              var bu = ""
                if(this.type == "Fuse"){
                  bu = "82"
                }else if (this.type == "Line"){
                  bu = "83"
                }else if (this.type == "Beary"){
                  bu = "86"
                }else if (this.type == "Shipmunk"){
                  bu = ""
                }else if (this.type == "Kaikong"){
                  bu = "84"
                }else if (this.type == "Oc2Plus"){
                  bu = ""
                }else if (this.type == "Akita"){
                  bu = "85"
                }
                var fullname = this.form.fname + " " + this.form.lname
                const data = { 
                    "title": fullname + ' (' +this.type + ')',
                    "owner_id": 6542084,
                    "person_id": null,
                    "organization_id": null,
                    "dd1bbc90338efc249596b00527d3d2d47ae4fb46" : fullname,
                    "f4f7afcb9529346468dd737251033edf6c04847b": this.form.tel,
                    "1681c8caf179eaa804c3abe3bdd3456bf053fd38": this.form.email,
                    "1bc506f7722eb25f5f7bd1fdfaad6d06ebbe14b4": this.form.message,
                    "0241c0c2c487c8f1fb6c09a1c20f0bc343466a53": this.form.brand,
                    "c8a12d868709dfba7851c4a17313adc3eb92b8f9": this.form.interested,
                    "6bfcbe93be86dd7661959021d28399ed876670f3": bu,
                };

                //console.log(data)

                var api_token = "4e9d4073e72ab32c7ffff64dcee32836be9954f8"
                axios.post('https://api.pipedrive.com/v1/leads?api_token='+ api_token, data)
                .then(
                    this.$router.push({ path: '/ThankYou/'+ this.type }),
                    this.scrollToTop()
                ).catch((error) => {
                    alert(error)
                })

                this.form.fname == ''
                this.form.lname == ''
                this.form.tel == ''
                this.form.email == ''
                this.form.message == ''
                this.form.brand == ''
                this.form.interested == ''
            }
        }
    }
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

.beary-color{
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.kaikong-color{
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.shipmunk-color{
  background-color: #B1151B !important;
  border: 1px solid #B1151B !important
}

.oc2plus-color{
  background-color: #54ACDD !important;
  border: 1px solid #54ACDD !important
}

.position-bu{
  margin-bottom: -120px;
  margin-top: 65px;
  position: relative;
  z-index: 1;
}
</style>