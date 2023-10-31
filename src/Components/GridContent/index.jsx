import { Container, Html } from './styles'
import SectionBackground from '../SectionBackground'
import Heading from '../Heading'
import Text from '../Text'

const GridContent = ({ title, html, background, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading uppercase darkTheme={background} as="h2">
          {title}
        </Heading>
        <Html>
          <Text>{html}</Text>
        </Html>
      </Container>
    </SectionBackground>
  )
}
export default GridContent
