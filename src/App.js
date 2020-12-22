import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewPlace from './places/pages/NewPlaces';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/new" exact>
            <NewPlace />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
