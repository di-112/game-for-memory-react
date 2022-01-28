import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GameWrapper from './components/gameWrapper'
import './scss/App.scss'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <GameWrapper />
      </Provider>
    </HashRouter>
  )
}

export default App
