import React, { Component } from "react";
// googlemaps API provided by line 7 in index.html

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map made available from this below line
    return <div ref="map" />;
  }
}

export default GoogleMap;
