import React, { FunctionComponent, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as firebase from 'firebase/app'
import HomeScreen from './screens/HomeScreen'
import { initializeFirebaseAuth } from './config/firebase'
import NavBar from './components/Navbar'
import TemplateScreen from './screens/templates/TemplateScreen'
import CreateTemplateScreen from './screens/templates/CreateTemplateScreen'
import 'firebase/auth'
import * as actions from './store/actions'
import AuthScreen from './screens/AuthScreen'
import { useThunkDispatch } from './hooks/redux'
import ContentScreen from './screens/content/ContentScreen'
import CreateContentScreen from './screens/content/CreateContentScreen'

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
      // listens for changes in auth state, loads data if user is logged in
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
      {/* directs user to login page or home page depending on if they are logged in,
      shows navbar and makes other paths available if logged in  */}
      {loggedIn && <NavBar />}
      {!loading && (
        <Switch>
          <Route exact path="/" component={loggedIn ? HomeScreen : AuthScreen} />
          {loggedIn && (
            <>
              <Route exact path="/auth" component={AuthScreen} />
              <Route exact path="/templates" component={TemplateScreen} />
              <Route exact path="/templates/create" component={CreateTemplateScreen} />
              <Route exact path="/content" component={ContentScreen} />
              <Route exact path="/content/create/:templateId" component={CreateContentScreen} />
            </>
          )}
        </Switch>
      )}
    </div>
  )
}

export default App
