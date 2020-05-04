import React, { FunctionComponent } from 'react'
import * as actions from '../../store/actions'
import { Container, StyledButton, StyledLink } from './styled'
import SideBar from '../SideBar'
import { useSelector, useThunkDispatch } from '../../hooks/redux'

type Props = {}

const NavBar: FunctionComponent<Props> = () => {
  const dispatch = useThunkDispatch()
  const userName = useSelector(state => state.user.profile.userName)
  const onLogout = () => dispatch(actions.logout())
  return (
    <Container>
      <SideBar />
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/templates">Templates</StyledLink>
      <StyledLink to="/templates/create">Create template</StyledLink>
      <StyledLink to="/content">Content</StyledLink>
      <StyledButton onClick={onLogout}>Log out</StyledButton>
    </Container>
  )
}

export default NavBar
