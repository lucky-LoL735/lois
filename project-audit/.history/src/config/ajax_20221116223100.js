import axios from "axios";

const qs = require('qs')
/**
 * axios的get请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxGetData = dataParams => {
    return axios.get(dataParams.url, {params: dataParams.params})
}

/**
 * axios的delete请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxDeleteData = dataParams => {
    return axios.delete(dataParams, { param: dataParams.params })
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
 * axios的json数据请求
 * @param {*} dataParams
 * @returns
 */
export const ajaxDeleteJson = (dataParams) => {
    return axios({
        method: 'delete',
        url: dataParams.url,
        data: dataParams.params,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}
/**
 * post普通需求
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
// 封装了常用的http请求：get、post、postJson等等
//封装请求方法之后利用拦截器对请求错误请求进行处理，下面是请求拦截
