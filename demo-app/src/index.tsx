import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { pages } from './pages/pages';

import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      {pages.map(({ url, PageComponent }, i) =>
        <Route key={i} path={url} exact={url === '/'}>
          <PageComponent />
        </Route>)}
    </Switch>
  </Router>,
  document.getElementById('root')
);
