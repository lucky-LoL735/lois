// import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
import { ajaxGetData } from "@/config/ajax"
const api = {
  getTodoListData(params) {
    //console.log(params)
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  }
}
export default api