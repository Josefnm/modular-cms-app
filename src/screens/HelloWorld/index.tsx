import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { Link } from 'react-router-dom'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { CenterContainer, StyledText } from './styled'
import { clientNoAuth } from '../../network/axios-client'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

type User = {
  id: string
  userName: string
  email: string
}

const HelloWorld: FunctionComponent<Props> = ({ greeting, onSetGreeting, onResetAppState }) => {
  const setGreeting = () =>
    greeting === 'goodbye world' ? onSetGreeting('hello world') : onSetGreeting('goodbye world')

  useEffect(() => {
    clientNoAuth.get('/users/cross').then(e => {
      console.log(e)
    })
  }, [])

  const [user, setUser] = useState<User>(undefined)
  const [userName, setUserName] = useState('')

  const saveUser = async () => {
    try {
      const res = await clientNoAuth.post('/users', { userName })
      console.log('res', res.data)
      setUser(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  return (
    <CenterContainer>
      <StyledText>{greeting}</StyledText>
      <button type="button" onClick={setGreeting}>
        hello
      </button>
      <button type="button" onClick={onResetAppState}>
        reset store
      </button>
      <Link to="/test">page2</Link>
      <input name="userName" value={userName} onChange={onNameChange} />
      <button type="button" onClick={saveUser}>
        save user
      </button>
      <div> {user ? `id: ${user.id}` : ''}</div>
      <div> {user ? `name: ${user.userName}` : ''}</div>
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
