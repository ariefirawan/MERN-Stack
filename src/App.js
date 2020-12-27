import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewPlace from './places/pages/NewPlaces';
import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from './places/pages/UpdatePlaces';
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
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlaces />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
