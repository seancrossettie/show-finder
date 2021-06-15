import {
  Button, Grid, makeStyles, TextField, Typography
} from '@material-ui/core';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getArtists } from '../../helpers/data/artistData';
import ArtistCards from '../Artists/ArtistCards';

const useStyles = makeStyles({
  root: {
    minWidth: '90%',
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    color: '#EEE5E9',
  }
});

const SearchForm = ({ user, setUserArtists }) => {
  const classes = useStyles();
  const [searchArtists, setSearchArtists] = useState([]);
  const [noArtists, setNoArtists] = useState(false);

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
      <Grid container direction='column'>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <TextField
              className={classes.root}
              variant='filled'
              label='Type an artists name here...'
              name='artist'
              value={formik.values.artist}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.input
              }}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid>
            <Button type='submit' color='primary'>Search</Button>
          </Grid>
        </form>
      </Grid>
      { noArtists
        ? <Typography color='primary'>Sorry, we found no artists for this search</Typography>
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
