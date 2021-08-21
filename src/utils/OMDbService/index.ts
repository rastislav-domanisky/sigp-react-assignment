import axios from 'axios';

const OMDbService = axios.create({
  method: 'GET',
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: process.env.REACT_APP_OMDB_API_KEY,
  },
});

export default OMDbService;
