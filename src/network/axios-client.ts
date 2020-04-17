import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})

export const clientNoAuth = axios.create({
  baseURL: 'http://35.195.191.106:8080',
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})

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
