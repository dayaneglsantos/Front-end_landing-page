import { Container, Grid, GridItem } from './styles'
import SectionBackground from '../SectionBackground'
import Heading from '../Heading'
import Text from '../Text'

const GridImage = ({
  title,
  description,
  background,
  grid,
  sectionId = ''
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading uppercase darkTheme={background} size="huge" as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Grid>
          {grid.map((item) => (
            <GridItem key={item.altText}>
              <img src={item.srcImage} alt={item.altText} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  )
}
export default GridImage
