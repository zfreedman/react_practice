import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/weather_chart";

class WeatherList extends Component {
  // used for rendering weather data
  renderWeather(city_data) {
    const name = city_data.city.name;
    const temps = city_data.list.map(weather => weather.main.temp);
    const hums = city_data.list.map(weather => weather.main.humidity);
    const pres = city_data.list.map(weather => weather.main.pressure);
    console.log(temps)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <WeatherChart data={temps} color="orange" />
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
