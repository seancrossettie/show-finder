import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMyArtists = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/artists.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getMyFavoriteArtists = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/artists.json?orderBy="favorite"&equalTo=true&orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createArtist = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/artists.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/artists/${response.data.name}.json`, body)
        .then(() => {
          getMyArtists(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

const deleteArtist = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/artists/${firebaseKey}.json`)
    .then(() => {
      getMyArtists(user).then(resolve);
    })
    .catch((error) => reject(error));
});

const updateArtist = (artistObj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/artists/${artistObj.firebaseKey}.json`, artistObj)
    .then(() => {
      getMyArtists(user).then((resp) => resolve(resp));
    })
    .catch((error) => reject(error));
});

export {
  getMyArtists, getMyFavoriteArtists, createArtist, deleteArtist, updateArtist
};
