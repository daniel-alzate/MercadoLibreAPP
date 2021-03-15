import util from './'

describe('Suite test Utilities for currencyFormat() function', () => {
  test('format price into a string', () => {
    const price = 90000
    const expected = '$ 90.000'
    expect(util.currencyFormat(price)).toEqual(expected)
  })
  test('format price when is cero', () => {
    const price = 0
    const expected = '$ 0'
    expect(util.currencyFormat(price)).toEqual(expected)
  })
  test('format price when have a decimal', () => {
    const price = 21000.1
    const expected = '$ 21.000'
    expect(util.currencyFormat(price)).toEqual(expected)
  })

})