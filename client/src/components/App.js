import React, { Component } from 'react';
import SearchBar from "./search_bar";
import WeatherList from "./weather_list";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';

export const cachedCities = [];

class App extends Component {
    /*
    as asked, Fetching the current weather for 2 cities
     */
    componentDidMount(){
        this.props.fetchWeather('New York');
        this.props.fetchWeather('Los Angeles');

    }
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(App);