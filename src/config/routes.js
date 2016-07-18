import React from 'react';
import ReactRouter, {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from '../containers/Layout';
import Main from '../components/Main';
import PromptDemo from '../components/PromptDemo';
import ProgressDemo from '../components/ProgressDemo';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Main} />
      <Route path='/demos' component={Main}/>
      <Route path='/demos/prompt' component={PromptDemo}/>
      <Route path='/demos/progress-bar' component={ProgressDemo}/>
    </Route>
  </Router>
);

module.exports = routes;