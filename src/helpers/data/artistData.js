import axios from 'axios';
import { getMyArtists } from './artistFbData';
import songKickApi from './songKickApi';

const apiKey = songKickApi;

const getArtists = (artist) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${artist}`)
    .then((response) => resolve(response.data.resultsPage.results.artist))
    .catch((error) => reject(error));
});

// const getMyArtistsIds = (user) => new Promise((resolve, reject) => {
//   getMyArtists(user).then((artistArray) => {
//     const myIdArray = artistArray.map((artist) => artist.artistId);
//     resolve(myIdArray);
//     console.warn(myIdArray);
//   }).catch((error) => reject(error));
// });

// const getSearchArtistId = (artist) => new Promise((resolve, reject) => {
//   getArtists(artist).then((artistArray) => {
//     const skIdArray = artistArray.map((a) => a.id);
//     resolve(skIdArray);
//     console.warn(skIdArray);
//   }).catch((error) => reject(error));
// });

// Promise.all comparing the artistId's of all my save artists and all searched artists

const compareArtists = (user, artist) => new Promise((resolve, reject) => {
  Promise.all([getArtists(artist), getMyArtists(user)])
    .then(([searchArtistArr, myFollowed]) => {
      resolve(searchArtistArr.map((artistObj) => ({
        ...artistObj,
        isFollowed: Boolean(myFollowed.find((followed) => followed.artistId === artistObj.id))
      })));
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
