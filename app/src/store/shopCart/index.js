import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'

const state = {
    cartList: [],
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表的数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部选中的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('deleteCartListBySkuId', element.skuId) : '';
            // 将每一次返回的promise添加到数组中
            PromiseAll.push(promise)
        });
        // 只要全部promise都成功，返回结构未成功
        // 如果有一个失败，则返回失败
        return Promise.all(PromiseAll)
    },
    // 修改全部商品的选中状态
    updateAllCartChecked({ dispatch, state }, isChecked) {
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(element => {
            let promise = dispatch('updateCheckedById', { skuId: element.skuId, isChecked })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}