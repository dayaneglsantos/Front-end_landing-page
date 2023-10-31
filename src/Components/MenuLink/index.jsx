import { Link } from './styles'

const MenuLink = ({ children, href, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'

  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  )
}
export default MenuLink
