import React, { FC, MutableRefObject } from 'react'
import { MenuContainer } from './styled'

type Props = {
  menuOpen: boolean
  wrapperRef?: MutableRefObject<null>
}

const Menu: FC<Props> = ({ children, menuOpen, wrapperRef }) => {
  return (
    <MenuContainer ref={wrapperRef} isOpen={menuOpen}>
      {menuOpen && children}
    </MenuContainer>
  )
}

export default Menu
