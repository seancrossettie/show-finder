import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getMyArtists } from '../../helpers/data/artistFbData';
import { getMyEvents } from '../../helpers/data/eventFbData';
import Routes from '../../helpers/Routes';
import LoginPage from '../../views/LoginPage';

function App() {
  const [user, setUser] = useState(null);
  const [userArtists, setUserArtists] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  // const [setArtists, setSetArtists] = useState([]);

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
        // getMyArtists(userObj).then(setSetArtists);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  // Creating a new set of artist names
  // const artistIdSet = [...new Set(setArtists.map((artist) => artist.displayName))];
  // console.warn(artistIdSet);

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
