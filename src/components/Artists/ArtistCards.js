import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createArtist } from '../../helpers/data/artistFbData';

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

const ArtistCards = ({
  displayName,
  artistId,
  uri,
  onTourUntil,
  user,
  setUserArtists,
  isFollowed
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/artist-events/${id}`);
  };

  const [followArtist, setFollowArtist] = useState({
    displayName,
    artistId,
    uri,
    uid: user.uid,
    favorite: false
  });

  const handleButtonClick = (type) => {
    switch (type) {
      case 'create':
        setFollowArtist({
          displayName,
          artistId,
          uri,
          uid: user.uid,
          favorite: false
        });
        createArtist(followArtist, user)
          .then(setUserArtists);
        history.push('/my-artists');
        break;
      default:
    }
  };

  const tourDate = moment(new Date(onTourUntil)).format('MMMM d, YYYY');

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={9} sm={11}>
            <Typography className={classes.title} variant="h5" component="h2" color='primary'>
              {displayName}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            { isFollowed
              ? <Typography variant='body1' color='secondary'>Followed</Typography>
              : ''
            }
          </Grid>
        </Grid>
        { onTourUntil
          ? <Typography color='primary' gutterBottom>On Tour Until {tourDate}</Typography>
          : <Typography color='primary' gutterBottom>Not Currently Touring</Typography>
        }
      </CardContent>
      <CardActions>
        <Button color='primary' variant='outlined' onClick={() => handleHistory(artistId)}>Events</Button>
        <Button color='primary' variant='outlined' href={uri} target='_blank'>Songkick</Button>
        { isFollowed
          ? ''
          : <Button color='primary' variant='outlined' onClick={() => handleButtonClick('create')}>Follow</Button>
        }
      </CardActions>
    </Card>
  );
};

ArtistCards.propTypes = {
  displayName: PropTypes.string,
  artistId: PropTypes.number,
  uri: PropTypes.string,
  onTourUntil: PropTypes.string,
  user: PropTypes.object,
  setUserArtists: PropTypes.func,
  isFollowed: PropTypes.bool
};

export default ArtistCards;
