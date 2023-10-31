import styled from 'styled-components'
import theme from '../../Styles/theme'

export const Container = styled.a`
  z-index: 6;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 4rem;
  width: 4rem;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.white};
  border-radius: 50%;
`
