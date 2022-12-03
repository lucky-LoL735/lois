import Mock from 'mockjs'
const echart = Mock.mock({
  line: [{
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260]
  }],
  stackLine: [{
    value: []
  }]
})
