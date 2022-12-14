import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginUsers, Users } from './user'
import { Projects } from './project'
// import Mock from 'mockjs'
const _Users = Users
const _Project = Projects
export default {
    bootstrap() {
        const mock = new MockAdapter(axios)

        // mock success request
        mock.onGet('/success').reply(200, {
            msg: 'success'
        })

        // mock error request
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        })

        // 登录
        mock.onPost('/login').reply(config => {
            const { username, password } = JSON.parse(config.data)
            return new Promise((resolve, reject) => {
                let user = null
                setTimeout(() => {
                    const hasUser = LoginUsers.some(u => {
                        if (u.username === username && u.password === password) {
                            user = JSON.parse(JSON.stringify(u))
                            user.password = undefined
                            return true
                        }
                    })

                    if (hasUser) {
                        resolve([200, { code: 200, msg: '请求成功', user }]);
                    } else {
                        resolve([200, { code: 500, msg: '账号或密码错误' }]);
                    }
                }, 500)
            })
        })

        // 获取用户列表
        mock.onGet('/user/list').reply(config => {
            const { name } = config.params

            const mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) === -1) return false;
                return true
            })
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users: mockUsers
                    }])
                }, 500)
            })
        })

        // 获取用户列表（分页）
        mock.onGet('/user/listpage').reply(config => {
            const { page, name } = config.params
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) === -1) return false;
                return true
            })
            const total = mockUsers.length
            mockUsers = mockUsers.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        total: total,
                        users: mockUsers
                    }])
                }, 500)
            })
        })
        // 获取项目列表（分页）
        mock.onGet('/project/listpage').reply(config => {
            let { page, name } = config.params
            let mockProjects = _Project.filter(project => {
                if (name && project.projectName.indexOf(name) === -1) return false;
                return true
            })
            const total = mockProjects.length
            mockProjects = mockProjects.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));
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
    }
}
