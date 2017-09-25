import React, { Component } from "react";
import {connect} from "react-redux";


class WeatherList extends Component {
    renderWeather(cityData){
        const city = cityData.replace(/'/g, '"');
        const cityJ = JSON.parse(city);
        return(
            <tr key={cityJ.city_name}>
                <td>{cityJ.city_name}</td>
                <td>{Math.round(cityJ.tempreture)}</td>
                <td>{cityJ.humidity}</td>
                <td>{cityJ.wind}</td>
                <td><img src={cityJ.icon_url} alt=""/></td>
            </tr>
        );
    }
    render(){
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