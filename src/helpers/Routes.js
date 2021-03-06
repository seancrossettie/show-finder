import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArtistPage from '../views/ArtistPage';
import HomePage from '../views/HomePage';
import MyArtistsPage from '../views/MyArtistsPage';
import MyEventsPage from '../views/MyEventsPage';
import NotFound from '../views/NotFound';
import SearchPage from '../views/SearchPage';
import EventPage from '../views/EventPage';

function Routes({
  user, userArtists, setUserArtists, userEvents, setUserEvents
}) {
  return (
    <Switch>
      <Route exact path='/' component={() => <HomePage user={user} userArtists={userArtists} setUserArtists={setUserArtists} />} />
      <Route exact path='/my-artists' component={() => <MyArtistsPage user={user} userArtists={userArtists} setUserArtists={setUserArtists} />} />
      <Route exact path='/my-events' component={() => <MyEventsPage user={user} userEvents={userEvents} setUserEvents={setUserEvents} />} />
      <Route exact path='/search' component={() => <SearchPage user={user} setUserArtists={setUserArtists} />} />
      <Route path='/artist-events/:id' component={() => <ArtistPage user={user} userEvents={userEvents} setUserEvents={setUserEvents} />} />
      <Route path='/event-details/:id' component={() => <EventPage user={user} userEvents={userEvents} setUserEvents={setUserEvents} />} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.object,
  userArtists: PropTypes.array,
  setUserArtists: PropTypes.func,
  userEvents: PropTypes.array,
  setUserEvents: PropTypes.func,
};

export default Routes;
