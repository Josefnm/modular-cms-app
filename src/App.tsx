import React, { FunctionComponent, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as firebase from 'firebase/app'
import HelloWorld from './screens/HelloWorld'
import { initializeFirebaseAuth } from './config/firebase'
import NavBar from './components/Navbar'
import TemplateScreen from './screens/templates/TemplateScreen'
import CreateTemplateScreen from './screens/templates/CreateTemplateScreen'
import 'firebase/auth'
import * as actions from './store/actions'
import AuthScreen from './screens/AuthScreen'
import { useThunkDispatch } from './hooks/redux'

type OwnProps = {}
type Props = OwnProps

const App: FunctionComponent<Props> = () => {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  const dispatch = useThunkDispatch()

  useEffect(() => {
    let fbUnsub: firebase.Unsubscribe
    async function f() {
      await initializeFirebaseAuth()
      fbUnsub = firebase.auth().onAuthStateChanged(async user => {
        console.log('auth state change', user)
        if (user) {
          await dispatch(actions.getProfile())
          await dispatch(actions.getProjects())
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
        setLoading(false)
      })
    }
    f()
    return () => fbUnsub()
  }, [dispatch])

  return (
    <div>
      {loggedIn && <NavBar />}
      {!loading && (
        <Switch>
          <Route exact path="/" component={loggedIn ? HelloWorld : AuthScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          <Route exact path="/templates" component={TemplateScreen} />
          <Route exact path="/templates/create" component={CreateTemplateScreen} />
        </Switch>
      )}
    </div>
  )
}

export default App
