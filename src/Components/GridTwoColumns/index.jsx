import { TwoColumns, TextContainer, ImageContainer } from './styles'
import SectionBackground from '../SectionBackground'
import Heading from '../Heading'
import Text from '../Text'

const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = ''
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <TwoColumns background={background}>
        <TextContainer>
          <Heading uppercase darkTheme={background} as="h2">
            {title}
          </Heading>
          <Text>{text}</Text>
        </TextContainer>
        <ImageContainer>
          <img src={srcImg} alt={title} />
        </ImageContainer>
      </TwoColumns>
    </SectionBackground>
  )
}
export default GridTwoColumns
