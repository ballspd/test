<template>
<div id="JoinUsForm">
    <Preloader/>
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150" style="color:#50151C;"><router-link @click="scrollToTop" to="/">Home</router-link> <i class="bi bi-chevron-right"></i> <router-link @click="scrollToTop" to="/JoinUs">Join Us</router-link> <i class="bi bi-chevron-right"></i> <font class="text-s-16 font-wght" style="color:#50151C"> {{this.$route.query.position}}</font></p>
                </div>
            </div>
        </div>
        <div class="bg mt-4">
            <div style="background: rgba(0, 0, 0, 0.3);">
                <div class="container" style="display: flex;height: 300px;"><font class="font-wght mt-auto mb-auto ms-4" style="font-size:55px;color:#FBFBFB;text-shadow: 1px 1px 1px #000;">{{this.$route.query.position}}</font></div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-4 text-color-this-page" style="margin-top: -25px !important;">
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                  <div class="col-12 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                       <form>
                        <div class="row">
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">First Name/ชื่อ<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="firstName" id="firstName" name="firstName">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Last Name/นามสกุล<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="lastName" id="lastName" name="lastName">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Email/อีเมล<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="email" id="email" name="email">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Phone Number/เบอร์โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="phoneNumber" id="phoneNumber" name="phoneNumber">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">How did you hear of this job vacancy? <br>คุณรู้จักตำแหน่งงานนี้ได้อย่างไร?<span class="text-danger">*</span></label>
                                <select class="form-select mt-2" placeholder="Please Select/กรุณาเลือก" v-model="jobVacancy" id="jobVacancy" name="jobVacancy">
                                    <option selected value="">Please Select/กรุณาเลือก</option>
                                    <option value="Jobsdb">Jobsdb</option>
                                    <option value="Jobthai">Jobthai</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="พนักงานของบริษัท">พนักงานของบริษัท</option>
                                    <option value="Blognone">Blognone</option>
                                    <option value="อื่นๆ เช่นการบอกต่อ">อื่นๆ เช่นการบอกต่อ</option>
                                </select>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;"><br>Position applied for/ตำแหน่งที่สนใจ<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="position" id="position" name="position">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Expected salary/เงินเดือนที่คาดหวัง<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" v-model="expectedSalary" id="expectedSalary" name="expectedSalary">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Resume/CV<span class="text-danger">*</span></label>
                                <div class="input-group mb-3 mt-2">
                                    <input type="file" ref="file" class="form-control" @change="onChangeFileUpload()" id="inputGroupFile" hidden>
                                    <input type="text" class="form-control cursor-pointer" :value="filename" for="inputGroupFile" readonly>
                                    <label class="input-group-text text-s-14 cursor-pointer" for="inputGroupFile" style="background: #FF773B;color: #FFFFFF;">Choose File</label>
                                </div>
                            </div>
                            <div class="form-group col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Tell us about yourself <br>อยากบอกอะไรให้เรารู้เกี่ยวกับตัวคุณ*<span class="text-danger">*</span></label>
                                <textarea class="form-control mt-2" style="height:180px" v-model="tellUs" id="tellUs" name="tellUs"></textarea>
                            </div>

                        </div>
                        </form>
                        <div class="row mt-5 mb-5">
                            <div class="col-12"><p class="text-s-18">ข้าพเจ้าได้อ่านเเละเข้าใจข้อความทั้งหมดซึ่งระบุไว้ในหนังสือยินยอมฉบับนี้โดยตลอดเเล้ว จึงได้ลงลายมือชื่อไว้เป็นสำคัญ</p></div>
                            <div class="col-12"><!-- Button trigger modal -->
                                <a href="" data-bs-toggle="modal" data-bs-target="#Modaldis" style="color:#1D6BF6 !important;text-decoration: underline !important;">ดูรายละเอียด</a>
                            </div>
                            
                            
                            <!-- Modal -->
                            <div class="modal fade" id="Modaldis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-5">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="checkbox" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        ยินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของผู้สมัคร
                                    </label>
                                </div>
                            </div>
                            <hr class="mt-5 mb-3" style="border: 1px solid #E5E5E5;">
                            <div class="col-12">
                                <div class="text-center" style="width: 100%;margin-top:32px">
                                    <a href="#" @click="submitForm()" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Submit</span></a>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Preloader from '@/components/Preloader';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_QloagcVOZPqf6VjPjBCaI");

