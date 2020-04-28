import axios from 'axios'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})

export const clientNoAuth = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})

client.interceptors.request.use(
  async config => {
    config.headers.authorization = `Bearer ${await firebase.auth().currentUser.getIdToken()}`
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

clientNoAuth.interceptors.request.use(
  async config => {
    console.log(config)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
