import React, { Component } from 'react';
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';

class App extends Component {
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