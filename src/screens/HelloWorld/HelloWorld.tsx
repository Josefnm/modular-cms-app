import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { CenterContainer, StyledText } from './styled'
import { clientNoAuth } from '../../network/axios-client'
import axios from 'axios'
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const HelloWorld: FunctionComponent<Props> = ({ greeting, onSetGreeting, onResetAppState }) => {
  const setGreeting = () =>
    greeting === 'goodbye world' ? onSetGreeting('hello world') : onSetGreeting('goodbye world')
  clientNoAuth.get('/users/cross').then(e => {
    console.log(e)
  })
  clientNoAuth.get('/users').then(e => {
    console.log(e)
  })
  axios.get('http://35.195.191.106:8080/users').then(e=>{
    console.log(e)
  })

  console.log(clientNoAuth)
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
