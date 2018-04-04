/*eslint-disable */

import React, { PureComponent } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { mapConfig } from '../../helper/utils'
import axios from 'axios';

const URL_MARKERS = 'http://localhost:3020/api/gestaoFretes/markers'
const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
  //Latitude e longitude dos marcadores, incluir dinamicamente de acordo com ultimas entregas
const markers = [
    {
      name: 'Jaragua do sul',
      latlng: [-26.4822, -49.0735]
    }
  ];

class PigeonMaps extends PureComponent {
  constructor(props) {
    super(props)
}

componentWillMount() {
  console.log('entra')
  axios.get(URL_MARKERS)
      .then(resp => console.log(resp.data))
}


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
