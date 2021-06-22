import {
  Grid, makeStyles, Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyArtistCards from '../components/Artists/MyArtistCards';
import NavBar from '../components/Navigation/NavBar';
import SearchForm from '../components/Search Form/SearchForm';
import { getMyFavoriteArtists } from '../helpers/data/artistFbData';

const useStyles = makeStyles({
  title: {
    marginTop: '5rem',
    marginBottom: '2rem'
  },
  favoriteTitle: {
    marginTop: '5rem',
  },
});

const HomePage = ({ user, setUserArtists }) => {
  const classes = useStyles();
  const [favArtists, setFavArtists] = useState([]);

  useEffect(() => {
    getMyFavoriteArtists(user).then(setFavArtists);
  }, []);

  return (
    <>
    <NavBar />
      <div className='landing-view'>
        <Grid container direction='column' alignContent='center'>
          <Grid item md={1} color='primary'/>
          <Grid item xs={12} md={10} className={classes.title}>
            <Typography variant='h3' color='primary'>Search for your favorite artist&apos;s upcoming shows</Typography>
            <Typography variant='body1' color='primary'>Keep track of shows, discover live music near you</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <SearchForm user={user} setUserArtists={setUserArtists} />
          </Grid>
          <Grid item xs={12} md={10} className={classes.favoriteTitle}>
            <Typography variant='h3' color='primary'>Check out your favorite artists...</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
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
          <Grid item md={1}/>
        </Grid>
      </div>
    </>
  );
};

HomePage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func,
};

export default HomePage;
