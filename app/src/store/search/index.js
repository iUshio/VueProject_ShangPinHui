import { reqGetSearchInfo } from '@/api'
// search模块小仓库
const state = {
    searchList: {}
};

const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};

const actions = {
    // 获取Search模块的数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};
// 计算属性，在项目当中，为了简化数据而生
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}