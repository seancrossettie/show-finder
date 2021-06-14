import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/Navigation/HomeButton';
import MyArtistCards from '../components/Artists/MyArtistCards';

const MyArtistsPage = ({ user, userArtists, setUserArtists }) => (
  <>
    <HomeButton />
    <Typography variant='h1' color='primary'>My Artists</Typography>
    { userArtists.map((artist, i) => (
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
    ))}
  </>
);

MyArtistsPage.propTypes = {
  user: PropTypes.object,
  userArtists: PropTypes.array,
  setUserArtists: PropTypes.func
};

export default MyArtistsPage;
