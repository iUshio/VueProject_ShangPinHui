import { reqAddOrUpdateShopCart, reqGoodsInfo, reqAddOrUpdateShopCar } from '@/api'
// 封装游客身份模块uuid，生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'

const state = {
    goodInfo: {},
    // 游客临时身份ID
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCar({ commit }, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCar(skuId, skuNum)
        if(result.code == 200){
            return 'ok'
        }else{
            // 加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // 初始时（未发送请求），goodInfo是空的,goodInfo.categoryView是undefined
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品的售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}