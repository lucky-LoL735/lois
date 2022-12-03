import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import { LoginUsers, Users } from './user'
import { Projects } from './project'
// import Mock from 'mockjs'
// const _Users = Users
// const _Project = Projects
export default {
  bootstrap () {
    const mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })
    // 获取项目列表
    mock.onGet('/project/listpage').reply(config => {
    
    })
  }
}
