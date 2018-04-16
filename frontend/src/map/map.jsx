/*eslint-disable */

import React, { PureComponent } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import {  mapConfig, markers } from '../helper/utils'
import axios from 'axios';

const URL_MARKERS = 'http://localhost:3000/data/markers';

const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
  //Latitude e longitude dos marcadores, incluir dinamicamente de acordo com ultimas entregas

class PigeonMaps extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {markers: []}
}
/*
componentWillMount() {
  data.call(this);
}
*/
  render() {
    // create an array with marker components
    const PigeonMarkers = markers.map(marker => (
      <Marker key={`marker_${marker.name}`} anchor={marker.latlng} payload={marker.name} onClick={this.onMarkerClick} />
    ));

    return (
      <div className="map">
        <Map
          width={window.innerWidth}
          height={600}
          defaultCenter={mapConfig.center}
          defaultZoom={mapConfig.zoom}
          provider={getProvider}
        >
          {PigeonMarkers}
        </Map>
      </div>
    );
  }
}

export default PigeonMaps;
