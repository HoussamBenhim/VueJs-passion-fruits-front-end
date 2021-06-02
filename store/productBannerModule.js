export const namespaced = true

export const state = () => ({
  bannerState: false,
  data: {},
})

export const mutations = {
  SET_BANNER_STATE(state) {
    state.bannerState = !state.bannerState
  },
  SET_DATA(state, payload) {
    state.data = payload
  },
  CLEAR_DATA(state) {
    state.data = {}
  },
}
export const actions = {
  setBannerState({ commit }) {
    commit('SET_BANNER_STATE')
  },
  setData({ commit }, payload) {
    commit('SET_DATA', payload)
  },
  clearData({ commit }) {
    commit('CLEAR_DATA')
  },
}

export const getters = {
  getData(state) {
    return state.data
  },
}
