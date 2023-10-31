import { render, screen } from '@testing-library/react'
import NavLinks from './index'
import mock from './mock'
import theme from '../../Styles/theme'
import { ThemeProvider } from 'styled-components'

// const renderTheme = (children) => {
//   return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
// }

describe('<NavLinks/>', () => {
  it('should render links', () => {
    render(<NavLinks links={mock} />)

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(mock.length)
  })
  it('should not render links', () => {
    render(<NavLinks />)

    const links = screen.queryAllByRole('link')

    expect(links).toHaveLength(0)
  })

  it('should render links in colums', () => {
    const { container } = render(<NavLinks links={mock} />)

    expect(container.firstChild).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.maxTablet
    })
  })
})
