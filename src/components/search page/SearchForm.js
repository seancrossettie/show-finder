import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import ArtistCards from '../Artists/ArtistCards';
import { getArtists } from '../../helpers/data/artistData';

const SearchForm = ({ user, setUserArtists }) => {
  const [searchArtists, setSearchArtists] = useState([]);
  const [noArtists, setNoArtists] = useState(true);

  const formik = useFormik({
    initialValues: {
      artist: ''
    },
    onSubmit: (artist) => {
      getArtists(String(Object.values(artist)[0]))
        .then((response) => {
          if (response !== undefined && response.length >= 1) {
            setNoArtists(false);
            setSearchArtists(response);
          } else {
            setSearchArtists([]);
            setNoArtists(true);
          }
        });
    },
  });

  return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id='search-bar'
            name='artist'
            label='Search'
            value={formik.values.artist}
            onChange={formik.handleChange}
          />
          <Button type='submit'>Search</Button>
        </form>
          { noArtists
            ? <Typography>Sorry, we found no artists for this search</Typography>
            : ''
          }
          { searchArtists
            ? searchArtists.map((artist) => (
            <ArtistCards
              user={user}
              key={artist.id}
              displayName={artist.displayName}
              onTourUntil={artist.onTourUntil}
              uri={artist.uri}
              artistId={artist.id}
              setUserArtists={setUserArtists}
            />
            ))
            : ''
          }
      </div>
  );
};

SearchForm.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func
};

export default SearchForm;
