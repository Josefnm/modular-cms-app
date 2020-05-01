import React, { FunctionComponent, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import HelloWorld from './screens/HelloWorld'
import SignupScreen from './screens/authentication/SignupScreen'
import LoginScreen from './screens/authentication/LoginScreen'
import { initializeFirebaseAuth } from './config/firebase'
import NavBar from './components/Navbar'
import TemplateScreen from './screens/templates/TemplateScreen'
import CreateTemplateScreen from './screens/templates/CreateTemplateScreen'

const App: FunctionComponent = () => {
  useEffect(() => {
    async function f() {
      await initializeFirebaseAuth()
    }
    f()
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/templates" component={TemplateScreen} />
        <Route exact path="/templates/create" component={CreateTemplateScreen} />
      </Switch>
    </div>
  )
}

export default App
