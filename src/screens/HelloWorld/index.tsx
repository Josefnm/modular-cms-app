import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { Link } from 'react-router-dom'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { CenterContainer, StyledText } from './styled'
import { client, clientNoAuth } from '../../network/axios-client'
import { uploadImage } from '../../config/firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Modal from '../../components/modal'
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
  const search = async () => {
    console.log(firebase.auth().currentUser)
    try {
      /*
      const res = await client.post('/content', {
        ownerId: firebase.auth().currentUser.uid,
        contentFields: [
          {
            dataType: 'STRING',
            data: true,
          },
        ],
      })
      */

      const res = await client.get('/content/getContent/5ea706707150b23c84565485')
      console.log('res', res.data)
    } catch (e) {
      console.log(e)
    }
  }

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const saveImage = (event: ChangeEvent<HTMLInputElement>) => {
    uploadImage('test', event.target.files[0])
  }
  const [isOpen, setIsOpen] = useState(true)
  return (
    <CenterContainer>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div style={{ width: 500, height: 500, background: 'green' }}>{greeting}</div>
      </Modal>
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
      <button type="button" onClick={search}>
        search content
      </button>
      <div> {user ? `id: ${user.id}` : ''}</div>
      <div> {user ? `name: ${user.userName}` : ''}</div>
      <input type="file" id="multi" onChange={saveImage} multiple />
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
