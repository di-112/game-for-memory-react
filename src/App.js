import './App.scss';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import {BrowserRouter, Redirect} from 'react-router-dom'
import GameWrapper from './components/gameWrapper/gameWrapper';

function App() {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <Redirect to='/easy'></Redirect>
        <GameWrapper />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
