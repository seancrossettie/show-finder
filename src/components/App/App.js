import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Routes from '../../helpers/Routes';
import LoginPage from '../../views/LoginPage';
import { getMyArtists } from '../../helpers/data/artistFbData';
import { getMyEvents } from '../../helpers/data/eventFbData';

function App() {
  const [user, setUser] = useState(null);
  const [userArtists, setUserArtists] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

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
        getMyArtists(userObj)
          .then(setUserArtists);
        getMyEvents(userObj)
          .then(setUserEvents);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      { user
        ? <Routes
            user={user}
            userArtists={userArtists}
            setUserArtists={setUserArtists}
            userEvents={userEvents}
            setUserEvents={setUserEvents}
        />
        : <LoginPage />
      }
    </>
  );
}

export default App;
