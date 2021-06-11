import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { createArtist } from '../../helpers/data/artistFbData';

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
  onTourUntil,
  user,
  setUserArtists,
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
          <Typography variant="h5" component="h2">
            {displayName}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
             On Tour Until: {onTourUntil}
          </Typography>
          <Link href={uri} target='_blank'>
            Link to SongKick Page
          </Link>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleHistory(artistId)}>Events</Button>
          <Button size="small" onClick={() => handleButtonClick('create')}>Follow this artist</Button>
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
};

export default ArtistCards;
