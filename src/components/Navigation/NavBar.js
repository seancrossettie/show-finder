import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../helpers/auth';

const useStyles = makeStyles(() => ({
  root: {
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
  },
  title: {
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='secondary'>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title} color='primary'>Show Finder</Typography>
          <Button color='primary' variant='outlined' className={classes.button} onClick={() => history.push('/my-artists')}>My Artists</Button>
          <Button color='primary' variant='outlined' onClick={() => history.push('/my-events')}>My Events</Button>
          <Button color='primary' variant='outlined' onClick={signOutUser}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
