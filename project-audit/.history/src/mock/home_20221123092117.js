import Mock from 'mockjs';

const homeInfo = Mock.mock({
    message: [{
        content: '这是消息1',
        author: '张三'
    }, {
        content: '这是消息2',
        author: '李四'
    }],
    echart: {
        line: {
            todo: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            already: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        'bie|1-1000000': 1111
    },
    task: {
        'todo|1-100': 1,
        'already|1-100': 100
    }
})
export { homeInfo };