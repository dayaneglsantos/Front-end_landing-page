import { render, screen } from '@testing-library/react'
import GridContent from './index'

describe('<GridContent/>', () => {
  it('should render', () => {
    const { container } = render(<GridContent />)

    expect(container).toBeInTheDocument()
  })
})
