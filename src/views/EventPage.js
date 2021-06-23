import {
  Grid, IconButton, Typography, makeStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EventArtistCards from '../components/Artists/EventArtistCards';
import { getEventArtists, getSingleEvent } from '../helpers/data/eventData';

const useStyles = makeStyles({
  title: {
    marginBottom: '1rem',
  },
  headline: {
    marginBottom: '2rem',
  }
});

const EventPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [pageEvent, setPageEvent] = useState({});
  const [eventArtists, setEventArtists] = useState([]);
  // const [eventDate, setEventDate] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getSingleEvent(id).then(setPageEvent);
    getEventArtists(id).then(setEventArtists);
    // getEventDate(id).then(setEventDate);
  }, []);

  return (
    <>
      <IconButton color='primary' onClick={() => history.push('/my-events')}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container direction='column'>
        <Typography variant='h2' color='primary' align='center' className={classes.headline}>{pageEvent.displayName}</Typography>
        {/* <Typography variant='h4' color='primary' align='center' className={classes.headline}>Dates: {eventDate[0]} - {eventDate[1]}</Typography> */}
        <Typography variant='h4' color='primary' align='center' className={classes.headline}>Lineup</Typography>
        { eventArtists.map((slot, i) => (
          <EventArtistCards
            key={i}
            artistId={slot.artist.id}
            displayName={slot.displayName}
          />
        ))
        }
      </Grid>
    </>
  );
};

EventPage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func
};

export default EventPage;
