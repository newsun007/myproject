
<template>
<!-- 头部组件 -->
<div id="header">
        <div class="title">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="float-left left">
                <el-breadcrumb-item >欢迎来到xxx服饰供应平台</el-breadcrumb-item>
                <el-breadcrumb-item>服装批发</el-breadcrumb-item>
                <el-breadcrumb-item>品牌加盟</el-breadcrumb-item>
                <el-breadcrumb-item>服装加工</el-breadcrumb-item>
                 <el-breadcrumb-item>自厂自销</el-breadcrumb-item>
            </el-breadcrumb>
             <ul class="float-right right">
                <li><router-link to="/login">登陆</router-link></li>
                <li><router-link to="/register">注册</router-link> </li>
                <li><i class="el-icon-delete"></i><a href="">购物车<span class="fontred">(0)</span></a> </li>
                <li><i class="el-icon-delete"></i><a href="">收藏夹</a> </li>
                <li><i class="el-icon-delete"></i><a href="">订单管理</a> </li>
                <li class="fontred"><i class="el-icon-delete"></i><a href="" class="fontred">竞价</a> </li>
                <li class="fontred"><i class="el-icon-delete"></i><a href="" class="fontred">秒杀</a> </li>
                <li><i class="el-icon-delete"></i><a href="">手机端</a> </li>
                <li><i class="el-icon-delete"></i><a href="">APP下载</a> </li>
             </ul>
        </div>
        <div class="search">
              <el-row >
                  <el-col  :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                    <a href=""><img src="../images/logo.png" alt="logo"></a>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="second">
                     <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                          <el-select v-model="select" slot="prepend" placeholder="请选择">
                              <el-option label="餐厅名" value="1"></el-option>
                              <el-option label="订单号" value="2"></el-option>
                              <el-option label="用户电话" value="3"></el-option>
                          </el-select>
                          <el-button @click="searchInput" slot="append" icon="el-icon-search"></el-button>
                      </el-input>
                  </el-col>
                  <el-col class="hidden-xs-only hidden-sm-only"  :md="8" :lg="8" :xl="8">
                     <a href=""><img src="../images/right.png" alt="rigthPicture" class="rigthPicture"></a>
                  </el-col>
              </el-row>
              <div class="nav">
                  <ul >
                    <!-- 页面跳转 -->
                    <router-link  :to="item.path" tag="li" :class ="index==getcolor?'addclass':'' "  v-for="(item,index) in navname" :key="index">{{item.name}}</router-link>
                  </ul>
              </div>
        </div>
       
</div>

</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: 'headers',
  data(){
    return {
      input5: '',
      select: '',
       activeName: 'second',
       active:-1,
       navname:''
    }
  },
  props:['getcolor'],
  methods:{
      getnav(){//获取导航栏标题路径
              this.$http.get('http://g.cn/api/jiekou').then(function(res){
                // 响应成功回调
                this.navname=res.body.data;
                //数据在res.body里面
              })
      },
      searchInput(){
        this.$router.push({path:"/allProduct"});
      }
  },
  created(){
      this.getnav(); 
  }
}
</script>
<style  lang="less">
#header{
  .title{
       height: 30px;
       line-height: 30px;
       background-color: #f1f1f1;
    .el-breadcrumb{
       line-height: 30px;
    }
    .left{
      margin-left: 75px;
    }
    ul{
      margin-right: 75px;
      li{
         float: left;
         margin-left: 20px;
          a{
            color:#000000;
            font-size: 14px;
           }
            .fontred{
                   color:#ff0000;
                  }
        }
    }
  }
  .search{
    padding: 0px 75px;
    height: 120px;
    border-bottom: 3px solid #e53a33;
    position: relative;
      .el-row{
         margin-top: 30px;
         .second {
            padding-left: 60px;
              padding-right: 30px;
            .input-with-select{
              margin-top: 10px;
             
                .el-input-group__prepend{
                       background-color: #ffffff;
                           .el-select {
                              width: 110px;
                         }
                   }
                .el-input-group__append{
                        background-color: #e53a33;
                         .el-icon-search{
                           color: #ffffff;
                           font-size: 22px;
                         }
                }
              }
        }
     
             .rigthPicture{
               width: 380px;
               margin-top: 10px;
             }
      }
      .el-tabs{
          position: absolute;
          bottom: -35px;
       } 
  }
  .nav{
    position: absolute;
    bottom: 0px;
    ul{
      .addclass{
         background-color: #e63a33;
          color: #ffffff;
      }
      li{
        float: left;
         text-align: center;
        padding: 0px 50px;
        width:auto;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
      }
      li:hover{
        color: #ffffff;
        background-color: #e63a33;
      }
    }
  }
}
</style>
