import { render, screen } from '@testing-library/react'
import GoTop from './index'

describe('<GoTop/>', () => {
  it('should render', () => {
    const { container } = render(<GoTop />)
    expect(container).toBeInTheDocument()
  })
})
