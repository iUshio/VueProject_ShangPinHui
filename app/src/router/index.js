//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入路由
import routes from './routes'
//使用插件
Vue.use(VueRouter);
// 引入store
import store from '@/store'

//先把VueRouter原型对象的push备份一份
let originPush = VueRouter.prototype.push;
let oringinReplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来的push方法，跳转位置
//第二个参数：成功回调
//第三个参数：失败的回调
//call||apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开。apply方法传递数组

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location,
            () => { },
            () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        oringinReplace.call(this, location, resolve, reject)
    } else {
        oringinReplace.call(this, location,
            () => { },
            () => { })
    }
}

//配置路由
let router = new VueRouter({
    // mode: 'history',
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // y表示滚动条在最上方
        return { y: 0 }
    }
})

// 全局守卫：前置守卫
router.beforeEach((to,from,next)=>{
    next()
})

export default router
