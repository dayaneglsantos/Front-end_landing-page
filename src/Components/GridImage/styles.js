import styled from 'styled-components'
import theme from '../../Styles/theme'
import { Title as Heading } from '../Heading/styles'
import { Container as Text } from '../Text/styles'

export const Container = styled.div`
  ${Text} {
    margin-bottom: ${theme.spacings.xhuge};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacings.xlarge};
`

export const GridItem = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    transition: all 300ms ease-in-out;
  }

  img:hover {
    transform: rotate(10deg) scale(1.2);
  }
`
