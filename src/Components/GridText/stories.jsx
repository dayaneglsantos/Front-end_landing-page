import GridText from '.'
import GlobalStyle from '../../Styles/Global-Style'
import mock from './mock'

export default {
  title: 'GridText',
  component: GridText,
  args: mock
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <GridText {...args} />
    </>
  )
}
