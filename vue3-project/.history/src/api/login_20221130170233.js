import { ajaxPostData } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const loginApi = {
  postLoginData (param) {
    return ajaxPostData({ url: `${VUE_APP_ENV_API}/login/info`, param: param })
  }
}
export default loginApi
