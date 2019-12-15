<!-- 首页  页面 -->
<template>
  <div class="home" >
      <headers :getcolor="active"></headers>
      <shouye></shouye>
       <!-- 底部组件 -->
      <footerbottom  ></footerbottom>
      <div class="bottom" ><img src="../images/online.gif" alt="QQ交谈"></div>
      <div class="gotop" v-if="showTop" @click="gotop">返回顶部</div>
      <!-- /底部组件 -->
  </div>
</template>
<!-- 首页  页面 -->
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
import shouye from '../pages/shouye';
export default {
  name: 'home',
  data(){
      return {
          myheader:true,
          showTop:false,
          active:0
      }
  },
  components:{
      headers,
      footerbottom,
      shouye
  },
  methods:{
      debounce(){//根据窗口的距离判断是否显示图标
          let scrollY = window.scrollY;
           if (scrollY > 1800) {
              this.showTop=true
            }
            else {
               this.showTop=false
            }

      },
      gotop(){//返回顶部
            var speed=5

            var timer=setInterval(function(){
              
                speed+=20
                   if(document.documentElement.scrollTop){
                       document.documentElement.scrollTop-=speed;
                   }else if( document.body.scrollTop){
                      document.body.scrollTop-=speed;
                   }else{
                  
                      window.pageYOffset-=speed;
                   }
                if(window.scrollY==0){
                    clearInterval(timer);
                     
                }
            },30)
          
         

     }
  },
  mounted(){
      window.addEventListener('scroll', this.debounce,true)

  }
}
</script>
<style scoped lang="less">
.bottom{
  position: fixed;
  right: 0px;
  bottom:150px;
  img{
    width: 65px;
    height: 105px;
  }
}
.gotop{
  position: fixed;
  right: 0px;
  bottom:80px;
  background-color: green;
  text-align: center;
  width: 65px;
  height: 65px;
  line-height: 65px;
  font-size: 14px;
  color: #ffffff;
}
</style>
