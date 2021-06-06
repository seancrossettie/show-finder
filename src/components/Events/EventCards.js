import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const EventCards = ({
  displayName,
  date,
  location,
  type,
  venue,
  uri,
  eventId
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={eventId}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="h5" component="h2">
          {date}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" component="p">
          {type}
          <br />
        </Typography>
        <Typography variant="body2" component="p">
          {venue}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" to={uri}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

EventCards.propTypes = {
  displayName: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  venue: PropTypes.string,
  uri: PropTypes.string,
  eventId: PropTypes.number
};

export default EventCards;
