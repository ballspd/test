 <template>
<div id="Register">               
    <div class="background-main page-top">
        <div class="container">
            <div class="crad text-color-this-page p-5">
                <div class="row justify-content-center">
                    <div class="col-5 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1 mt-5 pt-5">
                        <img width="300" height="300" :src="profile.pictureUrl">
                        <p class="mt-4">ชื่อ : {{profile.displayName}}</p>
                        <p>ID : {{profile.userId}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//import Preloader from '@/components/Preloader'

export default {
    mounted(){
        liff.init({
            liffId: "1657220926-8DDkzJq1"
        }).then(() =>{
            if(liff.isLoggedIn()){
                liff.getProfile().then(profile => {
                    //console.log(profile)
                    this.profile = profile
                })
            }else{
                liff.login()
            }
        })
    },
    name: 'Register',
    layout:"Layout",
    //components:{
    //    Preloader
    //},
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH',
        profile:''
      }
    },
    methods : {
        scrollToTop() {
            window.scrollTo(0,0);
        },
    },
    
}
</script>

<style scoped>
</style>