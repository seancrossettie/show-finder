import axios from 'axios';
import { getMyEvents } from './eventFbData';
import songKickApi from './songKickApi';

const apiKey = songKickApi;

const getArtistEvents = (artistId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.event))
    .catch((error) => reject(error));
});

const compareEvents = (user, artistId) => new Promise((resolve, reject) => {
  Promise.all([getArtistEvents(artistId), getMyEvents(user)])
    .then(([searchEventsArr, mySaved]) => {
      if (searchEventsArr && mySaved) {
        resolve(searchEventsArr.map((eventObj) => ({
          ...eventObj,
          isSaved: Boolean(mySaved.find((saved) => saved.eventId === eventObj.id))
        })));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export { getArtistEvents, compareEvents };
