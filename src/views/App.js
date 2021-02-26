import React from 'react';
import { Provider } from 'react-redux';
import createRoutes from './router';
import store from './../state/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          { createRoutes() }
        </div>
      </Provider>
    )
  }
}

export default App;

