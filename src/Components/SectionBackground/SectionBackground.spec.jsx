import { render, screen } from '@testing-library/react'
import SectionBackground from './index'
import theme from '../../Styles/theme'

describe('<SectionBackground/>', () => {
  it('should render with background white', () => {
    const { container } = render(
      <SectionBackground>
        <h1>Teste</h1>
      </SectionBackground>
    )
    expect(container.firstChild).toHaveStyleRule(
      'background',
      theme.colors.white
    )
  })
  it('should render with background dark', () => {
    const { container } = render(
      <SectionBackground background>
        <h1>Teste</h1>
      </SectionBackground>
    )
    expect(container.firstChild).toHaveStyleRule(
      'background',
      theme.colors.darkBlue
    )
  })
})
