import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
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
  setUserEvents
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
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
      default:
    }
  };

  return (
    <Card className={classes.root} id={eventId}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {displayName}
      </Typography>
      <Typography variant="h5" component="h2">
        {date}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {location}
      </Typography>
      <Typography variant="body2" component="p">
        {type}
        <br />
      </Typography>
      <Typography variant="body2" component="p">
        {venue}
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Link href={uri} target='_blank'>
        Link to SongKick Event
      </Link>
      <Button onClick={() => handleButtonClick('delete')}>Remove</Button>
      { tickets
        ? <Button onClick={() => handleButtonClick('tickets')}>Tickets Purchased</Button>
        : <Button onClick={() => handleButtonClick('tickets')}>Tickets Not Purchased</Button>
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
  tickets: PropTypes.bool
};

export default MyEventCards;
