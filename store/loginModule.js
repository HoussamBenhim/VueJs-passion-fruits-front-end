import axios from 'axios'
import loginService from '@/services/loginService.js'

export const state = () => ({
  userData: null,
  loginFormIsOppen: false,
  registerFormIsOpen: false,
  dropDownMenuIsOpen: false,
})

export const mutations = {
  SET_USER_DATA(state, data) {
    state.userData = data.user
    localStorage.setItem('userData', JSON.stringify(data))
    axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem('userData')
    location.reload()
  },
  SET_LOGIN_FORM_STATE(state) {
    state.loginFormIsOppen = !state.loginFormIsOppen
  },
  SET_REGISTER_FORM_STATE(state) {
    state.registerFormIsOpen = !state.registerFormIsOpen
  },
  SET_DROP_DOWN_MENU(state) {
    state.dropDownMenuIsOpen = !state.dropDownMenuIsOpen
  },
}

export const actions = {
  setUserData({ commit }, userData) {
    commit('SET_USER_DATA', userData)
  },
  logoutUser({ commit }) {
    commit('CLEAR_USER_DATA')
  },
  setLoginFormState({ commit }) {
    commit('SET_LOGIN_FORM_STATE')
  },
  setRegisterFormState({ commit }) {
    commit('SET_REGISTER_FORM_STATE')
  },
  setDropDownMenuState({ commit }) {
    commit('SET_DROP_DOWN_MENU')
  },
  async registerClient({ commit }, payload) {
    const { data } = await loginService.registerClient(payload)
    commit('SET_USER_DATA', data)
    return data
  },
  async logClient({ commit }, payload) {
    const { data } = await loginService.loginClient(payload)
    commit('SET_USER_DATA', data)
    return data
  },
}

export const getters = {
  getUserName(state) {
    return state.userData ? state.userData.nom : 'connexion'
  },
  isLogged(state) {
    // eslint-disable-next-line no-unneeded-ternary
    return state.userData !== null ? true : false
  },
}
