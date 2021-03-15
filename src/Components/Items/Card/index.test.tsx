import * as React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow';
import ItemCard from './content'

describe('ItemCard component suites test', () => {
  const mockItemCardProps = () => {
    return {
      title: 'Samsung Galaxy A71 128 Gb Prism Crush Silver 6 Gb Ram',
      thumbnail: 'http://http2.mlstatic.com/D_939396-MLA41632917096_052020-I.jpg',
      price: 53999,
      installments: {
        "quantity": 9,
        "amount": 5999.89,
        "rate": 0,
        "currency_id": "ARS"
      },
      onSelectItem: jest.fn()
    }
  }
  test('Renders UI ItemCard correctly by shallow rendering', () => {
    const props = mockItemCardProps()
    const shallowRenderer = ShallowRenderer.createRenderer();
    const confirmMessageRender = shallowRenderer.render(
      <ItemCard title={props.title}
        thumbnail={props.thumbnail}
        price={props.price}
        installments={props.installments} 
        onSelectItem={props.onSelectItem} />
    )
    expect(confirmMessageRender).toMatchSnapshot()
  })

})