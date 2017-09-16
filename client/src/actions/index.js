import axios from 'axios';

// const API_KEY = '02aa39598788a636642f4dc69660e05f';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // const url = `${ROOT_URL}&q=${city},us`;
    // const request = axios.get(url);
    const request = axios.get(`http://localhost:5000/getdata/:${city}`);
    // console.log();
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}