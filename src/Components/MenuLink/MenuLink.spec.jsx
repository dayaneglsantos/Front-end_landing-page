import { render, screen } from '@testing-library/react'
import MenuLink from './index'

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    render(<MenuLink href="https://localhost">Link</MenuLink>)

    const link = screen.getByRole('link', { name: 'Link' })

    expect(link).toHaveAttribute('target', '_self')
  })
  it('should render open in a new tab', () => {
    render(
      <MenuLink href="https://localhost" newTab>
        Link
      </MenuLink>
    )

    const link = screen.getByRole('link', { name: 'Link' })

    expect(link).toHaveAttribute('target', '_blank')
  })
})
