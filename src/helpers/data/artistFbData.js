import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMyArtists = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/artists.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createArtist = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/artists.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/artists/${response.data.name}.json`, body)
        .then(() => {
          getMyArtists((resp) => console.warn(resp));
        });
    })
    .catch((error) => reject(error));
});

// Delete request
// const deleteData = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbURL}/data/${firebaseKey}.json`)
//     .then(() => {
//       getData((resp) => resolve(resp));
//     })
//     .catch((error) => reject(error));
// });

// const updateData = (obj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbURL}/data/${obj.firebaseKey}.json`, obj)
//     .then(() => {
//       getData((resp) => resolve(resp));
//     })
//     .catch((error) => reject(error));
// });

export {
  getMyArtists, createArtist
};
