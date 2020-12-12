import './App.scss';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import {BrowserRouter, HashRouter, Redirect} from 'react-router-dom'
import GameWrapper from './components/gameWrapper/gameWrapper';

function App() {
  return (
    <HashRouter >
      <Provider store={store}>
        <Redirect to='/easy'></Redirect>
        <GameWrapper />
      </Provider>
    </HashRouter>
  );
}

export default App;
