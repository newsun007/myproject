<template>
  <div id="shouye">
    <!-- 轮播图 -->
       <div class="block">
           <el-carousel height="400px" :interval="20000">
               <el-carousel-item>
                  <img src="../images/3.jpg" alt="轮播图" class="imgstyle">
                </el-carousel-item>
                 <el-carousel-item>
                  <img src="../images/4.jpg" alt="轮播图" class="imgstyle">
                </el-carousel-item>
             </el-carousel>
        </div>
    <!-- /轮播图 -->
    <!-- 产品8宫格 -->
        <el-row :gutter="15" style="margin-left:0px;margin-right:0px;" cla>
            <el-col :span="6" class="margintop">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
              <img class="imgstyle" src="../images/6.jpg" alt="">
            </el-col>
        </el-row>
     <!-- 产品8宫格 -->
     <!-- 商品列表组件 -->
      <productlist></productlist>
       <productlist></productlist>
        <productlist></productlist>
      <!-- /商品列表组件 -->
  </div>
</template>

<script>
import productlist from '../components/productlist';
export default {
    data(){
      return {}
    },
    components:{productlist}
}
</script>

<style>
#shouye>.block{
  padding: 0px 100px;
 
}
#shouye>.el-row{
  padding: 0px 75px;
 
}

#shouye>.el-row>.el-col-6{
  margin-top: 10px;
}
#shouye .el-carousel__container{
    height:400px;
    background-color: red;
}
#shouye .imgstyle{
  width: 100%;
  height:100%;
}

</style>