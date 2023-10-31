import { render, screen } from '@testing-library/react'
import Text from './index'
import theme from '../../Styles/theme'

describe('<Text/>', () => {
  it('should render', () => {
    const { debug } = render(<Text>Olá</Text>)
    debug()

    const text = screen.getByText('Olá')

    expect(text).toBeInTheDocument()
  })
  it('should render the correct font size', () => {
    const { debug } = render(<Text>Olá</Text>)
    debug()

    const text = screen.getByText('Olá')

    expect(text).toHaveStyle({
      'font-size': theme.fonts.sizes.medium
    })
  })
})
