import axios from "axios"
const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})
//请求拦截
http.interceptors.request.use(
  config => {
    //....todo
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
//响应拦截
http.interceptors.response.use(
  response => {
    //....todo
    const res = response.data
    return res
  },
  err => {
    return Promise.reject(err)
  })
export default http
