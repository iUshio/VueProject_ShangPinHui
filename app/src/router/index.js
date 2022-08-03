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
    // mode: 'hash',
    // base: process.env.BASE_URL,
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // y表示滚动条在最上方
        return { y: 0 }
    }
})

// 全局守卫：前置守卫
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    // 用户信息
    let name = store.state.user.userInfo.name

    // 用户已经登录了
    if (token) {
        // 用户应登录无法去login界面
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            // 跳转页面时，如果用户信息丢失但还含有token，即登陆了用户信息没了
            // 再次获取用户信息
            if (!name) {
                try {
                    // 获取用户信息，在首页展示
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效，清楚用户信息，删除失效token
                    await store.dispatch('userLogOut')
                    // 返回login界面
                    next('/login')
                }
            } else {
                // 没有问题直接放行
                next()
            }
        }

    } else {
        // 未登录不能去交易相关页面以及支付相关页面、个人中心
        // 这些页面全部跳转到登录页面
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 ||
            toPath.indexOf('/pay') != -1 ||
            toPath.indexOf('/center') != -1
        ) {
            // 把未登录的时候想去而没有去成的页面存储于地址栏中
            next( '/login?redirect=' + toPath)
        } else {
            next()
        }

    }

})

export default router
