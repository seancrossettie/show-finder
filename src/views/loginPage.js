import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { signInUser } from '../helpers/auth';

const LoginPage = () => (
  <>
    <Button onClick={signInUser} color='primary'>Sign In</Button>
    <Typography color='primary'>Login Page</Typography>
  </>
);

export default LoginPage;
