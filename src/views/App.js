import React from 'react';
import { Provider } from 'react-redux';
import Counter from './containers/counter';
import Articles from './containers/articles';
import store from './../state/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <Articles />
        </div>
      </Provider>
    )
  }
}

export default App;

