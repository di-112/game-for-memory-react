import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GameWrapper from './components/gameWrapper'
import './scss/App.scss'

const App: FC = () => (
  <Provider store={store}>
    <GameWrapper />
  </Provider>
)

export default App
