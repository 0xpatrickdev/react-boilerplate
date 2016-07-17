import React from 'react';
import ReactRouter, {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from '../containers/Layout';
import Main from '../components/Main';
import PromptDemo from '../components/PromptDemo';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Main} />
      <Route path='promptdemo' component={PromptDemo}/>
    </Route>
  </Router>
);

module.exports = routes;