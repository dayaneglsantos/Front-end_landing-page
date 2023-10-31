import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-family: ${theme.fonts.default};
    font-size: 1.6rem;

  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${theme.fonts.secondary};
    margin: ${theme.spacings.medium} 0;
  }

  p{
    margin: ${theme.spacings.medium} 0;
  }

  ul, ol{
    margin: ${theme.spacings.medium} 0;
  }

  a{
    color: ${theme.colors.red};
  }

`
export default GlobalStyle
