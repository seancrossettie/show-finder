import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from '@material-ui/core';
import { signInUser } from '../../helpers/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  console.warn(user);

  return (
    <>
      <h1>React Template</h1>
      <Button onClick={signInUser}>Signin</Button>
    </>
  );
}

export default App;
