import {
  Button, Card, CardActions, CardContent, Grid, IconButton, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteArtist, updateArtist } from '../../helpers/data/artistFbData';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#000000',
    border: '10%',
    borderColor: '#EEE5E9',
    margin: 10,
  },
  title: {
    fontSize: 28,
  },
  pos: {
    marginBottom: 12,
  },
});

const MyArtistCards = ({
  user,
  setUserArtists,
  artistId,
  firebaseKey,
  displayName,
  uri,
  favorite,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const artist = {
    artistId,
    firebaseKey,
    displayName,
    uri,
    favorite,
  };

  const handleHistory = (id) => {
    history.push(`/artist-events/${id}`);
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case 'delete':
        deleteArtist(firebaseKey, user)
          .then(setUserArtists);
        break;
      case 'favorite':
        if (artist.favorite === false) {
          artist.favorite = true;
          updateArtist(artist, user).then(setUserArtists);
        } else {
          artist.favorite = false;
          updateArtist(artist, user).then(setUserArtists);
        }
        break;
      default:
    }
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={10} sm={11}>
            <Typography className={classes.title} color="primary" gutterBottom>
              {displayName}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1}>
            { favorite
              ? <IconButton onClick={() => handleButtonClick('favorite')}>
                  <StarIcon color='secondary' />
                </IconButton>
              : <IconButton onClick={() => handleButtonClick('favorite')}>
                  <StarBorderIcon color='secondary' />
                </IconButton>
            }
          </Grid>
        </Grid>
      </CardContent>
    <CardActions>
      <Button color='primary' variant='outlined' onClick={() => handleHistory(artistId)}>Events</Button>
      <Button color='primary' variant='outlined' href={uri} target='_blank'>Songkick</Button>
      <Button color='primary' variant='outlined' onClick={() => handleButtonClick('delete')}>Unfollow</Button>
    </CardActions>
  </Card>
  );
};

MyArtistCards.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func,
  artistId: PropTypes.number,
  firebaseKey: PropTypes.string,
  displayName: PropTypes.string,
  favorite: PropTypes.bool,
  uri: PropTypes.string
};

export default MyArtistCards;
