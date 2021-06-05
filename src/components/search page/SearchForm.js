import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import getArtists from '../../helpers/data/artistData';

const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      artist: ''
    },
    onSubmit: (artist) => {
      getArtists(String(Object.values(artist)[0]));
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
      </div>
  );
};

export default SearchForm;
