import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather(city_data) {
    const name = city_data.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
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
