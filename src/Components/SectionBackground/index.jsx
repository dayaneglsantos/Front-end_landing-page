import SectionContainer from '../SectionContainer'
import { SectionBg } from './styles'

const SectionBackground = ({
  children,
  background = false,
  sectionId = ''
}) => {
  return (
    <SectionBg background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </SectionBg>
  )
}
export default SectionBackground
