import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getMyArtists } from './artistFbData';
// import songKickApiKey from './songKickApiKey';

const apiKey = firebaseConfig.skApiKey;

console.warn(apiKey);

const getArtists = (artist) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${artist}`)
    .then((response) => resolve(response.data.resultsPage.results.artist))
    .catch((error) => reject(error));
});

const compareArtists = (user, artist) => new Promise((resolve, reject) => {
  Promise.all([getArtists(artist), getMyArtists(user)])
    .then(([searchArtistArr, myFollowed]) => {
      if (searchArtistArr && myFollowed) {
        resolve(searchArtistArr.map((artistObj) => ({
          ...artistObj,
          isFollowed: Boolean(myFollowed.find((followed) => followed.artistId === artistObj.id))
        })));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleArtist = (artistId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.artist))
    .catch((error) => reject(error));
});

export {
  getArtists, compareArtists, getSingleArtist
};
