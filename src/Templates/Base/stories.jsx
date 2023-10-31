import Base from '.'
import GlobalStyle from '../../Styles/Global-Style'
import { mockBase } from './mock'

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <Base {...args} />
    </>
  )
}
