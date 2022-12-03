import { ajaxGetData } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const loginApi = {
  getLoginData (param) {
    return ajaxGetData({ url: `${VUE_APP_ENV_API}/login/info`, param: param })
  }
}
export default loginApi
