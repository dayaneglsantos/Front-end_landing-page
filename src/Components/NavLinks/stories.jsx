import NavLinks from '.'
import GlobalStyle from '../../Styles/Global-Style'
import mock from './mock'

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: mock
  },
  argTypes: {
    links: { type: '' }
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <NavLinks {...args} />
    </>
  )
}
