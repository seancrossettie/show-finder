import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const MyEventsButton = () => {
  const history = useHistory();
  return (
    <>
      <Button color='primary' onClick={() => history.push('/my-events')}>My Events</Button>
    </>
  );
};

export default MyEventsButton;
