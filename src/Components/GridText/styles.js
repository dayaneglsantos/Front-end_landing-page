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
  counter-reset: grid-counter;
`

export const GridItem = styled.div`
  margin-right: 2rem;

  ${Heading} {
    position: relative;
    left: 5rem;
  }

  ${Heading}::before {
    position: absolute;
    counter-increment: grid-counter;
    content: counter(grid-counter);
    font-size: 7rem;
    left: -5rem;
    top: -2rem;
    transform: rotate(5deg);
  }
`
