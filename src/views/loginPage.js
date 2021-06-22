import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { signInUser } from '../helpers/auth';

const LoginPage = () => (
    <Grid container alignItems='center' justify='center' direction='column' spacing={5}>
      <Grid item>
        <Typography variant='h1' color='primary'>Login</Typography>
      </Grid>
      <Grid item>
        <Button onClick={signInUser} color='primary' variant='outlined' size='large'>Sign In</Button>
      </Grid>
    </Grid>
);

export default LoginPage;
