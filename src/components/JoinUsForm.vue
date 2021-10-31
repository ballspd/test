<template>
<div id="JoinUsForm">
    <div class="background-main">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="text-s-16 mt-150" style="color:#50151C;">Home > Join Us ><font class="text-s-16 font-wght" style="color:#50151C"> Lorem ipsum</font></p>
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
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Last Name/นามสกุล<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Email/อีเมล<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Phone Number/เบอร์โทรศัพท์<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">How did you hear of this job vacancy? <br>คุณรู้จักตำแหน่งงานนี้ได้อย่างไร?<span class="text-danger">*</span></label>
                                <select class="form-select mt-2" placeholder="Please Select/กรุณาเลือก">
                                    <option selected value="">Please Select/กรุณาเลือก</option>
                                    <option value="Fuse">Fuse</option>
                                    <option value="Line">Line</option>
                                    <option value="Beary">Beary tech</option>
                                    <option value="Kaikong">Kaikong</option>
                                    <option value="Shipmunk">Shipmunk</option>
                                    <option value="Oc2Plus">Oc2Plus</option>
                                </select>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;"><br>Position applied for/ตำแหน่งที่สนใจ<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Expected salary/เงินเดือนที่คาดหวัง<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Resume/CV<span class="text-danger">*</span></label>
                                <div class="input-group mb-3 mt-2">
                                    <input type="file" class="form-control" @change="onFileChange" id="inputGroupFile" hidden>
                                    <input type="text" class="form-control cursor-pointer" :value="filename" for="inputGroupFile" readonly>
                                    <label class="input-group-text text-s-14 cursor-pointer" for="inputGroupFile" style="background: #FF773B;color: #FFFFFF;">Choose File</label>
                                </div>
                            </div>
                            <div class="form-group col-12 mt-5">
                                <label class="text-s-16" style="color: #373737;">Tell us about yourself <br>อยากบอกอะไรให้เรารู้เกี่ยวกับตัวคุณ*<span class="text-danger">*</span></label>
                                <textarea class="form-control mt-2" style="height:180px"></textarea>
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        ยินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของผู้สมัคร
                                    </label>
                                </div>
                            </div>
                            <hr class="mt-5 mb-3" style="border: 1px solid #E5E5E5;">
                            <div class="col-12">
                                <div class="text-center" style="width: 100%;margin-top:32px">
                                    <a href="#" class="btn btn-orange button"><span class="text-white" style="font-size:18px">Submit</span></a>
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

export default {
    name: 'JoinUsForm',
    data() {
      return {
        filename: ''
      }
    },
    methods:{
        onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.filename = files[0].name;
        }
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