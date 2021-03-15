import * as React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow';
import CategoryCard from './content'

describe('CategoryCard component suites test', () => {
  const mockCategoryCardProps = () => {
    return {
      name: 'Computadores',
      onSelectCategory: jest.fn()
    }
  }
  test('Renders UI CategoryCard correctly by shallow rendering', () => {
    const props = mockCategoryCardProps()
    const shallowRenderer = ShallowRenderer.createRenderer();
    const confirmMessageRender = shallowRenderer.render(
      <CategoryCard name={props.name} onSelectCategory={props.onSelectCategory} />
    )
    expect(confirmMessageRender).toMatchSnapshot()
  })

})