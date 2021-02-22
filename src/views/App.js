import React from 'react';
import { Provider } from 'react-redux';
import Counter from './containers/Counter';
import ArticleList from './containers/ArticleList';
import store from './../state/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <ArticleList />
        </div>
      </Provider>
    )
  }
}

export default App;

