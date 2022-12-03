import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
const api = {
  getTodoListPage (params) {
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  }
}
export default api