import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RepositoriesPage from './pages/RepositoriesPage';

import MainPage from './pages/MainPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
