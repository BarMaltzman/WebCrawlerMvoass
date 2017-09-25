import React, { Component } from "react";
import {connect} from "react-redux";
import {cachedCities} from './App';

class WeatherList extends Component {
    renderWeather(cityData){
        let city = cityData.replace(/'/g, '"');
        city = JSON.parse(city);
        return(
            <tr key={city.city_name}>
                <td>{city.city_name}</td>
                <td>{Math.round(city.tempreture)}</td>
                <td>{city.humidity}</td>
                <td>{city.wind}</td>
                <td><img src={city.icon_url} alt=""/></td>
            </tr>
        );
    }
    render(){
        if (cachedCities.length === 0){
            return(
                <h1>
                    Fetching the current weather of two cities as required, please wait...
                </h1>
            )
        }
    return(
        <table className = "table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(°C)</th>
                    <th>Humidity(%)</th>
                    <th>Wind</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>

        </table>
    )}
}

function mapStateToProps({weather}){
    return{weather};
}

export  default connect(mapStateToProps)(WeatherList);