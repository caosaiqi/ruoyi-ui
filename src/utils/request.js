import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000 ,
  transformRequest: [function (data) {
    data = qs.stringify(data, { allowDots: true })
    return data
  }],
  // #设置Content-Type
  // headers:{
  //   'Content-Type': 'application/json;charset=utf-8'
  // }
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (JSON.parse(sessionStorage.getItem('Token'))) {
    //   config.headers['ACCESS-X-TOKEN'] = JSON.parse(sessionStorage.getItem('Token')).token
    // }
    console.log(config)
    return config
  },
  error => {
    // do something with request error
    //console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

if(res.code==undefined){
  return res}
// }else
if(res.code==403){


    sessionStorage.clear()
    window.location.reload()

}
    if (res.code!== 200&&res.code!== 1057) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })}


        return res

    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {

    // }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
