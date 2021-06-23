import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getMyEvents } from './eventFbData';

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

// const getSingleEventStart = (eventId) => new Promise((resolve, reject) => {
//   axios.get(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`)
//     .then((response) => resolve(response.data.resultsPage.results.event.start.date))
//     .catch((error) => reject(error));
// });

// const getSingleEventEnd = (eventId) => new Promise((resolve, reject) => {
//   axios.get(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`)
//     .then((response) => {
//       if (response === undefined || response === {}) {
//         resolve({});
//       } else {
//         resolve((response.data.resultsPage.results.event.end.date));
//       }
//     }).catch((error) => reject(error));
// });

// const getEventDate = (eventId) => new Promise((resolve, reject) => {
//   Promise.all([getSingleEventStart(eventId), getSingleEventEnd(eventId)])
//     .then(([eventStart, eventEnd]) => {
//       if (eventStart && eventEnd) {
//         resolve([eventStart, eventEnd]);
//       } else if (eventStart && eventEnd === undefined) {
//         resolve([eventStart]);
//       } else {
//         resolve([]);
//       }
//     }).catch((error) => reject(error));
// });

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
