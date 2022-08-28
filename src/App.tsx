import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Game from './components/Game'
import './scss/App.scss'

const App: FC = () => (
  <Provider store={store}>
    <Game />
  </Provider>
)

export default App
