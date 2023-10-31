import styled from 'styled-components'
import theme from '../../Styles/theme'

export const SectionBg = styled.section`
  background: ${(props) =>
    props.background ? theme.colors.darkBlue : theme.colors.white};
  color: ${(props) =>
    props.background ? theme.colors.white : theme.colors.darkBlue};
  min-height: 100vh;
  display: flex;
  align-items: center;
`
