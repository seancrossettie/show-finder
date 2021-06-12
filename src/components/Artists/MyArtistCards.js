import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteArtist, updateArtist } from '../../helpers/data/artistFbData';

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
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {displayName}
      </Typography>
      <Typography variant="h5" component="h2">
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
      </Typography>
      <Link href={uri} target='_blank'>
        Link to SongKick Page
      </Link>
    </CardContent>
    {favorite
      ? <Typography>Favorited</Typography>
      : ''
    }
    <CardActions>
      <Button size="small" onClick={() => handleButtonClick('delete')}>Unfollow</Button>
      <Button size="small" onClick={() => handleHistory(artistId)}>Shows</Button>
      <Button size="small" onClick={() => handleButtonClick('favorite')}>Favorite</Button>
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
