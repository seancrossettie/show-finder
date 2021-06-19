import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EventArtistCards from '../components/Artists/EventArtistCards';
import { getEventArtists, getSingleEvent } from '../helpers/data/eventData';

// const useStyles = makeStyles({
//   headline: {
//     marginBottom: '2rem',
//   },
//   title: {
//     marginBottom: '1rem',
//   }
// });

const EventPage = () => {
  // const classes = useStyles();
  const { id } = useParams();
  const [pageEvent, setPageEvent] = useState({});
  const [eventArtists, setEventArtists] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getSingleEvent(id).then(setPageEvent);
    getEventArtists(id).then(setEventArtists);
  }, []);

  return (
    <>
      <IconButton color='primary' onClick={() => history.push('/my-events')}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant='h1' color='primary'>{pageEvent.displayName}</Typography>
      <Typography variant='h3' color='primary'>Lineup</Typography>
      { eventArtists.map((slot, i) => (
        <EventArtistCards
          key={i}
          artistId={slot.artist.id}
          displayName={slot.displayName}
        />
      ))
      }
    </>
  );
};

EventPage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func
};

export default EventPage;
