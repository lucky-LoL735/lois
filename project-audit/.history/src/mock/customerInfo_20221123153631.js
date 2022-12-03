import Mock from 'mockjs';

const customer = Mock.mock({
    customerType: Mock.random.word(5),
    customerSubsys: Mock.random.word(10),
    cardType: Mock.random.word(2, 4),
    number: Mock.random.word(18),
    industry: Mock.random.word(2, 6),
    customerStutas: Mock.random.word(2,4)
})

export { customer };