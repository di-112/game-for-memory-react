import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GameWrapper from './components/gameWrapper'
import './scss/App.scss'

function App() {
  return (
    <Provider store={store}>
      <GameWrapper />
    </Provider>
  )
}

export default App
