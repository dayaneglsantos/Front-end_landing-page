import Menu from '.'
import mock from '../NavLinks/mock'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      srcImg: '',
      text: 'Logo',
      link: '#home'
    }
  },
  argTypes: {
    children: { type: 'string' }
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <Menu {...args} />
    </>
  )
}
