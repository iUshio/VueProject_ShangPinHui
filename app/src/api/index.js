// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

export const reqCategoryList = ()=>{
    // 发请求：axios发请求返回结果：Promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'});
}

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=> mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor')

// 获取搜索模块的数据，地址：/api/list 请求方式：post 参数：需要带参数
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

