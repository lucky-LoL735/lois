import Mock from 'mockjs';

const customer = Mock.mock({
    customerType: Mock.Random.word(5),
    customerSubsys: Mock.mock('@ctitle(3,6)'),
    cardType: Mock.mock('@ctitle(3,6)'),
    number: Mock.Random.id(),
    industry: Mock.mock('@ctitle(3,6)'),
    customerStutas: Mock.mock('@ctitle(3,6)')
})

export { customer };