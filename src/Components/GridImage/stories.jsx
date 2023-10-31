import GridImage from '.'
import GlobalStyle from '../../Styles/Global-Style'
import mock from './mock'

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <GridImage {...args} />
    </>
  )
}
