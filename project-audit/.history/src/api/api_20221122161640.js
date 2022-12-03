// import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
import { ajaxGetData } from "@/config/ajax"
const api = {
  getTodoListData(params) {
    //console.log(params)
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  },
  getLogListPage(params) {
    return ajaxGetData({ url: `/log/listpage`, params: params })
  },
  getLogDetail (params) {
    return ajaxGetData({ url: `/log/detail`, params: params })
  }
}
export default api