// 路由配置信息

//引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCar from '@/pages/ShopCar'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

export default [
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        name: "search",
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    }
    ,
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    }
    ,
    {
        // 改params参数表示产品id
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true }
    }
    ,
    {
        name:'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    }
    ,
    {
        name:'shopCar',
        path: '/shopCar',
        component: ShopCar,
        meta: { show: true }
    }
    ,
    {
        name:'trade',
        path: '/trade',
        component: Trade,
        meta: { show: true }
    }
    ,
    {
        name:'pay',
        path: '/pay',
        component: Pay,
        meta: { show: true }
    }
    ,
    {
        name:'paysuccess',
        path:'/paysuccess',
        component:PaySuccess,
        meta: { show: true }
    },
    // 重定向，在项目启动时，将其定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]