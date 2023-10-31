import { useState } from 'react'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Button, MenuContainer, MenuContent } from './styles'
import NavLinks from '../NavLinks'
import LogoLink from '../LogoLink'
import SectionContainer from '../SectionContainer'

const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <MenuContainer visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <MenuContent>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContent>
        </SectionContainer>
      </MenuContainer>
    </>
  )
}
export default Menu
