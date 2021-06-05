import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { signInUser } from '../helpers/auth';

const LoginPage = () => {
  console.warn('Login Page');
  return (
    <>
      <Typography>Login Page</Typography>
      <Button onClick={signInUser}>Sign In</Button>
    </>
  );
};

export default LoginPage;