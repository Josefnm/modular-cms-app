import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import * as actions from '../../store/actions'
import { Container, StyledButton, StyledLink } from './styled'
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
      <StyledLink exact to="/">
        home
      </StyledLink>
      <StyledLink exact to="/templates">
        Templates
      </StyledLink>
      <StyledLink exact to="/templates/create">
        Create template
      </StyledLink>
      <StyledLink exact to="/content">
        Content
      </StyledLink>
      <StyledLink exact to="/settings">
        Settings
      </StyledLink>
      <StyledButton onClick={onLogout}>Log out</StyledButton>
    </Container>
  )
}

export default NavBar
