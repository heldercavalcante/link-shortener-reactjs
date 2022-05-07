import axios from 'axios'

export const key = "e38ab4e5fab0a6b5d61b6fcc0519b7a2aadac114";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers:{
    'Authorization':`Bearer ${key}`
  }
})

export default api;