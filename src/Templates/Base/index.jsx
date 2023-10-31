import { Container } from './styles'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import GoTop from '../../Components/GoTop'

const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Container>
      <GoTop />
    </>
  )
}
export default Base
