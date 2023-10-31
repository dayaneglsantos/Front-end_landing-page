import styled from 'styled-components'
import theme from '../../Styles/theme'

export const Container = styled.div`
  padding-top: 5.4rem;

  @media ${theme.media.maxTablet} {
    padding-top: 0;
  }
`
