import styled from 'styled-components'
import { Section } from '../SectionContainer/styles'
import { Title } from '../Heading/styles'
import theme from '../../Styles/theme'

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #eee;
  border-bottom: ${theme.colors.mediumGray};
  transition: all 300ms ease-in-out;

  ${Section} {
    padding-top: 0;
    padding-bottom: 0;
  }
  ${Title} {
    padding-top: 0;
    padding-bottom: 0;
  }

  @media ${theme.media.maxTablet} {
    height: 100vh;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.visible ? 1 : 0)};

    ${Section} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
      align-items: center;
      overflow-y: auto;
    }

    ${Title} {
      display: flex;
      justify-content: center;
      padding-bottom: ${theme.spacings.large};
    }
  }
`
export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.maxTablet} {
    display: block;
    text-align: center;
    padding: ${theme.spacings.xxlarge} 0;
  }
`
export const Button = styled.button`
  z-index: 6;
  position: fixed;
  width: 4rem;
  height: 4rem;
  top: 2rem;
  right: 2rem;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkBlue};
  border: none;
  color: ${theme.colors.white};
  pointer-events: ${(props) => (props.visible ? 'none' : 'all')};

  @media ${theme.media.maxTablet} {
    display: flex;
  }

  > svg {
    height: 2, 5rem;
    width: 2.5rem;
  }
`
