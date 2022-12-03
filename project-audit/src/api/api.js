// import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
import { ajaxGetData } from "@/config/ajax"
const api = {
  getTodoListData(params) {
    //console.log(params)
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  },
  queryTodoListData(params) {
    return ajaxGetData({ url: `/todo/post`, params:params })
  },
  getLogListPage(params) {
    return ajaxGetData({ url: `/log/listpage`, params: params })
  },
  getLogDetail (params) {
    return ajaxGetData({ url: `/log/detail`, params: params })
  },
  getHomeData (params) {
    return ajaxGetData({ url: `/home/info`, params: params })
  },
  getCustomerInfo(params) {
    return ajaxGetData({ url: `handleTask/info`, params: params})
  }
}

export default api