import { fireEvent, render, screen } from '@testing-library/react'
import Menu from './index'
import mock from '../NavLinks/mock'
import theme from '../../Styles/theme'

const logoData = {
  text: 'Logo',
  link: '#home'
}

describe('<Menu/>', () => {
  it('should render logo and main menu', () => {
    render(<Menu links={mock} logoData={logoData} />)

    const logo = screen.getByRole('heading', { name: 'Logo' })
    const navbar = screen.getByRole('navigation', { name: 'Main menu' })

    expect(logo).toBeInTheDocument()
    expect(navbar).toBeInTheDocument()
  })
  it('should render menu mobile and button to open and close menu', () => {
    render(<Menu links={mock} logoData={logoData} />)

    const button = screen.getByLabelText('Open/Close menu')
    const menuContainer = button.nextSibling

    expect(button).toHaveStyleRule('display', 'none')
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.maxTablet
    })
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.maxTablet
    })

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()

    fireEvent.click(button)

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.maxTablet
    })
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    fireEvent.click(menuContainer)

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.maxTablet
    })
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
  it('should not render links', () => {
    render(<Menu logoData={logoData} />)

    const link = screen.queryByRole('navigation', {
      name: 'Main menu'
    }).firstChild

    expect(link).not.toBeInTheDocument()
  })
})
