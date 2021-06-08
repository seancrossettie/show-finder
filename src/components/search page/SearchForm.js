import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import ArtistCards from '../Artists/ArtistCards';
import { getArtists } from '../../helpers/data/artistData';

const SearchForm = ({ user }) => {
  const [searchArtists, setSearchArtists] = useState([]);

  const formik = useFormik({
    initialValues: {
      artist: ''
    },
    onSubmit: (artist) => {
      getArtists(String(Object.values(artist)[0]))
        .then(setSearchArtists);
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
          { searchArtists
            ? searchArtists.map((artist) => (
            <ArtistCards
              user={user}
              key={artist.id}
              displayName={artist.displayName}
              onTourUntil={artist.onTourUntil}
              uri={artist.uri}
              artistId={artist.id}
            />
            ))
            : ''
          }
      </div>
  );
};

SearchForm.propTypes = {
  user: PropTypes.object
};

export default SearchForm;
