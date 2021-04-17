export const namespaced = true

export const state = () => ({
  navBarStatus: true,
})
export const mutations = {
  SET_NAV_BAR_STATUS_TO_FALSE(state) {
    state.navBarStatus = false
  },
  SET_NAV_BAR_STATUS_TO_TRUE(state) {
    state.navBarStatus = true
  },
}

export const actions = {
  hideNavbar({ commit }) {
    commit('SET_NAV_BAR_STATUS_TO_FALSE')
  },
}

export const getters = {
  getNavBarSate(state) {
    // eslint-disable-next-line no-unneeded-ternary
    return state.navBarStatus
  },
}
