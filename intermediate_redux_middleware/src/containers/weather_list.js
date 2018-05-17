import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/weather_chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  // used for rendering weather data
  renderWeather(city_data) {
    const name = city_data.city.name;
    const temps = city_data.list.map(weather => weather.main.temp);
    const hums = city_data.list.map(weather => weather.main.humidity);
    const pres = city_data.list.map(weather => weather.main.pressure);
    /*
    const lon = city_data.city.coord.lon;
    const lat = city_data.city.coord.lat;
    */
    const { lon, lat } = city_data.city.coord;
    console.log(lon, lat);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <WeatherChart data={temps} color="orange" units="K" />
        </td>
        <td>
          <WeatherChart data={pres} color="blue" units="hPa" />
        </td>
        <td>
          <WeatherChart data={hums} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
// equivalent
function mapStateToProps(state) {
  return { weather: state.weather }
}
*/
function mapStateToProps({ weather }) {
  return { weather };
}

// exporting connected version of weatherlist
export default connect(mapStateToProps)(WeatherList);
