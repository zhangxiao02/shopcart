import shop from '../../api/shop'

const state = {
    list: []
}

const getters = {}

const actions = {
    getList ({ commit}) {
        shop.getGoodsList(data => {
            commit('setList',data)
        })
    }
}

const mutations = {
    setList (state,data) {
        state.list = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}