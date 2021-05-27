import { Provider } from 'react-redux';
import './App.css';
import MainContainer from './components/WrappContainer';
import store from './redux/store';

function App() {

  return (
  <Provider store={store}>
    <MainContainer />
  </Provider>
  )

}

export default App;
