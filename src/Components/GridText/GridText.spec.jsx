import { render, screen } from '@testing-library/react'
import GridText from './index'
import mock from './mock'

describe('<GridText/>', () => {
  it('should render', () => {
    const { container } = render(<GridText {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
