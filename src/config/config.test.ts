import config from '.'

const c = config.toString()

test('config is created correctly', () => {
  expect(c).toMatchSnapshot()
})
