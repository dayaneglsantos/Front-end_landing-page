import styled from 'styled-components'
import theme from '../../Styles/theme'
import { Title } from '../Heading/styles'

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: ${theme.spacings.large};

  @media ${theme.media.maxTablet} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${Title} {
    margin-bottom: ${theme.spacings.large};
  }
`

export const TextContainer = styled.div`
  @media ${theme.media.maxTablet} {
    margin-bottom: ${theme.spacings.large};
  }
`

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`
