import Mock from 'mockjs';

const customer = Mock.mock({
    customerType: Mock.Random.word(5),
    customerSubsys: Mock.Random.word(10),
    cardType: Mock.Random.word(2, 4),
    number: Mock.Random.id(),
    industry: Mock.Random.word(2, 6),
})

export { customer };