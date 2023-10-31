import GridTwoColumns from '.'
import mock from './mock'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <GridTwoColumns {...args} />
    </>
  )
}
