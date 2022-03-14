import 'jest-styled-components'
import { cleanup, render } from 'unit-test'
import Center from '..'

afterEach(cleanup)

describe('Center', () => {
  it('should take a snapshot', async () => {
    const { findByText } = render(<Center>Text</Center>)
    const component = await findByText('Text')
    expect(component).toBeVisible()
  })

  it('shows correct align props', async () => {
    const { findByText } = render(<Center>Text</Center>)
    const component = await findByText('Text')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('justify-content', 'center')
    expect(component).toHaveStyleRule('flex-direction', 'column')
  })
})
