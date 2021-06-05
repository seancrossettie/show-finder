import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MyArtistsPage from '../views/MyArtistsPage';
import MyEventsPage from '../views/MyEventsPage';
import NotFound from '../views/NotFound';
import SearchPage from '../views/SearchPage';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/my-artists' component={MyArtistsPage} />
      <Route exact path='/my-events' component={MyEventsPage} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  );
}

export default Routes;
