import LogoLink from '.'
import GlobalStyle from '../../Styles/Global-Style'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo Link',
    link: 'http://google.com',
    srcImg: ''
  }
}

export const TextOnly = (args) => (
  <>
    <GlobalStyle />
    <LogoLink {...args} />
  </>
)
export const ImgOnly = (args) => (
  <>
    <GlobalStyle />
    <LogoLink {...args} />
  </>
)

ImgOnly.args = {
  srcImg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LOGO_OF_LOGO.svg/483px-LOGO_OF_LOGO.svg.png'
}
