import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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

  return (
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

ArtistCards.propTypes = {
  displayName: PropTypes.string,
  onTourUntil: PropTypes.string,
  uri: PropTypes.string,
  artistId: PropTypes.number
};

export default ArtistCards;
