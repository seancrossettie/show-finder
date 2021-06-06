import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import getArtistEvents from '../../helpers/data/eventData';
import EventCards from '../Events/EventCards';

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

const ArtistCards = ({
  displayName,
  artistId,
  uri,
  onTourUntil
}) => {
  const classes = useStyles();
  const [searchedEvents, setSearchedEvents] = useState([]);

  return (
    <>
      <Card className={classes.root} id={artistId} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {displayName}
          </Typography>
          <Typography variant="h5" component="h2">
            On Tour Until: {onTourUntil}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {uri}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => (
            getArtistEvents(artistId)
              .then(setSearchedEvents)
          )}>Learn More</Button>
        </CardActions>
      </Card>
      { searchedEvents
        ? searchedEvents.map((event) => (
          <EventCards
            key={event.id}
            displayName={event.displayName}
            date={event.start.date}
            location={event.location.city}
            type={event.type}
            venue={event.displayName}
            uri={event.uri}
            id={event.id}
          />
        ))
        : ''
      }
    </>
  );
};

ArtistCards.propTypes = {
  displayName: PropTypes.string,
  onTourUntil: PropTypes.string,
  uri: PropTypes.string,
  artistId: PropTypes.number
};

export default ArtistCards;
