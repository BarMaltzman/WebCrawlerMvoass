import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

const cachedCities = ['New York', 'Los Angeles'];
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        // console.log(event.target.value)
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        var matchedCities = cachedCities.filter(currCity=>{
            return (this.state.term.toLocaleLowerCase() ===  currCity.toLocaleLowerCase())
            });
        console.log(matchedCities.length);
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
                < input
                    placeholder="Moveo Member, Type a city name and get a weather forcast"
                    className="form-control"
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
