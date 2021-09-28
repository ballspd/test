 <template>
    <div id="ServicesMenu">
        <div class="d-flex" >
            <font class="text-s-18 font-wght" style="color: #50151C;">Services</font>
        </div>   
        <hr style="border: 1px solid #50151C;"/>
        <div @click="pageActive = false" class="d-flex" >
            <a href="#">Digital Marketing</a>
            <i class="ms-auto bi bi-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesMenu',
    props: ['component']
}
</script>

<style>

</style>