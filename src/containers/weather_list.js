import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    //console.log(temps);
    const pres = cityData.list.map(weather => weather.main.pressure);
    //console.log(pres);
    const hums = cityData.list.map(weather => weather.main.humidity);
    //console.log(hums);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={ id } >
        <td><GoogleMap lat={ lat } lon={ lon } /></td>
        <td><Chart data={ temps } color="red" units="C" /></td>
        <td><Chart data={ pres } color="blue" units="hPa" /></td>
        <td><Chart data={ hums } color="green" units="%" /></td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }) {
  // connect reducer to container
  // same as: return { weather : weather };
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
