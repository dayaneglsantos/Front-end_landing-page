import { Container } from './styles'

const Text = ({ children }) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />
}
export default Text
