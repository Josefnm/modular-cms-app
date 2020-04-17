import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})

export const clientNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
})
