import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { CenterContainer, StyledText } from './styled'
import { client, clientNoAuth } from '../../network/axios-client'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const HelloWorld: FunctionComponent<Props> = ({ greeting, onSetGreeting, onResetAppState }) => {
  const setGreeting = () =>
    greeting === 'goodbye world' ? onSetGreeting('hello world') : onSetGreeting('goodbye world')
  console.log(clientNoAuth.get('/users').then(e => e))
  console.log(process.env)
  return (
    <CenterContainer>
      <StyledText>{greeting}</StyledText>
      <button type="button" onClick={setGreeting}>
        hello
      </button>
      <button type="button" onClick={onResetAppState}>
        reset app state
      </button>
    </CenterContainer>
  )
}

const mapStateToProps = (state: MainState) => {
  return {
    greeting: state.hello.greeting,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onSetGreeting: (greeting: string) => dispatch(actions.setGreetingSuccess(greeting)),
    onResetAppState: () => dispatch(actions.resetAppState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
