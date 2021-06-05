import React from 'react';
import { Route, Switch } from 'react-router-dom';
import homePage from '../views/homePage';
import myArtistsPage from '../views/myArtistsPage';
import myEventsPage from '../views/myEventsPage';
import notFound from '../views/notFound';
import searchPage from '../views/searchPage';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={homePage} />
      <Route exact path='/my-artists' component={myArtistsPage} />
      <Route exact path='/my-events' component={myEventsPage} />
      <Route exact path='/search' component={searchPage} />
      <Route exact path='*' component={notFound} />
    </Switch>
  );
}

export default Routes;
