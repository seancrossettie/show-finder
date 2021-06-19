import React from 'react';
import {
  Card, CardActions, CardContent, Typography, makeStyles, Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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

const EventArtistCards = ({
  displayName,
  artistId,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/artist-events/${id}`);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography className={classes.title} variant="h5" component="h2" color='primary'>
        {displayName}
      </Typography>
    </CardContent>
    <CardActions>
      <Button color='primary' variant='outlined' onClick={() => handleHistory(artistId)}>Artist Page</Button>
    </CardActions>
  </Card>
  );
};

EventArtistCards.propTypes = {
  artistId: PropTypes.number,
  displayName: PropTypes.string,
};

export default EventArtistCards;
