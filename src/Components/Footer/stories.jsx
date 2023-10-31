import Footer from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>Feito com 🧡 por Dayane</p>`
  }
}

export const Template = (args) => {
  return (
    <>
      <GlobalStyle />
      <Footer {...args} />
    </>
  )
}
