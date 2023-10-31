import styled from 'styled-components'
import theme from '../../Styles/theme'
import { Section } from '../SectionContainer/styles'
import { Container as Text } from '../Text/styles'

export const Container = styled.footer`
  text-align: center;
  border-top: 1px solid ${theme.colors.mediumGray};
  font-size: ${theme.fonts.sizes.small};
  padding: 16px 0;

  ${Section} {
    padding: 0;
  }

  ${Text} {
    font-size: ${theme.fonts.sizes.small};
  }
`
