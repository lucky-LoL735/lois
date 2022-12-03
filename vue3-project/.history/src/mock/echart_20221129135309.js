import Mock from 'mockjs'
const echart = Mock.mock({
  line: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260]
  },
  stackLine: [
    {
      name: 'Email',
      data: [220, 187, 191, 234, 290, 330, 310]
    },
    {
      name: 'Union Ads',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Video Ads',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  bar: {
    data: [120, 200, 150, 80, 70, 110, 130]
  },
  stackBar:
    {
      DirectData: [320, 332, 301, 334, 390, 330, 320],
      EmailData: [120, 132, 101, 134, 90, 230, 210],
      UnionData: [220, 182, 191, 234, 290, 330, 310],
      VideoData: [150, 232, 201, 154, 190, 330, 410],
      SearchData: [862, 1018, 964, 1026, 1679, 1600, 1570],
      BaiduData: [620, 732, 701, 734, 1090, 1130, 1120],
      GoogleData: [120, 132, 101, 134, 290, 230, 220],
      BingData: [60, 72, 71, 74, 190, 130, 110],
      OthersData: [62, 82, 91, 84, 109, 110, 120]
    },
  Doughnut: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ],
  funnel: [
    { value: 60, name: 'Visit' },
    { value: 40, name: 'Inquiry' },
    { value: 20, name: 'Order' },
    { value: 80, name: 'Click' },
    { value: 100, name: 'Show' }
  ]
})
export { echart }
