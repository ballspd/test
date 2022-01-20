<template>
    <div id="GetQuote">
      <div class="d-none d-xl-block d-xxl-block">
        <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
          <div style="padding: 40px 80px 40px 80px">
            <div class="row">
              <div class="col-12">
                  <font style="font-weight: 700;font-size: 30px;color:#ffffff">GET A QUOTE</font>
                  <hr style="width: 100%;height: 2px;color:#FFFFFF">
                  <font style="font-weight: 400;font-size: 18px;color:#ffffff">Please complete the form to request a quotation</font>
              </div>
            </div>
            <div class="row">
              <div class="col-7">
                <form v-on:submit.prevent="submitForm">
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">ชื่อ*</label>
                      <input v-model="form.fname" type="text" class="form-control mt-2" placeholder="First Name*">
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">นามสกุล*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2" placeholder="Last Name*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">อีเมล*</label>
                      <input v-model="form.email" type="email" class="form-control mt-2" placeholder="Email*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เบอร์โทรศัพท์*</label>
                      <input v-model="form.tel" type="text" class="form-control mt-2" placeholder="Tel*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">ชื่อเเบรนด์*</label>
                      <input v-model="form.brand" type="text" class="form-control mt-2" placeholder="Brand*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เลือกความต้องการ*</label>
                      <select v-model="form.interested" class="form-select mt-2" placeholder="interested about*">
                          <option selected value="">interested about*</option>
                          <option value="บริการทำโฆษณาบน Social Media">บริการทำโฆษณาบน Social Media</option>
                          <option value="บริการ Fulfillment เก็บ แพ็ก ส่ง">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                          <option value="LINE Agency เปิดบัญชี LINE OA">LINE Agency เปิดบัญชี LINE OA</option>
                          <option value="บริการจัดทำเว็บไซต์และระบบหลังบ้าน">บริการจัดทำเว็บไซต์และระบบหลังบ้าน</option>
                          <option value="บริการ Content Marketing และ แอดมิน">บริการ Content Marketing และ แอดมิน</option>
                      </select>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">ข้อความ*</label>
                      <textarea v-model="form.message" class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-orange hvr-back-pulse"><span>Submit</span></button>
                  </div>
                </form>
              </div>
              <div class="col-5">
                <img class="mt-4" src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/GET_A_QUOTE_db09b3e246.webp" style="position: relative;margin-left:-25px">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-xl-none d-xxl-none">
        <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
          <div class="bg" style="padding: 20px 20px 20px 20px">
            <div class="row ps-5 pe-5 pb-2">
              <div class="col-12 text-center">
                  <font style="font-weight: 700;font-size: 24px;color:#ffffff">GET A QUOTE</font>
                  <hr style="width: 100%;height: 2px;color:#FFFFFF">
                  <font style="font-weight: 400;font-size: 16px;color:#ffffff">Please complete the form to request a quotation</font>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <form v-on:submit.prevent="submitForm">
                    <div class="form-group col-12">
                      <label class="text-s-16 text-white">ชื่อ*</label>
                      <input v-model="form.fname" type="text" class="form-control mt-2" placeholder="First Name*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">นามสกุล*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2" placeholder="Last Name*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">อีเมล*</label>
                      <input v-model="form.email" type="email" class="form-control mt-2" placeholder="Email*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">เบอร์โทรศัพท์*</label>
                      <input v-model="form.tel" type="text" class="form-control mt-2" placeholder="Tel*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">ชื่อเเบรนด์*</label>
                      <input v-model="form.brand" type="text" class="form-control mt-2" placeholder="Brand*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">เลือกความต้องการ*</label>
                      <select v-model="form.interested" class="form-select mt-2" placeholder="interested about*">
                          <option selected value="">interested about*</option>
                          <option value="บริการทำโฆษณาบน Social Media">บริการทำโฆษณาบน Social Media</option>
                          <option value="บริการ Fulfillment เก็บ แพ็ก ส่ง">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                          <option value="LINE Agency เปิดบัญชี LINE OA">LINE Agency เปิดบัญชี LINE OA</option>
                          <option value="บริการจัดทำเว็บไซต์และระบบหลังบ้าน">บริการจัดทำเว็บไซต์และระบบหลังบ้าน</option>
                          <option value="บริการ Content Marketing และ แอดมิน">บริการ Content Marketing และ แอดมิน</option>
                      </select>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">ข้อความ*</label>
                      <textarea v-model="form.message" class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                    </div>
                  <div class="text-center mt-4 mb-2" style="width: 100%">
                    <button type="submit" class="btn-orange hvr-back-pulse" style="width: 150px !important"><span>Submit</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'GetQuote',
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
          }
      }
    },
    methods:{
        submitForm() {
            if(this.form.fname == '' || this.form.lname == '' || this.form.tel == '' || this.form.email == '' || this.form.brand == '' || this.form.interested == '' || this.form.message == ''){
                this.$swal.fire(
                                'ข้อมูลไม่ครบถ้วน',
                                'กรุณากรอกข้อมูลให้ครบถ้วน',
                                'warning'
                            )
                return false
            }
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You want to send a message",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confilm'
                }).then((result) => {
                    if (result.isConfirmed) {
                        var fullname = this.form.fname + " " + this.form.lname
                        const data = { 
                            "title": "Get A Quote Sellsuki website",
                            "owner_id": 6542084,
                            "person_id": null,
                            "organization_id": null,
                            "dd1bbc90338efc249596b00527d3d2d47ae4fb46" : fullname,
                            "f4f7afcb9529346468dd737251033edf6c04847b": this.form.tel,
                            "1681c8caf179eaa804c3abe3bdd3456bf053fd38": this.form.email,
                            "1bc506f7722eb25f5f7bd1fdfaad6d06ebbe14b4": this.form.message,
                            "0241c0c2c487c8f1fb6c09a1c20f0bc343466a53": this.form.brand,
                            "c8a12d868709dfba7851c4a17313adc3eb92b8f9": this.form.interested
                        };

                        //console.log(data)

                        var api_token = "4e9d4073e72ab32c7ffff64dcee32836be9954f8"
                        this.axios.post('https://api.pipedrive.com/v1/leads?api_token='+ api_token, data)
                        .then(
                            this.$swal.fire(
                                'Success',
                                'Send information successfully',
                                'success'
                            )
                        ).catch((error) => {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: error,
                            })
                        })

                        this.form.fname == ''
                        this.form.lname == ''
                        this.form.tel == ''
                        this.form.email == ''
                        this.form.message == ''
                        this.form.brand == ''
                        this.form.interested == ''
                    }
                })
        }
    }
}
</script>

<style scoped>
.bg{
  background-image: url('https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/GET_A_QUOTE_2_2d7a8b05a4.webp');
  background-position: center;
  background-repeat: no-repeat;
}
</style>