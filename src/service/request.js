import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {},
  withCredentials: true
})

// 请求拦截
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config
}, (err) => {

})

// 响应拦截
instance.interceptors.response.use((res) => {
  NProgress.done()
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('请求错误')
        break
      case 401:
        console.log('未授权访问')
        break
      default:
        console.log('其他错误信息')
    }
  }
  return err
})

export default instance
