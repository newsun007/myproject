<template>
<!-- 全部产品  页面 -->
<div>
   <headers :getcolor="active"></headers>
  <div id="allProduct">
    <div class="top">
        <div class="title-list">
            <b>类型</b>
            <!-- <a href="">T恤</a>
            <a href="" class="active">POLO</a>
            <a href="">运动服</a>
            <a href="">马甲 | 风衣 | 防晒衣</a>
            <a href="">帽子 | 围裙 卫衣 | 卫裤</a> -->
            <span href="#" v-for="(item,index) in check" :class="navactive==index?'active':''" @click="checkname(index)" :key="index">{{item}}</span>
        </div>
        <div class="boxclass">
              <div class="list" v-if="showbox">
                <a href="">工作服</a>
                <a href="">亚麻</a>
                <a href="">天丝</a>
                <a href="">奥戴尔</a>
                <a href="">赛尔</a>
              </div>
        </div>
    </div>
    <div class="list-floor">
      
         <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
       
        <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
         <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
         <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
         <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
         <div class="width25">
             <div class="littlebox">
                <img src="../images/9.jpg" alt="产品图">
               <p>价格</p>
              <span>登陆后查看价格</span>
             </div>
        </div>
      
       
    </div>
  </div>
   <footerbottom></footerbottom>
</div>
</template>
<!-- 全部产品  页面 -->
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
export default {
  data(){
    return {
      active:1,
      check:['T恤','POLO','运动服','卫裤','帽子 | 围裙 卫衣 | 卫裤'],
      navactive:-1,
      showbox:false
    }
  },
  components:{
    footerbottom,
    headers
  },
  methods:{
    checkname(e){
      this.showbox=true;
      this.navactive=e
    }
  }
}
</script>

<style lang="less">
#allProduct{
  padding:0px 75px;
    .top{
      margin-top: 35px;
    
        .title-list{
          padding-left: 3%;
          b{
             font-weight: 700;
            color:#000000;
            margin-right:45px;
          }
          span{
             display: inline-block;
             height:35px;
             color:#000000;
             font-size: 14.5px;
            cursor:pointer;
             margin-right: 30px;
          }
          .active{
             background: url('../images/catchild.png') no-repeat center bottom;
          }
        }
        .boxclass{
          padding:0px 25px;
          .list{
               border:1px solid #c0c0c0;
               border-radius: 3px;
               padding:0px 30px 10px 30px;
              a{
                display: inline-block;
                margin-right: 15px;
                font-size: 14.5px;
                color:#000000;
                margin-top: 10px;
              }
          }
        }
    }
    .list-floor{
      display: flex;
      flex-wrap:wrap;
         .width25{
           width: 20%;
           height: 320px;
           margin-top: 10px;
           text-align: center;
            .littlebox{
              margin: 10px 15px;
                 img{
                  width: 100%;
                  height: 250px;
                 }
                 
            }
          
       }
       .width25:hover{
         border: 1px #CCC solid;
        box-shadow: 0 0 5px #ccc;
        box-sizing: border-box;
       }
    }
}
</style>
