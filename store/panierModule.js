export const namespaced = true

export const state = () => ({
  panierState: false,
  adressChangeLogState: false,
  deliveryInfosLog: false,
  articlesPanier: [],
  deliveryAddress: {
    address: '',
    deliveryIndications: '',
  },
})

export const mutations = {
  OPEN_PANIER(state) {
    state.panierState = true
  },
  CLOSE_PANIER(state) {
    state.panierState = false
  },
  OPEN_ADDRESS_CHANGE_LOG(state) {
    state.adressChangeLogState = true
    state.panierState = false
  },
  CLOSE_ADDRESS_CHANGE_LOG(state) {
    state.adressChangeLogState = false
    state.panierState = true
  },
  OPEN_DELIVERY_LOG(state) {
    state.deliveryInfosLog = true
    state.panierState = false
  },
  CLOSE_DELIVERY_LOG(state) {
    state.deliveryInfosLog = false
    state.panierState = true
  },
  ADD_ARTICLE(state, payload) {
    state.articlesPanier.push(payload)
  },
  SET_DELIVERY_ADDRESS(state, payload) {
    state.deliveryAddress = payload
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
  openAddressChangeLog({ commit }) {
    commit('OPEN_ADDRESS_CHANGE_LOG')
  },
  closeAddressChangeLog({ commit }) {
    commit('CLOSE_ADDRESS_CHANGE_LOG')
  },
  openDeliveryLog({ commit }) {
    commit('OPEN_DELIVERY_LOG')
  },
  closeDeliveryLog({ commit }) {
    commit('CLOSE_DELIVERY_LOG')
  },
  addArticle({ commit }, payload) {
    commit('ADD_ARTICLE', payload)
  },
  removeArticle({ commit }, payload) {
    commit('REMOVE_ARTICLE', payload)
  },
  setAddress({ commit }, payload) {
    commit('SET_DELIVERY_ADDRESS', payload)
  },
}

export const getters = {
  getArticlesArray(state) {
    return state.articlesPanier
  },
  getArticlesWithoutDUplicates(state) {
    const uniqueArticles = new Map()
    state.articlesPanier.map((article) => {
      if (!uniqueArticles.has(article)) {
        uniqueArticles.set(article, { quantite: 1 })
      } else {
        uniqueArticles.get(article).quantite += 1
      }
    })
    return uniqueArticles
  },
  getTotal(state) {
    const summ = state.articlesPanier
      .map((item) => item.price)
      .reduce((prev, curv) => prev + curv)
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(summ)
  },
}
