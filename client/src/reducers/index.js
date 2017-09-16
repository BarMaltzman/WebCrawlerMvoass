// import {combineReducers} from 'redux';
// import DataReducer from './dataReducer';
// import SearchWordReducer from './selectedWordReducer';
//
// const rootReducer = combineReducers({
//     dataFetched: DataReducer,
//     searchedWord: SearchWordReducer
// });
//
// export default rootReducer;

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
