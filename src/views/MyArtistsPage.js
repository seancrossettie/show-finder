import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyArtistCards from '../components/Artists/MyArtistCards';
import HomeButton from '../components/Navigation/HomeButton';

const MyArtistsPage = ({ user, userArtists, setUserArtists }) => {
  const [noArtists, setNoArtists] = useState(false);

  useEffect(() => {
    if (userArtists.length === 0) {
      setNoArtists(true);
    } else {
      setNoArtists(false);
    }
  }, []);

  return (
    <>
      <HomeButton />
      <Typography variant='h1' color='primary'>My Artists</Typography>
      { noArtists
        ? <Typography variant='h5' color='primary'>You have no saved artists.</Typography>
        : userArtists.map((artist, i) => (
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
};

MyArtistsPage.propTypes = {
  user: PropTypes.object,
  userArtists: PropTypes.array,
  setUserArtists: PropTypes.func
};

export default MyArtistsPage;
