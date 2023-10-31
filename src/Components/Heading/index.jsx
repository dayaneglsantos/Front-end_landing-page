import P from 'prop-types'
import { Title } from './styles'

const Heading = ({
  children,
  darkTheme = false,
  size = 'huge',
  as = 'h1',
  uppercase = false
}) => {
  return (
    <Title darkTheme={darkTheme} size={size} as={as} uppercase={uppercase}>
      {children}
    </Title>
  )
}
export default Heading

Heading.propTypes = {
  children: P.node.isRequired,
  darkTheme: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge'])
}
