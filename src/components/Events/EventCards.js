import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
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
    margin: 10
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
  date,
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
  const newD = moment(new Date(date)).format('MMMM d, YYYY');

  const [saveEvent, setSaveEvent] = useState({
    displayName,
    eventId,
    uri,
    uid: user.uid,
    date,
    type,
    location,
    venue,
    tickets: false,
  });

  const createShow = () => {
    setSaveEvent({
      displayName,
      eventId,
      uri,
      uid: user.uid,
      date,
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
        <Typography className={classes.title} color='primary' gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="h5" component="h2" color='primary'>
          {newD}
        </Typography>
        <Typography className={classes.pos} color='primary'>
          {location}
        </Typography>
        <Typography variant="body2" component="p" color='primary'>
          {type}
          <br />
        </Typography>
        <Typography variant="body2" component='p' color='primary'>
          {venue}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={uri} target='_blank'>
          Link to SongKick Event
        </Link>
        { isSaved
          ? <Typography color='primary'>Show Saved</Typography>
          : <Button color='primary' variant='outlined' onClick={() => createShow()}>Save this show</Button>
        }
      </CardActions>
    </Card>
  );
};

EventCards.propTypes = {
  displayName: PropTypes.string,
  date: PropTypes.string,
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
