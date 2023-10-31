import { string } from 'prop-types'
import Heading from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Título'
  },
  argTypes: {
    children: { type: string }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const DarkTheme = (args) => (
  <>
    <GlobalStyle />
    <Heading {...args} darkTheme />
  </>
)
export const LightTheme = (args) => (
  <>
    <GlobalStyle />
    <Heading {...args} />
  </>
)

DarkTheme.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
