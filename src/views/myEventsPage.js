import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyEventCards from '../components/Events/MyEventCards';
import HomeButton from '../components/Navigation/HomeButton';

const MyEventsPage = ({ user, userEvents, setUserEvents }) => {
  const [noEvents, setNoEvents] = useState(false);

  useEffect(() => {
    if (userEvents.length === 0) {
      setNoEvents(true);
    } else {
      setNoEvents(false);
    }
  }, []);

  console.warn(userEvents);

  return (
    <>
      <HomeButton />
      <Typography variant='h1' color='primary'>My Events</Typography>
      { noEvents
        ? <Typography variant='h5' color='primary'>You have no saved events.</Typography>
        : userEvents.map((event, i) => (
          <MyEventCards
            key={i}
            setUserEvents={setUserEvents}
            user={user}
            {...event}
          />
        ))}
    </>
  );
};

MyEventsPage.propTypes = {
  user: PropTypes.object,
  userEvents: PropTypes.array,
  setUserEvents: PropTypes.func
};

export default MyEventsPage;
