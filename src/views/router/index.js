import React  from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import NotFound from '../pages/not-found/index';
import Home from '../pages/home/index';
import Category from '../pages/category';

const Routes = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
};

const RoutesHistory = withRouter(Routes);

const routing = function createRouting() {
  return (
    <>
      <Router>
        <RoutesHistory />
      </Router>
    </>
  );
};

export default routing;
