import MenuLink from '../MenuLink'
import { Nav } from './styles'

const NavLinks = ({ links = [] }) => {
  return (
    <Nav aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.href} {...link} />
      ))}
    </Nav>
  )
}
export default NavLinks
