import styled, { keyframes } from 'styled-components'
import theme from '../../Styles/theme'

const rotate = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    content: '';
    width: 6rem;
    height: 6rem;
    border-color: transparent;
    border-radius: 50%;
    border-width: 0.5rem;
    border-left: 0.5rem solid ${theme.colors.mediumGray};
    border-style: solid;
    animation: ${rotate()} 1s linear infinite;
  }
`
