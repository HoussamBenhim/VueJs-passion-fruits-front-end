export const namespaced = true

export const state = () => ({
  panierState: false,
  articlesPanier: [],
})

export const mutations = {
  OPEN_PANIER(state) {
    state.panierState = true
  },
  CLOSE_PANIER(state) {
    state.panierState = false
  },
  ADD_ARTICLE(state, payload) {
    state.articlesPanier.push(payload)
  },
  REMOVE_ARTICLE(state, payload) {
    state.articlesPanier = state.articlesPanier.filter((article) => {
      return article.id !== payload.id
    })
  },
}

export const actions = {
  openPanier({ commit }) {
    commit('OPEN_PANIER')
  },
  closePanier({ commit }) {
    commit('CLOSE_PANIER')
  },
  addArticle({ commit }, payload) {
    commit('ADD_ARTICLE', payload)
  },
  removeArticle({ commit }, payload) {
    commit('REMOVE_ARTICLE', payload)
  },
}

export const getters = {
  getArticlesArray(state) {
    return state.articlesPanier
  },
}
