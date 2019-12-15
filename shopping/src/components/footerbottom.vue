<template>
<!-- 公共组件 首页的底部组件 -->
    <div id="footer">
           <el-row>
               <el-col :span=6 class="first">
                   <img src="../images/logob.png" alt="logo" class="logobottom">
                   <p>一站式基础服饰采购联盟</p>
               </el-col>
               <el-col class="twofloor" :span=6>
                   <p>联络我们</p>
                   <ul>
                       <li><i class="el-icon-location"></i> <span>广州白云区沙太中路新百佳市场一楼A21068天盛提货</span></li>
                       <li><i class="el-icon-location"></i> <span>广州白云区</span></li>
                       <li><i class="el-icon-location"></i> <span>广州白云区</span></li>
                       <li><i class="el-icon-location"></i> <span>广州白云区</span></li>
                       <li><i class="el-icon-location"></i> <span>广州白云区</span></li>
                   </ul>
               </el-col>
               <el-col :span=2 class="three">
                     <p>支付方式</p>
                   <ul>
                       <li><span>微信支付</span></li>
                       <li><span>支付宝支付</span></li>
                       <li><span>余额支付</span></li>
                   </ul>
               </el-col>
               <el-col class="four" :span=10>
                     <el-col :span=8 style="position:relative">
                                 <img src="../images/t1.png" alt="图标"  >
                                 <p>QQ客服</p>
                                 <p>8181818188</p>
                     </el-col>
                     <el-col :span=8>
                          <img src="../images/t1.png" alt="图标">
                          <p>QQ客服</p>
                          <p>88888888</p>
                     </el-col>
                     <el-col :span=8>
                          <img src="../images/t1.png" alt="图标">
                         <p>QQ客服</p>
                         <p>88888888</p>
                     </el-col>
                     <el-col :span=8>
                          <img src="../images/t1.png" alt="图标">
                         <p>QQ客服</p>
                         <p>88888888</p>
                     </el-col>
                     <el-col :span=8>
                          <img src="../images/t1.png" alt="图标">
                         <p>QQ客服</p>
                         <p>88888888</p>
                     </el-col>
                    <el-col :span=8>
                          <img src="../images/t1.png" alt="图标">
                         <p>QQ客服</p>
                         <p>88888888</p>
                     </el-col>
               </el-col>
           </el-row>
           <div class="last">Copyright 2019 © 衫聚衫美技术支持 粤ICP备19085041号</div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          ceshi:false
      }
  },
  methods:{
      getimg(){
           this.ceshi=true;
      },
      mouseleave(){
          this.ceshi=false;
      }
  }
}
</script>
<style lang="less" scoped>
#footer{
    .el-row{
        height: 300px;
        background-color: #090d0f;
        margin-top: 30px;
        .first{
            padding-left: 75px;
            margin-top: 60px;
            p{
                color:#ffffff;
                font-size: 15.8px;
            }
            .logobottom{
                  width: 193px;
                  height: 59px;
              }
        }
        .twofloor{
            color: #ffffff;
            margin-top: 30px;
            p{
               margin-bottom: 15px;
                 font-size: 14.5px;
                 font-weight: 700;
            }
            p:before{
                content:' ';
                display: inline-block;
                width:5px;
                background-color: red;
                height: 15px;
                margin-right:5px; 
            }
            li{
                margin-bottom: 10px;
                font-size: 13px;
            }
        }
        .three{
            color: #ffffff;
            margin-top: 30px;
            padding-left: 30px;
            p{
               margin-bottom: 35px;
                 font-size: 14.5px;
                 font-weight: 700;
            }
            p:before{
                content:' ';
                display: inline-block;
                width:5px;
                background-color: red;
                height: 15px;
                margin-right:5px; 
            }
            li{
                margin-bottom: 30px;
                font-size: 14px;
            }
        }
        .four{
          color: #ffffff;
           height: 100px;
            margin-top: 20px;
            padding:0px 8%;
           .el-col{
               text-align: center;
                 margin-top: 15px;
                 img{
               width: 50px;
               height: 50px;
               border-radius: 100%;
               }
           }
          
        }
    }
    .last{
        text-align: center;
        width: 100%;
        height: 30px;
        background-color: #151a16;
        line-height: 30px;
        font-size: 14px;
        color: #999999;
    }
}
</style>