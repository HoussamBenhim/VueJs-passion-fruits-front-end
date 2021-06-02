export const namespaced = true

export const state = () => ({
  navBarStatus: true,
  articles: [],
})
export const mutations = {
  SET_NAV_BAR_STATUS_TO_FALSE(state) {
    state.navBarStatus = false
  },
  SET_NAV_BAR_STATUS_TO_TRUE(state) {
    state.navBarStatus = true
  },
  ADD_ARTICLE(state, payload) {
    console.log(state.articles)
    state.articles.push(payload)
    console.log(state.articles)
  },
  REMOVE_ARTICLE(state, payload) {
    state.articles = state.articles.filter((article) => {
      return article.id !== payload.id
    })
  },
}

export const actions = {
  hideNavbar({ commit }) {
    commit('SET_NAV_BAR_STATUS_TO_FALSE')
  },
  addArticle({ commit }, payload) {
    commit('ADD_ARTICLE', payload)
  },
  removeArticle({ commit }, payload) {
    commit('REMOVE_ARTICLE', payload)
  },
}

export const getters = {
  getNavBarSate(state) {
    // eslint-disable-next-line no-unneeded-ternary
    return state.navBarStatus
  },
  getArticlesArray(state) {
    return state.articles
  },
}
