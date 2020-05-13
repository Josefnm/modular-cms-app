import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import * as actions from '../../store/actions'
import { Container, SpaceBetween, StyledButton, StyledLink } from './styled'
import SideBar from '../SideBar'
import { useThunkDispatch } from '../../hooks/redux'

type Props = {}

const NavBar: FunctionComponent<Props> = () => {
  const dispatch = useThunkDispatch()
  const history = useHistory()
  const onLogout = () => {
    history.push('/')
    dispatch(actions.logout())
  }
  return (
    <Container>
      <SideBar />
      <SpaceBetween>
        <StyledLink exact to="/">
          home
        </StyledLink>
        <StyledLink to="/templates">Templates</StyledLink>
        <StyledLink to="/content">Content</StyledLink>
        <StyledLink exact to="/settings">
          Settings
        </StyledLink>
        <StyledButton onClick={onLogout}>Log out</StyledButton>
      </SpaceBetween>
    </Container>
  )
}

export default NavBar
