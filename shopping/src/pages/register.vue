<template>
<!-- 注册界面 -->
    <div id="registers">
        <headers></headers>
         <div class="center">
                <div class="box">
                        <div class="left">
                            <img src="../images/login.jpg" alt="">
                        </div>
                        <div class="right">
                            <div class="login">我要注册</div>
                            <el-input placeholder="姓名" prefix-icon="el-icon-search" ></el-input>
                            <div class="password">
                                 <el-input placeholder="手机号码" prefix-icon="el-icon-search" ></el-input>
                                 <p class="forget">忘记密码</p>
                            </div>
                             <el-input placeholder="密码" prefix-icon="el-icon-search" ></el-input>
                             <el-input placeholder="重复密码" prefix-icon="el-icon-search" ></el-input>
                             <el-input placeholder="公司名称" prefix-icon="el-icon-search" ></el-input>
                             <el-input placeholder="QQ号" prefix-icon="el-icon-search" ></el-input>
                            <el-button type="danger" >注册</el-button>
                            <div class="register">
                                 <router-link to="/register">没有账号？我要注册</router-link>
                            </div>
                        </div>
                </div>
        </div>
        <footerbottom></footerbottom>
    </div>

</template>
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
export default{
    components:{headers,footerbottom}
}
</script>
<style lang="less">
#registers{
    .center{
        padding:30px 50px;
        .box{
            display: flex;
            width: 100%;
            max-width: 1360px;
            .left{
                width: 70%;
                img{
                    width: 100%;
                }
            }
            .right{
                width: 30%;
                padding: 20px 30px;
                .el-input{
                    border-bottom: 2px #666 solid;
                     .el-input__inner{
                        border: none;
                     }
                }
                .login{
                    margin-bottom: 20px;
                    font-size: 16px;
                    font-weight: 700;
                }
               .password{
                   margin:20px 0px;
                   position:relative;
                   .forget{
                       position: absolute;
                       right: 0px;
                       bottom:10px;
                       color: #999;
                       font-size: 14px;
                       cursor:pointer;
                   }
               }
                .el-button--danger{
                    width:100%;
                    margin-top: 25px;
                    background-color: #e63a33;
                    border-color: #e63a33;
                    padding:20px;
                }
                .register{
                        text-align: center;
                        margin-top: 50px;
                         a{
                             color: #999
                         }
                }
               
            }
        }
    }
}
</style>
