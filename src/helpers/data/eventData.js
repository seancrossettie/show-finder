import axios from 'axios';
import songKickApi from './songKickApi';

const apiKey = songKickApi;

const getArtistEvents = (artistId) => new Promise((resolve, reject) => {
  axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${apiKey}`)
    .then((response) => resolve(response.data.resultsPage.results.event))
    .catch((error) => reject(error));
});

export default getArtistEvents;
