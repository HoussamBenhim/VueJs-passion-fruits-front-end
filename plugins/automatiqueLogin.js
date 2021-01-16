import axios from 'axios'
export default ({ store }) => {
  window.onNuxtReady(() => {
    const userString = localStorage.getItem('userData')
    if (userString) {
      const userData = JSON.parse(userString)
      store.dispatch('loginModule/setUserData', userData)
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          store.dispatch('loginModule/logout')
        }
        return Promise.reject(error)
      }
    )
  })
}
