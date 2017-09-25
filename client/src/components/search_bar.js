import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

import {cachedCities} from './App';
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value});
    }
    /*
        The following function is responsible for preventing the default form behavior
     */
    onFormSubmit(event){
        event.preventDefault();
        const cityToFetch = this.state.term.toLocaleLowerCase();
        const matchedCities = cachedCities.filter(currCity=>{
            return (cityToFetch ===  currCity.toLocaleLowerCase())
            });
        if (matchedCities.length === 0){
            cachedCities.unshift(this.state.term);
            this.props.fetchWeather(this.state.term);
        }
        else {
            alert("The city You have been looking for is rendered om the screen");
        }
        this.setState({term: ''});
    }


    render(){
        return (
                <form
                    onSubmit={this.onFormSubmit}
                    className="input-group"
                >
                    <input
                        type="text"
                        placeholder="Type a city name and get a weather forcast"
                        className="form-control"
                        aria-label="Type a city name and get a weather forcast"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    / >
                <span className="input-group-btn">
                    <button type= "submit" className= "btn btn-secondary">Submit</button>
                </span>
            </form>

    );
    }
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators({fetchWeather}, dispatch);
    }
    export  default connect(null,mapDispatchToProps)(SearchBar);
