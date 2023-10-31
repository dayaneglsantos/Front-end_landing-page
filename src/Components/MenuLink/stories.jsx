import MenuLink from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    href: 'http://globo.com',
    newTab: 'false'
  },
  argTypes: {
    children: { type: 'string' },
    href: { type: 'string' },
    newTab: { type: 'boolean' }
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <MenuLink {...args} />
    </>
  )
}
