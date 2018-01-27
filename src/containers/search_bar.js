import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// connect this container to react
// and bind action creator (fetchWeather) here
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term : '' };
    // another working way
    //this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({ term : event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term : '' });
  }

  render() {
    return (
      <form onSubmit={ event => this.onFormSubmit(event) } className="input-group">
        <input
          value={ this.state.term }
          // another working way
          // onChange={ this.onInputChange }
          onChange={ event => this.onInputChange(event) }
          className="form-control"
          placeholder="Input a city to see a five-day forecast"
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // this gets the action creator whenever gets called returns an action
  return bindActionCreators({ fetchWeather }, dispatch);
}

// first params is state map function (null here)
export default connect(null, mapDispatchToProps)(SearchBar);
