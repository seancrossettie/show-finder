import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/artist-events/${id}`);
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
            Link
          </Link>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleHistory(artistId)}>Events</Button>
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
};

export default ArtistCards;
