import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './screens/HelloWorld'

const App: FunctionComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
      </Switch>
    </div>
  )
}

export default App
