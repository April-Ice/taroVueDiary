import axios from 'axios'

async function request(url, options) {
  const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, //默认路径
    baseURL: 'http://localhost:8083', //默认路径
    //设置超时时间，超过该时间就不会发起请求
    timeout: 3000
  });

  // 请求拦截
  service.interceptors.request.use(config => {
    config.data = config.body
    config.headers = {

    }
    return config
  });

  //请求返回拦截
  service.interceptors.response.use(response => {
    if (response.data.code === 0) {
      return response.data.data
    } else {
      return response.data
    }
  })

  if (window.vim && window.vm.$request) {
    return window.vm.$request(url, options)
  } else {
    return service(url, options)
  }
}
export default request
