import React, { FC, useEffect } from 'react'
import { MenuContainer, NameContainer } from './styled'
import { CenteredRowContainer } from '../../common'
import { useClickedOutside } from '../../../hooks/useClickOutside'
import { SearchButton } from '../../buttons'
import Menu from '../../Menu'

type Props = {
  title: string
  chosenValueName: string
}

const SearchMenu: FC<Props> = ({ children, chosenValueName, title }) => {
  const [menuOpen, setOpen, wrapperRef] = useClickedOutside()

  useEffect(() => setOpen(false), [chosenValueName, setOpen])

  return (
    <CenteredRowContainer ref={wrapperRef}>
      <NameContainer>{title}</NameContainer>
      <MenuContainer>
        <SearchButton type="button" onClick={() => setOpen(true)}>
          {chosenValueName}
        </SearchButton>
        <Menu menuOpen={menuOpen}>{children}</Menu>
      </MenuContainer>
    </CenteredRowContainer>
  )
}

export default SearchMenu
