<template>
<div>
    <headers :getcolor="active"></headers>
    <h1>图片下载</h1>
    <footerbottom></footerbottom>
</div>
</template>
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
export default{
    data(){
        return {
            active:6
        }
    },
    components:{
        headers,
        footerbottom
    }
}
</script>
<style lang="less">

</style>