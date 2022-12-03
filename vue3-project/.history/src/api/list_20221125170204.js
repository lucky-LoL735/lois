import { ajaxGetData, ajaxPutJson, ajaxPostJson } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const listApi = {
  getProjectListPage (params) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}project/listpage`, params: params })
  },
  putEditProject (params) {
    return ajaxPutJson({ url: `${VUE_APP_ENV_API}project/edit`, params: params })
  },
  putAddProject (params) {
    return ajaxPostJson({ url: `${VUE_APP_ENV_API}project/add`, params: params })
  }
}
export default listApi
