import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GameWrapper from './components/gameWrapper'
import './scss/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GameWrapper />
      </Provider>
    </BrowserRouter>
  )
}

export default App
