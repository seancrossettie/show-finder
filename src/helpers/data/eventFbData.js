import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMyEvents = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/events.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createEvent = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/events.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/events/${response.data.name}.json`, body)
        .then(() => {
          getMyEvents(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

const deleteEvent = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/events/${firebaseKey}.json`)
    .then(() => {
      getMyEvents(user).then(resolve);
    })
    .catch((error) => reject(error));
});

const updateEvent = (eventObj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/events/${eventObj.firebaseKey}.json`, eventObj)
    .then(() => {
      getMyEvents(user).then((resp) => resolve(resp));
    })
    .catch((error) => reject(error));
});

export {
  getMyEvents, createEvent, deleteEvent, updateEvent
};
