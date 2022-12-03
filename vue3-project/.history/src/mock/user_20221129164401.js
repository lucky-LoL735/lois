import Mock from 'mockjs'
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某',
    roleType: 0 // 0 为管理员 1为一般用户
  },
  {
    id: 2,
    username: 'super',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '李某某',
    roleType: 1
  }
]

const Users = []

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

const Projects = []
for (let i = 0; i < 86; i++) {
  Projects.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.mock('@ctitle(3,6)'),
    alias: Mock.Random.word(2, 6),
    createTime: Mock.Random.datetime()
  }))
}

export { LoginUsers, Users, Projects }
