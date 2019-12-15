import Mock from 'mockjs';










var mydatas = [{name:'首页',path:'/'},{name:'全部产品',path:'/allProduct'},{name:'天盛纯衣服仿',path:'/category'},{name:'衫国保罗',path:'/navfour'},{name:'衫国盛世 ',path:'/navfive'}
,{name:'商务合作 ',path:'/cooperation'},{name:'图片下载 ',path:'/download'}
];


// 防夹力测量值、标准、判定数据接口
Mock.mock('http://g.cn/api/jiekou', {

       data: mydatas

});






















