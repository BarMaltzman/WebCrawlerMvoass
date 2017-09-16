import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
/*
the action creator function- asks the back-end to crawl the web for the current weather for a specific city
 */
export function fetchWeather(city) {
    const request = axios.get(`http://localhost:5000/getdata/:${city}`);
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}