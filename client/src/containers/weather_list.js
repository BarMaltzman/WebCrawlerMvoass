import React, { Component } from "react";
import {connect} from "react-redux";


class WeatherList extends Component {
    renderWeather(cityData){
        console.log(cityData);
        // const s = cityData.substring(33);
        const city = cityData.replace(/'/g, '"');
        // console.log('the city object is: ', city);
        const cityJ = JSON.parse(city);
        // console.log(typeof(cityJ));
        return(
            <tr key={cityJ.city_name}>
                <td>{cityJ.city_name.substring(1)}</td>
                <td>{Math.round(cityJ.tempreture)}</td>
                <td>{cityJ.humidity}</td>
                <td>{cityJ.wind}</td>
                <td><img src={cityJ.icon_url}/></td>
            </tr>
        );
    }
    render(){
    return(
        <table className = "table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(c)</th>
                    <th>Humidity</th>
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