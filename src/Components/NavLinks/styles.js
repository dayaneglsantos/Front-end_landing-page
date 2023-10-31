import styled from 'styled-components'
import theme from '../../Styles/theme'

export const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;

  @media ${theme.media.maxTablet} {
    flex-flow: column wrap;
    align-content: center;
  }
`
