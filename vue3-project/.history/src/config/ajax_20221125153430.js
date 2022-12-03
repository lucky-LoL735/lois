import axios from 'axios'
import { ElMessage } from 'element-plus'

const qs = require('qs')

const dealCode = (response) => {
  const code = response.data.code
  if (code !== 200) {
    ElMessage({
      message: response.data.msg,
      type: 'warning'
    })
    return Promise.reject(response.data)
  }
  return response.data
}

/**
 * axios的get请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxGetData = dataParams => {
  return axios.get(dataParams.url, { params: dataParams.params })
}

/**
 * axios的delete请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxDeleteData = dataParams => {
  return axios.delete(dataParams.url, { params: dataParams.params })
}
/**
 * axios的post请求之一，用于上传文件
 * @param {*} dataParams
 * @returns
 */
export const ajaxPostFormData = dataParams => {
  return axios({
    method: 'post',
    url: dataParams.url,
    data: dataParams.params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * delete的json数据请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxDeleteJson = (dataParams) => {
  return axios({
    url: dataParams.url,
    method: 'delete',
    data: dataParams.params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * post普通请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxPostData = dataParams => {
  return axios.post(dataParams.url, qs.stringify(dataParams.params))
}

/**
 * put的json请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxPutJson = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return axios.put(dataParams.url, dataParams.params, axiosConfig)
}

/**
 * post的json请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxPostJson = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return axios.post(dataParams.url, dataParams.params, axiosConfig)
}

/**
 * 全部请求拦截器处理
 */
const pendingRequests = new Map()
axios.interceptors.request.use(function (config) {
  const params = config.params || config.data
  const requestKey = `${config.url}/${JSON.stringify(params)}&request_type=${config.method}`
  if (pendingRequests.has(requestKey)) {
    // config.cancelToken = new axios.CancelToken((cancel) => {
    //    cancel(`重复的请求被主动拦截: ${requestKey}`)
    // })
  } else {
    pendingRequests.set(requestKey, config)
    config.requestKey = requestKey
  }
  return config
},
function (error) {
  pendingRequests.clear()
  return Promise.reject(error)
}
)

/**
 * 全局响应拦截器
 */
// 对axios的请求做全局拦截。同时使用Map保存当前请求的url，作为请求的唯一表示。
// 如果前端发出相同请求，且上一次请求与本次一致，则取消当前请求。该设置可以有效防止前端重复发出的请求，也可以预防表单的重复提交。
axios.interceptors.response.use(response => {
  return dealCode(response)
}, error => {
  pendingRequests.clear()
  if (axios.isCancel(error)) {
    const message = error && error.response && error.response.data
    ElMessage({
      message: message || '接口或网络异常',
      type: 'error'
    })
    return Promise.reject(error)
  }
  if (error) {
    ElMessage({
      message: error.message === 'Network Error' ? '接口或网络异常' : error.message,
      type: 'error'
    })
    return Promise.reject(error)
  }
  return Promise.reject(error)
})
