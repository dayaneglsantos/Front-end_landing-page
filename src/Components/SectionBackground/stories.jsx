import SectionBackground from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nisi consequuntur nostrum voluptate repellendus cumque natus accusamus alias quas maiores ratione quia minus minima at, cum illo soluta quos culpa`,
    background: true
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' }
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <SectionBackground {...args} />
    </>
  )
}
