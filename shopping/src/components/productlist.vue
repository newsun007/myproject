<template>
<!-- 这是首页的各类商品列表 -->
    <div id="productlist">
        <el-container>
                <el-aside style=" width: 30%;">
                    <a href=""><img src="../images/7.jpg" alt="列表图" class="imgstyle"></a>
                </el-aside>
                <el-main>
                        <el-row >
                             <el-col :span="6">
                                 <div class="grid-content bg-purple">
                                        <img src="../images/8.jpg" alt="" class="imglist">
                                        <p class="title">标题</p>
                                        <p class="price">登陆后查看价格</p>
                                 </div>
                             </el-col>
                             <el-col :span="6">
                                <div class="grid-content bg-purple">
                                       <img src="../images/8.jpg" alt="" class="imglist">
                                       <p class="title">标题</p>
                                       <p class="price">登陆后查看价格</p>
                                </div>
                             </el-col>
                             <el-col :span="6">
                                     <div class="grid-content bg-purple">
                                            <img src="../images/8.jpg" alt="" class="imglist">
                                            <p class="title">标题</p>
                                            <p class="price">登陆后查看价格</p>
                                     </div>
                              </el-col>
                              <el-col :span="6">
                                     <div class="grid-content bg-purple">
                                            <img src="../images/8.jpg" alt="" class="imglist">
                                            <p class="title">标题</p>
                                            <p class="price">登陆后查看价格</p>
                                     </div>
                              </el-col>
                               <el-col :span="6">
                                     <div class="grid-content bg-purple">
                                            <img src="../images/8.jpg" alt="" class="imglist">
                                            <p class="title">标题</p>
                                            <p class="price">登陆后查看价格</p>
                                     </div>
                              </el-col>
                               <el-col :span="6">
                                     <div class="grid-content bg-purple">
                                            <img src="../images/8.jpg" alt="" class="imglist">
                                            <p class="title">标题</p>
                                            <p class="price">登陆后查看价格</p>
                                     </div>
                              </el-col>
                        </el-row>
                </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" >
#productlist{
    margin-top:15px;
    .el-container{
        padding: 0px 82px;
        height: 550px;
       
        .el-aside {
             overflow: unset;
              border-top:4px solid #393b48;
              .imgstyle{
                    width: 100%;
                     height:100%;
              }
        }
         .el-main {
             border-top:4px solid #393b48;
             padding: 0px;
            overflow: unset;
             .el-row {
                 padding: 0px 10px;
                 .bg-purple{
                  height: 260px;
                  text-align: center; 
                  padding-right: 10px;
                  margin-top:15px;
                  .imglist{
                      width: 100%;
                      height: 190px;
                  }
                  .title{
                      margin-top: 5px;
                      color:#111;
                       font-size: 14.5px;
                  }
                  .price{
                       margin-top: 5px;
                       color: #cc3300;
                       font-size: 16.8px;
                  }
                 }
             }
              
         }
    }
}

  
 
</style>