export default {
    name: 'JoinUsForm',
    components: {
        Preloader
    },
    data() {
      return {
        responseData:[],
        files:'',
        filename:'',
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        jobVacancy:'',
        position:'',
        filebase64:'',
        expectedSalary:'',
        tellUs: '',
        checkbox:''
      }
    },
    methods:{
        onChangeFileUpload(){
            this.files = this.$refs.file.files[0];
            console.log(this.files);
            this.filename = this.$refs.file.files[0].name;
        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },

        submitForm(){
            if(this.filename == '' || this.firstName == '' || this.lastName == '' || this.email == '' || this.phoneNumber == '' || this.jobVacancy == '' || this.position == '' || this.expectedSalary == '' || this.tellUs == ''){
                this.$swal.fire(
                                'ข้อมูลไม่ครบถ้วน',
                                'กรุณากรอกข้อมูลให้ครบถ้วน',
                                'warning'
                            )
                return false
            }
            if(this.checkbox != true){
                this.$swal.fire(
                                'ยินยอมให้ใช้ข้อมูล',
                                'กรุณายินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของผู้สมัคร',
                                'warning'
                            )
                return false
            }

            if (this.$refs.file.files){
                let formData = new FormData();
                formData.append('files', this.files);

                this.axios.post('upload',
                formData,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                        }
                ).then(response => (this.responseData = response.data))
                .catch(function(){
                    console.log('FAILURE!!');
                });
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
                        try {
                            this.sendEmail()
                            this.$swal.fire(
                                'Success',
                                'Send information successfully',
                                'success'
                            )
                        } catch(error) {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: error,
                            })
                        }
                    }
                })
        },
        sendEmail() {
            var name = this.firstName + ' ' + this.lastName
            var email = this.email
            var phoneNumber = this.phoneNumber
            var jobVacancy = this.jobVacancy
            var position = this.position
            var expectedSalary = this.expectedSalary
            var tellUs = this.tellUs

            try {
                emailjs.send("service_l6knyfr","template_bjt8m9e",{
                    name: name,
                    email: email,
                    phone_number:phoneNumber,
                    job_vacancy:jobVacancy,
                    position:position,
                    expected_salary:expectedSalary,
                    tell_us:tellUs,
                    file_cv: this.responseData[0].url
                });
            } catch(error) {
                console.log({error})
            }
            // Reset form field
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.phoneNumber = ''
            this.jobVacancy = ''
            this.position = ''
            this.expectedSalary = ''
            this.tellUs = ''
            this.filebase64 = ''
        },
    }
}
</script>

<style scoped>

.bg{
  background: url('./../assets/1-Developer.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-color-this-page{
    color: #373737;
}

button{
    opacity: 0;
}

.card {
  background: #FBFBFB;
  border: 1px solid #E5E5E5 !important;
  box-sizing: border-box;
  border-radius: 10px;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

.carousel-indicators {
    opacity: .8;
}

a {
  color: #15304E !important;
}

i {
  color: #15304E !important;
}

.accordion-item{
  border-bottom: 1px solid #E5E5E5;
  border-right: 0;
  border-left: 0;
  background-color:#FBFBFB;
}

.accordion-button{
  background-color:#FBFBFB;
}

.accordion-button:not(.collapsed){
  color: none;
  background-color: #F2F3F5;
  box-shadow: none;
}

.accordion-button:not(.collapsed)::after{
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>