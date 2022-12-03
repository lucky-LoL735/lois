import { ajaxPostData } from '@/config/ajax'
const { VUE_APP_ENV_API } = process.env
const loginApi = {
  postLoginData (params) {
    return ajaxPostData({ url: `${VUE_APP_ENV_API}login/info`, params: params })
  }
}
export default loginApi
