import axios from 'axios'

const qs = require('qs')
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
    config.cancelToken = new axios.CancelToken((cancel) => {
      // cancel(`重复的请求被主动拦截: ${requestKey}`)
    })
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
