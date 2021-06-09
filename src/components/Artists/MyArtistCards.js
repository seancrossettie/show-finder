import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { deleteArtist } from '../../helpers/data/artistFbData';

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
  // artistId,
  firebaseKey,
  displayName,
  uri,
  favorite,
}) => {
  const classes = useStyles();

  // console.warn({ artistId });

  const handleButtonClick = (type) => {
    switch (type) {
      case 'delete':
        deleteArtist(firebaseKey, user)
          .then(setUserArtists);
        break;
      default:
        console.warn('nothing selected');
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
       { favorite
         ? <Typography variant="body2" component="p">
          Favorite Artist
        </Typography>
         : <Typography variant="body2" component="p">
          Not Favorite Artist
       </Typography>
        }
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => handleButtonClick('delete')}>Remove Me</Button>
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
