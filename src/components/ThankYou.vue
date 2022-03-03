 <template>
<div id="ThankYou">               
    <Preloader/>
    <div class="background-main">
        <div class="container page-top">
            <div class="crad mt-4 text-color-this-page p-5">
                <div class="row justify-content-center">
                    <div class="col-5 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                        <img class="img-fluid"  src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp" alt="Header-sellsuki">
                    </div>
                </div>
                <div class="row justify-content-center pb-5">
                    <div class="col-12 text-center">
                        <h1 class="text-s-40 text-w-700">ขอบคุณสำหรับข้อมูลลงทะเบียนครับ</h1>
                        <h2 class="text-s-18 text-w-400 pt-4">ทีมให้คำปรึกษาจะติดต่อเพื่อให้ข้อมูลโดยเร็วที่สุด</h2>
                        <div class="p-5">
                            <a class="btn btn-orange text-s-16 text-w-400 hvr-back-pulse"><span>Read More</span></a>
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
    name: 'ThankYou',
    data() {
      return {
        responseData:[],
        url:'',
        lang: localStorage.getItem('lang') || 'th-TH',
      }
    },
    methods : {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    
}
</script>

<style scoped>
.hide-class{
    display: none;
}
.img-fix-size{
    width: 100%;
    height: 230px;
    object-fit: cover;
}
.page-top{
    margin-top: 130px;
}
</style>