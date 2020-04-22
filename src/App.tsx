import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './screens/HelloWorld'
import HelloWorld2 from './screens/HelloWorld2'

const App: FunctionComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/test" component={HelloWorld2} />
      </Switch>
    </div>
  )
}

export default App
