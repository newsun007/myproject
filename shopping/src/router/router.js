import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../pages/home';
import allProduct from '../pages/allProduct';
import category from   '../pages/category';
import navfour from '../pages/navfour';
import navfive from '../pages/navfive';
import cooperation from '../pages/cooperation';
import download from '../pages/download';
import login from '../pages/login';
import register from '../pages/register'
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new VueRouter({
    routes:[
        {name:'home',path:'/',component:home},
        {name:'allProduct',path:'/allProduct',component:allProduct},
        {name:'category',path:'/category',component:category},
        {name:'navfour',path:'/navfour',component:navfour},
        {name:'navfive',path:'/navfive',component:navfive},
        {name:'cooperation',path:'/cooperation',component:cooperation},
        {name:'download',path:'/download',component:download},
        {name:'login',path:'/login',component:login},
        {name:'register',path:'/register',component:register}
    ]
})




