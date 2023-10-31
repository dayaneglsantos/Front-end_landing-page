import { render, screen } from '@testing-library/react'
import Footer from './index'

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = render(<Footer />)
    expect(container).toBeInTheDocument()
  })
})
