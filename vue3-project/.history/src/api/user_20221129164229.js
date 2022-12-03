import { ajaxGetData, ajaxPutJson, ajaxPostJson } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const userApi = {
  getUserListPage (params) {
    // console.log(params)
    return ajaxGetData({ url: `${VUE_APP_ENV_API}user/listpage`, params: params })
  },
  putEditUser (params) {
    return ajaxPutJson({ url: `${VUE_APP_ENV_API}user/edit`, params: params })
  },
  postAddUser (params) {
    return ajaxPostJson({ url: `${VUE_APP_ENV_API}user/add`, params: params })
  },
  getRemoveUser (params) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}user/remove`, params: params })
  },
  getBatchRemoveUser (params) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}user/batchremove`, params: params })
  },
  getEchartInfo (params) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}echart/info`, params: params })
  }
}
export default userApi
