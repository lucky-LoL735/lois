import Mock from 'mockjs'
// console.log('mock' + Mock)
const Projects = []
for (let i = 0; i < 86; i++) {
  Projects.push(Mock.mock({
    id: Mock.Random.guid(),
    projectName: Mock.mock('@ctitle(3,6)'),
    alias: Mock.Random.word(2, 6),
    desc: Mock.mock('@ctitle(3,100)'),
    'capital|1-100000000': 1,
    createTime: Mock.Random.datetime()
  }))
}

export { Projects }
