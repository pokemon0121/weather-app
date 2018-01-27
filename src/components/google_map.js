import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom : 12,
      center : {
        lat : this.props.lat,
        lng : this.props.lon
      }
    });
  }

  render() {
    // use this.refs.map to access this div
    return <div ref="map" />;
  }
}
