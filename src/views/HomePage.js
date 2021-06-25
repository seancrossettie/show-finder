import {
  Button,
  Grid, makeStyles, Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MyArtistCards from '../components/Artists/MyArtistCards';
import NavBar from '../components/Navigation/NavBar';
import { getMyFavoriteArtists } from '../helpers/data/artistFbData';

const useStyles = makeStyles({
  title: {
    marginTop: '5rem',
    marginBottom: '2rem'
  },
  favoriteTitle: {
    marginTop: '5rem',
  },
  searchBtn: {
    marginTop: '4rem',
    color: ''
  }
});

const HomePage = ({ user, setUserArtists }) => {
  const classes = useStyles();
  const [favArtists, setFavArtists] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getMyFavoriteArtists(user).then(setFavArtists);
  }, []);

  const handleHistory = (route) => {
    history.push(route);
  };

  return (
    <>
    <NavBar />
        <div className='landing-view'>
          <Grid container direction='column' alignContent='center'>
            <Grid item xs={12} md={10} className={classes.title} align='center'>
              <Typography variant='h1'>Show Finder</Typography>
            </Grid>
            <Grid item tem xs={12} md={10} align='center'>
              <Typography variant='h3'>A platform to search for artist&apos;s upcoming shows</Typography>
              <Button className={classes.searchBtn} variant='outlined' size='large' onClick={() => handleHistory('/search')}>Search For Artists</Button>
            </Grid>
          </Grid>
        </div>
        <Grid container direction='column' alignContent='center'>
          <Grid item xs={12} md={10} className={classes.favoriteTitle} align='center'>
            <Typography variant='h2' color='primary'>Your Favorite Artists</Typography>
          </Grid>
          <Grid item xs={12} md={10} align='center'>
            { favArtists.length > 0
              ? favArtists.map((artist, i) => (
                <MyArtistCards
                  key={i}
                  setUserArtists={setUserArtists}
                  user={user}
                  artistId={artist.artistId}
                  firebaseKey={artist.firebaseKey}
                  displayName={artist.displayName}
                  favorite={artist.favorite}
                  uri={artist.uri}
                />
              ))
              : <Typography variant='body1' color='primary'>You have no favorite artists. Search for some above!</Typography>
            }
          </Grid>
        </Grid>
    </>
  );
};

HomePage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func,
};

export default HomePage;
