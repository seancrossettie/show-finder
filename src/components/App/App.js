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
          .then((allArtists) => {
            const artistArray = new Set();
            const filteredArtists = allArtists.filter((el) => {
              const duplicate = artistArray.has(el.displayName);
              artistArray.add(el.displayName);
              return !duplicate;
            });
            setUserArtists(filteredArtists);
          });
        getMyEvents(userObj)
          .then((allEvents) => {
            const eventArray = new Set();
            const filteredEvents = allEvents.filter((el) => {
              const duplicate = eventArray.has(el.displayName);
              eventArray.add(el.displayName);
              return !duplicate;
            });
            setUserEvents(filteredEvents);
          });
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
