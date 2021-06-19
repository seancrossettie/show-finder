import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventCards from '../components/Events/EventCards';
import HomeButton from '../components/Navigation/HomeButton';
import { getSingleArtist } from '../helpers/data/artistData';
import { compareEvents } from '../helpers/data/eventData';

const ArtistPage = ({ user, setUserEvents }) => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [pageArtist, setPageArtist] = useState({});
  const [noEvents, setNoEvents] = useState(false);

  useEffect(() => {
    getSingleArtist(id).then(setPageArtist);
    compareEvents(user, id).then(setEvents);
  }, []);

  useEffect(() => {
    if (events.length === 0) {
      setNoEvents(true);
    } else {
      setNoEvents(false);
    }
  });

  return (
    <>
      <HomeButton />
      <Typography variant='h1' color='primary'>{pageArtist.displayName}</Typography>
      { noEvents
        ? <Typography variant='h5' color='primary'>No Upcoming Events for this Artist</Typography>
        : events.map((event, i) => (
        <EventCards
          key={i}
          displayName={event.displayName}
          startDate={event.start.date}
          location={event.location.city}
          type={event.type}
          venue={event.venue.displayName}
          uri={event.uri}
          eventId={event.id}
          user={user}
          setUserEvents={setUserEvents}
          isSaved={event.isSaved}
        />
        ))
      }
    </>
  );
};

ArtistPage.propTypes = {
  user: PropTypes.object,
  setUserEvents: PropTypes.func
};

export default ArtistPage;
