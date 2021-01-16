import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.DEV_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  loginClient(userData) {
    return apiClient.post(process.env.DEV_LOGIN_API + '/login', userData)
  },
  registerClient(userData) {
    return apiClient.post(process.env.DEV_LOGIN_API + '/register', userData)
  },
}
