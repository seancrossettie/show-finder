import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/Navigation/HomeButton';
import MyEventCards from '../components/Events/MyEventCards';

const MyEventsPage = ({ user, userEvents, setUserEvents }) => (
    <>
      <HomeButton />
      <Typography variant='h1' color='primary'>My Events</Typography>
      { userEvents.map((event, i) => (
        <MyEventCards
          key={i}
          setUserEvents={setUserEvents}
          user={user}
          {...event}
        />
      ))}
    </>
);

MyEventsPage.propTypes = {
  user: PropTypes.object,
  userEvents: PropTypes.array,
  setUserEvents: PropTypes.func
};

export default MyEventsPage;
