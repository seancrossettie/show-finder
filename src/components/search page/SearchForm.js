import {
  Grid, IconButton, makeStyles, TextField, Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getArtists } from '../../helpers/data/artistData';
import ArtistCards from '../Artists/ArtistCards';

const useStyles = makeStyles({
  root: {
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
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={12} sm={11}>
              <TextField
                autoComplete='off'
                className={classes.root}
                fullWidth
                variant='filled'
                margin='normal'
                label='Type an artists name here...'
                name='artist'
                value={formik.values.artist}
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
                size='medium'
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item sm={1}>
              <IconButton type='submit'>
                <SearchIcon color='primary' />
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
      { noArtists
        ? <Typography color='primary' variant='h3'>Sorry, no Artists match this search.</Typography>
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
