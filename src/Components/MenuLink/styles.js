import styled from 'styled-components'
import theme from '../../Styles/theme'

export const Link = styled.a`
  font-size: ${theme.fonts.sizes.small};
  padding: ${theme.spacings.small};
  color: ${theme.colors.darkBlue};
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.8rem;
    left: 25%;
    width: 50%;
    height: 0.2rem;
    background: ${theme.colors.red};
    transition: all 300ms ease-in-out;
    transform: scale(0);
  }

  &:hover::after {
    transform: scale(1);
  }
`
