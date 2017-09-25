import {FETCH_WEATHER} from '../actions/index';
import {cachedCities} from '../components/App';
export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            let weather = action.payload.data.replace(/'/g, '"');
            weather = JSON.parse(weather);
            cachedCities.unshift(weather.city_name);
            return [action.payload.data, ...state];
        default:
            return state;
    }
}
