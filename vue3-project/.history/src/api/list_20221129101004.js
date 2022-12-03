import { ajaxGetData, ajaxPutJson, ajaxPostJson } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const listApi = {
  getProjectListPage (params) {
    // console.log(params)
    return ajaxGetData({ url: `${VUE_APP_ENV_API}project/listpage`, params: params })
  },
  putEditProject (params) {
    return ajaxPutJson({ url: `${VUE_APP_ENV_API}project/edit`, params: params })
  },
  postAddProject (params) {
    return ajaxPostJson({ url: `${VUE_APP_ENV_API}project/add`, params: params })
  },
  getRemoveProject (params) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}project/remove`, params: params })
  },
  getEchartInfo(params) {
    
  }
}
export default listApi
