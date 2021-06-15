import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';
import { deleteArtist, updateArtist } from '../../helpers/data/artistFbData';

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
          <Grid item xs={11}>
            <Typography className={classes.title} color="primary" gutterBottom>
              {displayName}
            </Typography>
          </Grid>
          <Grid item xs={1}>
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
        <Link href={uri} color="primary" target='_blank'>
          Link to SongKick Page
        </Link>
      </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={() => handleButtonClick('delete')}>Unfollow</Button>
      <Button size="small" color="primary" onClick={() => handleHistory(artistId)}>Upcoming Events</Button>
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
