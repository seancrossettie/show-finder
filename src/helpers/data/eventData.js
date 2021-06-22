import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getMyEvents } from './eventFbData';
// import songKickApiKey from './songKickApiKey';

const apiKey = firebaseConfig.skApiKey;

const getArtistEvents = (artistId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${apiKey}`)
    .then((response) => {
      if (response) {
        resolve(response.data.resultsPage.results.event);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleEvent = (eventId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.event))
    .catch((error) => reject(error));
});

const getEventArtists = (eventId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.event.performance))
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

export {
  getArtistEvents, getSingleEvent, getEventArtists, compareEvents
};
