import Text from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus molestias itaque laudantium quae, ducimus odit numquam, quis provident beatae laborum natus! Eos perspiciatis omnis iure, nam quibusdam necessitatibus laborum quaerat!`
  },
  argTypes: {
    children: { type: 'string' }
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <Text {...args} />
    </>
  )
}
