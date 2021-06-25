import { Button, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createEvent } from '../../helpers/data/eventFbData';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#000000',
    border: '10%',
    borderColor: '#EEE5E9',
    margin: 10,
  },
  date: {
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
  },
  pos: {
    marginBottom: 12,
  },
});

const EventCards = ({
  displayName,
  startDate,
  location,
  type,
  venue,
  uri,
  eventId,
  user,
  setUserEvents,
  isSaved
}) => {
  const classes = useStyles();
  const history = useHistory();
  const startD = moment(new Date(startDate)).format('MMMM d, YYYY');

  const [saveEvent, setSaveEvent] = useState({
    displayName,
    eventId,
    uri,
    uid: user.uid,
    startDate,
    type,
    location,
    venue,
    tickets: false,
  });

  const handleButtonClick = (id) => {
    history.push(`/event-details/${id}`);
  };

  const createShow = () => {
    setSaveEvent({
      displayName,
      eventId,
      uri,
      uid: user.uid,
      startDate,
      type,
      location,
      venue,
      tickets: false,
    });
    createEvent(saveEvent, user).then(setUserEvents);
    history.push('/my-events');
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Grid container justify='space-between'>
          <Grid item xs={9} sm={11}>
            <Typography className={classes.date} variant='body2' color='primary'>{startD}</Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            { isSaved
              ? <Typography variant='body1' color='secondary'>Saved</Typography>
              : ''
            }
          </Grid>
        </Grid>
        <Typography className={classes.title} color='primary' gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="body2" component='p' color='primary'>
          {venue} - {location}
        </Typography>
      </CardContent>
      <CardActions>
        { isSaved
          ? ''
          : <Button color='primary' variant='outlined' onClick={() => createShow()}>Going</Button>
        }
        <Button color='primary' variant='outlined' href={uri} target='_blank'>Songkick</Button>
        <Button color='primary' variant='outlined' onClick={() => handleButtonClick(eventId)}>Details</Button>
      </CardActions>
    </Card>
  );
};

EventCards.propTypes = {
  displayName: PropTypes.string,
  startDate: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  venue: PropTypes.string,
  uri: PropTypes.string,
  eventId: PropTypes.number,
  user: PropTypes.object,
  setUserEvents: PropTypes.func,
  isSaved: PropTypes.bool,
};

export default EventCards;
