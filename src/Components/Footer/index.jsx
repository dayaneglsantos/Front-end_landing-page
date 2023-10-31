import SectionContainer from '../SectionContainer'
import Text from '../Text'
import { Container } from './styles'

const Footer = ({ footerHtml }) => {
  return (
    <Container>
      <SectionContainer>
        <Text>{footerHtml}</Text>
      </SectionContainer>
    </Container>
  )
}
export default Footer
