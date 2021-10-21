import axios from 'axios'

export const adressAPI = axios.create({
  baseURL: process.env.DEV_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getAdress(adress) {
    const adresses = adress ? adress.split(' ') : []
    let requestAdress
    adresses.map((str) =>
      requestAdress !== undefined
        ? (requestAdress += '+' + str)
        : (requestAdress = str)
    )
    return adressAPI
      .get(process.env.ADRESS_API_URL + '?q=' + requestAdress)
      .then((response) => {
        const features = response.data.features
        const adressArray = []
        if (features) {
          features.map((feature) => adressArray.push(feature.properties.label))
        }
        return adressArray
      })
  },
}
