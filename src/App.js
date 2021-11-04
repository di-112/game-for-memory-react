import React from 'react'
import { HashRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { COMPLEXITY } from './enums'
import GameWrapper from './components/gameWrapper'
import './scss/App.scss'

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <Redirect to={`/${COMPLEXITY.EASY}`} />
      <GameWrapper />
    </Provider>
  </HashRouter>
)

export default App
