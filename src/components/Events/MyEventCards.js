import {
  Button, Card, CardActions, CardContent, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { deleteEvent, updateEvent } from '../../helpers/data/eventFbData';

const MyEventCards = ({
  displayName,
  startDate,
  location,
  type,
  venue,
  uri,
  eventId,
  user,
  firebaseKey,
  tickets,
  setUserEvents,
}) => {
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
  const classes = useStyles();
  const history = useHistory();
  const startD = moment(new Date(startDate)).format('MMMM d, YYYY');

  const updatedEvent = {
    displayName,
    startDate,
    location,
    type,
    venue,
    uri,
    eventId,
    firebaseKey,
    tickets,
  };

  const handleButtonClick = (t, id) => {
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
        history.push(`/event-details/${id}`);
        break;
      default:
    }
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.date} variant='body2' color='primary'>
          {startD}
        </Typography>
        <Typography className={classes.title} color='primary' gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="body2" component='p' color='primary'>
          {venue} - {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' variant='outlined' onClick={() => handleButtonClick('delete')}>Remove</Button>
        <Button color='primary' variant='outlined' href={uri} target='_blank'>Songkick</Button>
        <Button color='primary' variant='outlined' onClick={() => handleButtonClick('details', eventId)}>Details</Button>
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
  startDate: PropTypes.string,
  endDate: PropTypes.string,
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
