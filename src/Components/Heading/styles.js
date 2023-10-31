import styled from 'styled-components'
import theme from '../../Styles/theme'

const titleSize = (size) => {
  switch (size) {
    case 'small':
      return theme.fonts.sizes.medium
    case 'medium':
      return theme.fonts.sizes.large
    case 'big':
      return theme.fonts.sizes.xlarge
    case 'huge':
      return theme.fonts.sizes.xhuge
  }
}

export const Title = styled.h1`
  color: ${(props) =>
    props.darkTheme ? theme.colors.white : theme.colors.darkBlue};
  font-size: ${(props) => titleSize(props.size)};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

  @media ${theme.media.maxTablet} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`
