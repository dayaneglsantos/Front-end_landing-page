import Heading from '../Heading'
import { Logo } from './styles'

const LogoLink = ({ text, srcImg, link }) => {
  return (
    <Heading size="small">
      <Logo href={link}>{srcImg ? <img src={srcImg} alt={text} /> : text}</Logo>
    </Heading>
  )
}
export default LogoLink
