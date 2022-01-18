 <template>
    <div id="SolutionsMenu">
        <div class="d-flex" >
            <font class="text-s-18 font-wght" style="color: #50151C;">Solutions</font>
        </div>   
        <hr style="border: 1px solid #50151C;"/>
        <div class="d-flex" >
            <a href="#">Group</a>
            <i class="ms-auto bi bi-chevron-right"></i>
        </div>
        <hr style="border: 1px solid #50151C;"/>
        <div class="d-flex" >
            <a href="#">BU</a>
            <i class="ms-auto bi bi-chevron-right"></i>
        </div>
        <hr style="border: 1px solid #50151C;"/>
    </div>
</template>

<script>
export default {
    name: 'SolutionsMenu',
     data () {
    const lang = localStorage.getItem('lang') || 'TH-th';
    return {
      lang:lang,
      Group:null,
      BU:null
    }
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    }
  }
}
</script>

<style>

</style>