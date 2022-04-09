// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

export const reqCategoryList = () => {
    // 发请求：axios发请求返回结果：Promise对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索模块的数据，地址：/api/list 请求方式：post 参数：需要带参数
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 获取商品详情的api:/api/item/{ skuId } get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests({ url: `cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表数据结构
// /api/cart/cartList
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车产品的接口
// /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改购物车商品选中状态
// /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取注册界面验证码
// /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 注册用户
// /api/user/passport/register
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 用户登录
// /api/user/passport/login
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息（使用token）
// /api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出用户登录
// /api/user/passport/logout
export const reqLogOut = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取用户交易界面商品清单
// /api/order/auth/trade
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取订单信息
// /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 获取支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 获取我的订单
// /api/order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
