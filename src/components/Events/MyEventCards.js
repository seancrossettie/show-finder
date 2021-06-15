import {
  Button, Card, CardActions, CardContent, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteEvent, updateEvent } from '../../helpers/data/eventFbData';

const MyEventCards = ({
  displayName,
  date,
  location,
  type,
  venue,
  uri,
  eventId,
  user,
  firebaseKey,
  tickets,
  setUserEvents,
  artistId
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#000000',
      border: '10%',
      borderColor: '#EEE5E9',
      margin: 10
    },
    title: {
      fontSize: 28,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  const updatedEvent = {
    displayName,
    date,
    location,
    type,
    venue,
    uri,
    eventId,
    user,
    firebaseKey,
    tickets,
  };

  const handleButtonClick = (t) => {
    switch (t) {
      case 'delete':
        deleteEvent(firebaseKey, user)
          .then(setUserEvents);
        break;
      case 'tickets':
        if (updatedEvent.tickets === false) {
          updatedEvent.tickets = true;
          updateEvent(updatedEvent, user).then(setUserEvents);
        } else {
          updatedEvent.tickets = false;
          updateEvent(updatedEvent, user).then(setUserEvents);
        }
        break;
      case 'details':
        console.warn(artistId);
        break;
      default:
    }
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="h5" component="h2" color="primary">
          {date}
        </Typography>
        <Typography className={classes.pos} color="primary">
          {location}
        </Typography>
        <Typography variant="body2" component="p" color="primary">
          {type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' variant='outlined' onClick={() => handleButtonClick('delete')}>Remove</Button>
        <Button color='primary' variant='outlined' href={uri} target='_blank'>Songkick</Button>
        <Button color='primary' variant='outlined' onClick={() => handleButtonClick('details')}>Details</Button>
        { tickets
          ? <Button color='primary' variant='outlined' onClick={() => handleButtonClick('tickets')}>Tickets Purchased</Button>
          : <Button color='primary' variant='outlined' onClick={() => handleButtonClick('tickets')}>Tickets Not Purchased</Button>
        }
      </CardActions>
    </Card>
  );
};

MyEventCards.propTypes = {
  displayName: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  venue: PropTypes.string,
  uri: PropTypes.string,
  eventId: PropTypes.number,
  user: PropTypes.object,
  setUserEvents: PropTypes.func,
  firebaseKey: PropTypes.string,
  tickets: PropTypes.bool,
  artistId: PropTypes.string
};

export default MyEventCards;
