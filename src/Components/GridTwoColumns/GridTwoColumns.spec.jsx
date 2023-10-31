import { render, screen } from '@testing-library/react'
import GridTwoColumns from './index'
import mock from './mock'
import theme from '../../Styles/theme'

describe('<GridTwoColumns/>', () => {
  it('should render ', () => {
    render(<GridTwoColumns {...mock} />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('should render title with color white', () => {
    render(
      <GridTwoColumns title="Qualquer" text="Qualquer coisa" srcImg="img.png" />
    )

    const heading = screen.getByRole('heading')
    expect(heading).toHaveStyleRule('color', theme.colors.darkBlue)
  })
})
