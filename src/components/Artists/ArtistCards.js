import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2" color='primary'>
            {displayName}
          </Typography>
          <Typography color='primary' gutterBottom>
             On Tour Until: {onTourUntil}
          </Typography>
          <Link href={uri} target='_blank'>
            Link to SongKick Page
          </Link>
        </CardContent>
        <CardActions>
          <Button color='primary' variant='outlined' onClick={() => handleHistory(artistId)}>Events</Button>
          { isFollowed
            ? <Typography color='primary'>Following this artist</Typography>
            : <Button color='primary' variant='outlined' onClick={() => handleButtonClick('create')}>Follow this artist</Button>
          }
        </CardActions>
      </Card>
    </>
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
