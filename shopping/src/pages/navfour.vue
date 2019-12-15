<template>
<!-- 导航栏第四页面 -->
    <div id="navfour">
       <headers :getcolor="active"></headers>
         <!-- 类别导航 -->
       <div class="category-nav">
            <a href="">
              <img src="../images/10.jpg" alt="">
              <p>T恤</p>
            </a>
             <a href="">
              <img src="../images/11.jpg" alt="">
              <p>马甲马甲</p>
            </a>
             <a href="">
              <img src="../images/10.jpg" alt="">
              <p>T恤</p>
            </a>
       </div>
        <!-- /类别导航 -->

       <div class="supplierbar"></div>

       <!-- 类别列表 -->
       <div class="category-list">
                <div class="list-title">T恤</div>

                <ul>
                  <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   

                    <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>
                   <li>
                    <div>
                         <img src="../images/8.jpg" alt="">
                         <p>标题</p>
                         <p>登陆后查看价格</p>
                    </div>
                  </li>

                </ul>
              
                <div class="text-right"><a href="">更多运动服</a></div>
       </div>
        <!-- 类别列表 -->
         <footerbottom></footerbottom>
    </div>
<!-- 导航栏第四页面 -->
</template>
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
export default {
    data(){
        return {
            active:3
        }
    },
    components:{
        headers,
        footerbottom
    }
}
</script>
<style lang="less">
#navfour{

    .category-nav{
      padding: 0px 111px;
      padding-bottom:30px;
      display: flex;
      justify-content: center;
      justify-items: center;
       margin-top: 20px;
       flex-wrap: wrap;
       a{
         text-align: center;
         display: inline-block;
         padding: 0px 30px;
         border-right:1px #ccc solid;
        margin-top: 10px;
         img{
           height: 80px;
           width: 80px;
         }
       }
    }
    .supplierbar {
       background: #f5f5f5;
       height: 30px;
       width: 100%;
    }
    .category-list{
      padding: 0px 75px;
      padding-top: 20px;
      .list-title{
        text-align: center;
        background:url('../images/10.jpg') no-repeat 5px bottom;
          background-size: auto 100%;
          height:56px;
            width: 150px;
            margin: 0px auto;
            line-height: 56px;
      }
      ul{
          display: flex;
          flex-wrap:wrap;
          li{
               width: 20%;
              //  height: 50px;
            
              //  padding: 0px 30px;
               div{
                 margin:20px;
                 text-align: center;
                   img{
                    width:100%;
                    height: 220px;
                     }
               }
            }
      }
      .text-right{
        text-align: right;
      }
    }
}

</style>