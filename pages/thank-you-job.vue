 <template>
<div id="ThankYouJob">               
    <Preloader/>
    <div class="background-main page-top">
        <div class="container">
            <div class="crad text-color-this-page p-5">
                <div class="row justify-content-center">
                    <div class="col-5 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                        <img class="img-fluid"  src="https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp" alt="Header-sellsuki">
                    </div>
                </div>
                <div class="row justify-content-center pb-5">
                    <div class="col-12 text-center">
                        <h1 class="text-s-40 text-w-700">ส่งใบสมัครเรียบร้อย</h1>
                        <!-- <h2 class="text-s-18 text-w-400 pt-4">ทีมให้คำปรึกษาจะติดต่อเพื่อให้ข้อมูลโดยเร็วที่สุด</h2> -->
                        <div class="p-5">
                            <a href="/" class="btn btn-orange text-s-16 text-w-400 hvr-back-pulse"><span>กลับสู่หน้าหลัก</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Preloader from '@/components/Preloader'

export default {
    name: 'ThankYouJob',
    layout:"Layout",
    components:{
        Preloader
    },
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH',
      }
    },
    methods : {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        //goBack() { 
            //this.$router.back()
            //window.scrollTo(0,0);
        //}
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
    padding-top: 120px;
}
</style>