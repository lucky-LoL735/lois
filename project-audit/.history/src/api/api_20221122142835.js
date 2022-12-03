// import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
import { ajaxGetData } from "@/config/ajax"
const api = {
  getTodoListPage(params) {
    console.log(params)
    console(1)
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  }
}
export default api