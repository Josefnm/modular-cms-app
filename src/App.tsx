import React, { FunctionComponent, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import HelloWorld from './screens/HelloWorld'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import { initializeFirebaseAuth } from './config/firebase'
import NavBar from './components/navbar'

const App: FunctionComponent = () => {
  useEffect(() => {
    initializeFirebaseAuth()
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </div>
  )
}

export default App
