import axios from 'axios';

const API_KEY = '85087c8098e692e44b314cbe06f5ec43';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const var
// to keep action type consistency between actions and reducers
// use variable to hold type, put it somewhere for people
// easy to manage and watch
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator, responsible for making ajax request via weather api
// action creator must return an action object,
// which must have a 'type' property
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // return a promise
  //console.log('Request:', request);
  // using axios to make request, like ajax
  // axios: Promise based HTTP client for the browser and node.js
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
