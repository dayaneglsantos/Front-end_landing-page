import theme from '../../Styles/theme'
import Heading from '../Heading'
import { render, screen } from '@testing-library/react'

describe('<Heading/>', () => {
  it('should render with default values', () => {
    render(<Heading>Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      color: theme.colors.darkBlue,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none'
    })
  })
  it('should render text with white color', () => {
    render(<Heading darkTheme>Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      color: theme.colors.white
    })
  })
  it('should render correctly the small size', () => {
    render(<Heading size="small">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium
    })
  })
  it('should render correctly the medium size', () => {
    render(<Heading size="medium">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large
    })
  })
  it('should render correctly the big size', () => {
    render(<Heading size="big">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge
    })
  })
  it('should render correctly the huge size', () => {
    render(<Heading size="huge">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge
    })
  })
  it('should render correct font-size when using mobile', () => {
    render(<Heading size="huge">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.maxTablet
    })
  })

  it('should render correct heading element', () => {
    render(<Heading as="h6">Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading.tagName.toLocaleLowerCase()).toBe('h6')
  })

  it('should render with uppercase letters', () => {
    render(<Heading uppercase>Olá</Heading>)

    const heading = screen.getByRole('heading', { name: 'Olá' })

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })
})
