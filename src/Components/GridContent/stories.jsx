import GridContent from '.'
import GlobalStyle from '../../Styles/Global-Style'
import mock from './mock'

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <GridContent {...args} />
    </>
  )
}
