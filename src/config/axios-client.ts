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

// Adds fresh access token on requests
client.interceptors.request.use(
  async config => {
    const newConfig = { ...config }
    newConfig.headers.authorization = `Bearer ${await firebase.auth().currentUser.getIdToken()}`
    return newConfig
  },
  error => {
    console.log('f')
    return Promise.reject(error)
  }
)
