 <template>
    <div id="RelatedPosts">               
        <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
            <div class="text-center">
                <h1 class="text-s-30 font-wght mt-3">Related posts</h1>
            </div>
            <div v-if="type == 'Portfolio'" class="row mt-3">
                <div v-for="data in responseData" :key="data.id" :class="{'hide-class':Id == data.id}" class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                    <a :href="'/Portfolio/Detail/'+data.id+'?type='+data.bu_category.name">
                        <div class="row p-2">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy">
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <div class="text-w-700 text-limit-3 text-s-20 color-15304E">{{data.title}}</div>
                                <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                <p class="text-s-14 text-limit-3" style="color:#373737">{{data.description}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div v-else class="row mt-3">
                <div v-for="data in responseData" :key="data.id" :class="{'hide-class':Id == data.id}" class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                    <a :href="'/Blogs/Detail/'+data.id+'/'+data.url">
                        <div class="row p-2">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy">
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <div class="text-w-700 text-limit-3 text-s-20 color-15304E">{{data.title}}</div>
                                <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                <p class="text-s-14 text-limit-3" style="color:#373737">{{data.description}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RelatedPosts',
    props: ['type','CategoryName','Id'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH'
      }
    },
    methods : {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    //this.$route.params.id
    mounted () {
        if(this.type == 'Portfolio'){
            this.url = process.env.API_URL+'Portfolios?bu_category.id='+this.CategoryName+'&_sort=created_at:DESC&_limit=4&_locale='+ this.lang
        }
        else
        {
            this.url = process.env.API_URL+'blogs?blog_category.id='+this.CategoryName+'&_sort=created_at:DESC&_limit=4&_locale='+ this.lang
        }
        axios.get(this.url)
        .then(response => (this.responseData = response.data))
    }
    
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
</style>