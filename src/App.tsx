import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import NavBar from './components/Navbar'
import TemplateScreen from './screens/templates/TemplateScreen'
import CreateTemplateScreen from './screens/templates/CreateTemplateScreen'
import AuthScreen from './screens/AuthScreen'
import ContentScreen from './screens/content/ContentScreen'
import CreateContentScreen from './screens/content/CreateContentScreen'
import SettingsScreen from './screens/SettingsScreen'
import { useAuth } from './hooks/useAuth'

type OwnProps = {}
type Props = OwnProps

const App: FunctionComponent<Props> = () => {
  const [loading, loggedIn] = useAuth()

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
              <Route exact path="/settings" component={SettingsScreen} />
            </>
          )}
        </Switch>
      )}
    </div>
  )
}

export default App
