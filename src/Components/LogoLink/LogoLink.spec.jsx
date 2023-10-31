import { render, screen } from '@testing-library/react'
import LogoLink from './index'

describe('<LogoLink/>', () => {
  it('should render a text link', () => {
    render(<LogoLink text="Exemplo" link="link.com" />)

    const textLink = screen.getByRole('link')

    expect(textLink).toHaveAttribute('href', 'link.com')
  })
  it('should render a image link', () => {
    render(<LogoLink text="Exemplo" link="link.com" srcImg="./localdaimagem" />)

    const imgLink = screen.getByRole('img')

    expect(imgLink).toHaveAttribute('src', './localdaimagem')
  })
})
