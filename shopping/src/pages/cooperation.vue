<template>
<div id="cooperation">
    <headers :getcolor="active"></headers>
    <div class="banner">
        <span>立即合作</span>
        <span>免费咨询</span>
    </div>
    <div class="block">
        <div class="server"><h1>推广服务</h1></div>
        <div class="server_img">
                <el-row :gutter="5">
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                </el-row>
                  <el-row :gutter="5">
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>入驻衫聚衫美平台</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><p>免费搭建超级红利的流量矩阵</p></div></el-col>
                </el-row>
        </div>
        
    </div>
    <div class="system">
           <div class="server"><h1>系统服务</h1></div>
             <el-row>
                    <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(0)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:0==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:0==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
                      <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(1)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:1==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:1==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
                      <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(2)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:2==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:2==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
                      <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(3)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:3==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:3==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
                      <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(4)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:4==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:4==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
                      <el-col :span="4">
                        <div class="grid-content" @mouseenter="changebox(5)" @mouseleave="leavebox">
                              <div class="top" ><p :class='{newstyle:5==myactive}'>入驻衫聚衫美平台</p></div>
                              <div class="bottom" :class="{twostyle:5==myactive}"><p>解决财务对账问题 解决库存冗余问题 解决订单错漏问题 提供数据统计，分析大数据，看准新商机</p></div>
                        </div>
                    </el-col>
            </el-row>
    </div>

    <div id="contact">
         <div class="contact"><h1>请留下您的联系方式，我们将马上与您联系！</h1></div>
         <div class="formmessage">
                    <form  class="form">
                       <div class="inpubox">
                            <el-select v-model="region" placeholder="请选择服务">
                                 <el-option label="区域一" value="shanghai"></el-option>
                                 <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <el-input class="width50 mrgl" placeholder="公司名称"></el-input>
                       </div>
                         <div class="inpubox">
                            <el-input class="width50 mrgr" placeholder="尊称"></el-input>
                            <el-input class="width50 mrgl" placeholder="手机号码"></el-input>
                       </div>
                      
                        <el-input class="lastinput" placeholder="备注"></el-input>
                        <el-button type="danger">提交</el-button>
                        <div class="hezuo">合作方式</div>
                        <div class="pl">1、提交资料后，专员会在1-2个工作日内与您联系，请保证您所填手机号无误并畅通</div>
                        <div class="pl">2、合作类型及价格最终以双方签订合同的内容为准</div>
                        <div class="pl">3、签订合同且付款后，合同生效，商务合作正式确立展开</div>

                    </form>
         </div>
    </div>
    <footerbottom></footerbottom>
</div>
</template>
<script>
import headers from '../components/header.vue';
import footerbottom from '../components/footerbottom';
export default{
    data(){
        return {
            active:5,
            myactive:-1,
            region:''
        }
    },
    methods:{
        changebox(event){
    
            // console.log(event.currentTarget.getElementsByClassName('top'))
            this.myactive=event;
        },
        leavebox(){
            
             this.myactive="-1";
        }

    },
    components:{
        headers,
        footerbottom
    }
}
</script>
<style lang="less">
#cooperation{
    .banner{
        height: 300px;
        width: 100%;
        background:url('../images/banner.jpg') no-repeat;
        background-size:auto 100%;
        text-align: center;
        span{
            display: inline-block;
            padding: 5px 15px;
            background-color: #fff;
            margin:0px 10px;
            font-size:14.5px;
            margin-top: 230px;
        }
    }
    .block{
        padding:0px 68px 20px 68px;
        .server{
            height: 112px;
            text-align: center;
            color:#666;
            line-height: 112px;
            font-size: 28px;
        }
        .server_img{
            .el-row{
                margin-bottom: 5px;
                  .grid-content{
                background:url("../images/server.jpg") no-repeat;
                background-size:auto 100%;
                 height: 220px;
                 line-height: 220px;
                 text-align: center;
                 color:#FFFFFF;
                 p{
                     display: inline-block;
                     background: #333333;
                     opacity: 0.9;
                     min-height: 43px;
                     line-height: 27px;
                     text-align: center;
                     padding: 8px;
                     border-radius: 2px;
                     width: 70%;
                     color: #fff;
                     font-size: 0.33rem;
                     font-weight: normal;
                     box-sizing: border-box;
                 }
            }
            }
          
           
        }
    }
    .system{
        box-sizing:border-box;
        height: 580px;
        background-color: #333;
        padding: 0px 68px;
        .server{
             height: 112px;
            text-align: center;
            color:#FFFFFF;
            line-height: 112px;
            font-size: 28px;
        }
        .el-row{
            .grid-content{
                height: 400px;
                background: url('../images/tuiguang.jpg') no-repeat;
                position: relative;
                .top{
                    height: 200px;
                    box-sizing: content-box;
                    display: inline-block;
                    width: 100%;
                     vertical-align: middle;
                    color:#FFFFFF;
                    text-align: center;
                    position: absolute;
                    top: 0px;
                    padding: 0px 10px;
                    p{
                        margin-top: 180px;
                    }
                      .newstyle{
                         margin-top: 100px;
                    }
                }
              
                .bottom{
                    height: 200px;
                    box-sizing: content-box;
                    display: inline-block;
                     vertical-align: middle;
                    color:#FFFFFF;
                    text-align: center;
                    position: absolute;
                    bottom: 0px;
                    padding: 0px 10px;
                    display: none;
                    p{
                        margin-top: 55px;
                    }
                }
                .twostyle{
                    display: block;
                    background-color: #111;
                }
            }
            .two{
                  background: url('../images/33.jpg') no-repeat;
            }
        }
    }
    #contact{
           .contact{
             height: 112px;
            text-align: center;
            color:#666;
            line-height: 112px;
            font-size: 28px;
         }
         .formmessage{
             width:100%;
             margin-bottom: 80px;
            .form{
                width: 710px;
                margin:0px auto;
                .inpubox{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 25px;
                     .el-select{
                      width: 50%;
                      padding-right: 20px;
                        .el-input__inner{
                            border: none;
                            border-bottom: 2px #666 solid;
                            border-radius: unset;
                        }
                     }
                      .width50{
                          width: 50%;
                          .el-input__inner{
                                border: none;
                                border-bottom: 2px #666 solid;
                                border-radius: unset;
                          }
                         
                     }
                      .mrgr{
                           padding-right: 20px;
                      }
                     .mrgl{
                              padding-left: 20px;
                     }
                }
                .lastinput{
                    .el-input__inner{
                            border: none;
                            border-bottom: 2px #666 solid;
                            border-radius: unset;
                        }
                }
                .el-button--danger{
                    width:100%;
                    margin-top: 25px;
                    background-color: #e63a33;
                    border-color: #e63a33;
                    padding:20px;
                }
                .hezuo{
                    text-align: center;
                    font-size: 22.4px;
                    color: #666;
                    margin:80px 0px 30px 0px;
                }
                .pl{
                    padding-left: 80px;
                    margin-bottom: 10px;
                }
            }
         }
    }
}
</style>