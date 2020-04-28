import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { Container, StyledLink } from './styled'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const NavBar: FunctionComponent<Props> = ({ userName }) => {
  return (
    <Container>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/signup">Signup</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <div>Welcome, {userName}</div>
    </Container>
  )
}

const mapStateToProps = (state: MainState) => {
  return {
    userName: state.user.profile.userName,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onSetGreeting: (greeting: string) => dispatch(actions.setGreetingSuccess(greeting)),
    onResetAppState: () => dispatch(actions.resetAppState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
