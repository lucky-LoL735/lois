import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { def } from '@vue/shared'

export default {
  /**
   * mock bootstrap
   */
}
bootstrap () {
  let mock = new MockAdapter(axios)
  //mock success request
  mock.onGet('/success').reply(200, {
    msg: 'success'
  })
  //mock error request
  mock.onGet('/error').reply(500, {
    msg: 'failure'
  })
};
const app = createApp(App)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).mount('#app')
