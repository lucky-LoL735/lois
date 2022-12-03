// import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
import { ajaxGetData } from "@/config/ajax"
const api = {
  getTodoListPage (params) {
    return ajaxGetData({ url: '/todo', params: params })
  }
}
export default api