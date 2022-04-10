// 路由配置信息

//引入路由组件（懒加载）
// import Home from '@/pages/Home';
const Home = () => import('@/pages/Home')
// import Login from '@/pages/Login';
const Login = () => import('@/pages/Login')
// import Search from '@/pages/Search';
const Search = () => import('@/pages/Search')
// import Register from '@/pages/Register';
const Register = () => import('@/pages/Register')
// import Detail from '@/pages/Detail';
const Detail = () => import('@/pages/Detail')
// import AddCartSuccess from '@/pages/AddCartSuccess'
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
// import ShopCar from '@/pages/ShopCar'
const ShopCar = () => import('@/pages/ShopCar')
// import Trade from '@/pages/Trade'
const Trade = () => import('@/pages/Trade')
// import Pay from '@/pages/Pay'
const Pay = () => import('@/pages/Pay')
// import PaySuccess from '@/pages/PaySuccess'
const PaySuccess = () => import('@/pages/PaySuccess')
// import Center from '@/pages/Center'
const Center = () => import('@/pages/Center')
// import MyOrder from '@/pages/Center/MyOrder'
const MyOrder = () => import('@/pages/Center/MyOrder')
// import GroupOrder from '@/pages/Center/GroupOrder'
const GroupOrder = () => import('@/pages/Center/GroupOrder')


export default [
    // 主页
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    // 搜索页面
    {
        name: "search",
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }
    },
    // 登录界面
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    // 注册界面
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    // 商品详情页面
    {
        // 改params参数表示产品id
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true }
    },
    // 添加商品进购物车成功页面
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    // 购物车页面
    {
        name: 'shopCar',
        path: '/shopCar',
        component: ShopCar,
        meta: { show: true }
    },
    // 购买结算页面
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去往交易界面必须从购物车界面过来
            if (from.path == '/shopCar') {
                next()
            } else {
                // 从其他的组件来，不进行跳转
                next(false)
            }
        }
    },
    // 支付页面
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 去往支付界面必须从交易界面过来
            if (from.path == '/trade') {
                next()
            } else {
                // 从其他的组件来，不进行跳转
                next(false)
            }
        }
    },
    // 支付成功页面
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 去往支付成功界面必须从支付界面过来
            if (from.path == '/pay') {
                next()
            } else {
                // 从其他的组件来，不进行跳转
                next(false)
            }
        }
    },
    // 个人中心页面
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            }
            ,
            {
                path: 'grouporder',
                component: GroupOrder,
            }
            ,
            // 访问center页面时默认重定向到我的订单页面
            {
                path: '/center',
                redirect: '/center/myorder'
            },
        ]
    }
    ,
    // 重定向，在项目启动时，将其定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]