import { render, screen } from '@testing-library/react'
import GridImage from './index'
import mock from './mock'

describe('<GridImage/>', () => {
  it('should render', () => {
    const { container } = render(<GridImage {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
