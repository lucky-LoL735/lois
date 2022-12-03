import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Mock } from 'mockjs'
// import { LoginUsers, Users } from './user'
import { Projects } from './project'
// const _Users = Users
const _Project = Projects
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
      const { page, name } = config.params
      let mockProjects = _Project.filter(project => {
        if ((name && project.projectName === name) || name === '') {
          return true
        }
      })
      const total = mockProjects.length
      mockProjects = mockProjects.filter((u, index) => index < 10 * page && index >= 10 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            projects: mockProjects
          }])
        }, 500)
      })
    })
    // 新增项目
    mock.onPost('/project/add').reply(config => {
      const { projectName, alias, desc, capital } = JSON.parse(config.data)
      _Project.unshift({
        id: Mock.Random.guid(),
        projectName,
        alias,
        desc,
        capital,
        createTime: +new Date()
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 500)
      })
    })
    // 编辑项目
    mock.onPut('/project/edit').reply(config => {
      const { id, projectName, alias, desc, capital } = JSON.parse(config.data)
      _Project.some(u => {
        console.log(u)
        if (u.id === id) {
          u.projectName = projectName
          u.alias = alias
          u.desc = desc
          u.capital = capital
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }])
        }, 500)
      })
    })
  }
}
