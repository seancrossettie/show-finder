import {
  Button, Grid, Typography, makeStyles
} from '@material-ui/core';
import React from 'react';
import MyArtistsButton from '../components/Navigation/MyArtistsButton';
import MyEventsButton from '../components/Navigation/MyEventsButton';
import SearchButton from '../components/Navigation/SearchButton';
import { signOutUser } from '../helpers/auth';

const useStyles = makeStyles({
  root: {
  },
  title: {
  }
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' justify='center' direction='column' spacing={5} className={classes.root}>
      <Grid item>
        <Typography variant='h1' color='primary'>Show Finder</Typography>
      </Grid>
      <Grid item>
        <MyArtistsButton />
      </Grid>
      <Grid item>
        <MyEventsButton />
      </Grid>
      <Grid item>
        <SearchButton />
      </Grid>
      <Grid item>
        <Button color='primary' variant='outlined' onClick={signOutUser}>Sign Out</Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;
