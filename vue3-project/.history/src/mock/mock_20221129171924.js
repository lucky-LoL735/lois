import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import { Users } from './user'
import { Projects } from './project'
import { echart } from './echart'
const _Users = Users
let _Project = Projects
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
      // console.log(Mock)
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
    // 删除项目
    mock.onGet('/project/remove').reply(config => {
      const { id } = config.params
      _Project = _Project.filter(u => u.id !== id)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })
    // 获取图例信息
    mock.onGet('/echart/info').reply(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            data: echart,
            code: 200
          }])
        }, 500)
      })
    })
    // 批量删除项目
    mock.onGet('/project/batchremove').reply(config => {
      let { ids } = config.params
      console.log(ids)
      ids = ids.split(',')
      _Project = _Project.filter(u => !ids.includes(u.id))

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })
    // 获取用户列表
    mock.onGet('/user/listpage').reply(config => {
      const { page, name } = config.params
      let mockuser = _Users.filter(user => {
        if ((name && user.name === name) || name === '') return true
        return false
      })
      const total = mockuser.length
      mockuser = mockuser.filter((u, index) => index < 10 * page && index >= 10 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            users: user
          }])
        }, 500)
      })
    })
  }
}
