const state = () => ({
    user: {},
})

const getters = {
    user: (state) => {
        return state.user
    }
}

const mutations = {
    setUser: (state, user) => {
        state.user = user
    }
}

export default {
    namespace: true,
    state,
    getters,
    mutations
}