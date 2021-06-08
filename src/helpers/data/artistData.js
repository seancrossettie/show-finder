import axios from 'axios';
import songKickApi from './songKickApi';

const apiKey = songKickApi;

const getArtists = (artist) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${artist}`)
    .then((response) => resolve(response.data.resultsPage.results.artist))
    .catch((error) => reject(error));
});

const getSingleArtist = (artistId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.artist))
    .catch((error) => reject(error));
});

export { getArtists, getSingleArtist };
