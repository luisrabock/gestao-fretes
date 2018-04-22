/*eslint-disable */

import React, { PureComponent } from 'react';
import Map from 'pigeon-maps';
import {  mapConfig } from '../helper/utils'
import axios from 'axios';
import Marker from 'pigeon-marker';

const URL_MARKERS = 'http://localhost:3000/data/markers';

const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
  //Latitude e longitude dos marcadores, incluir dinamicamente de acordo com ultimas entregas

class PigeonMaps extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {markers: [] }


}

componentDidMount() {
  axios.get(`${URL_MARKERS}`)
    .then(res => {
      const markers = res.data;
      this.setState({ markers });
    })
}

  render() {
    // create an array with marker components

    return (
    <div className="map">
      <Map
        width={window.innerWidth}
        height={600}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        provider={getProvider}>
      { this.state.markers.map(doc => <Marker key={doc._id} anchor={doc.coordenadas}/>)}
      </Map>
    </div>
      

    )
  }
}

export default PigeonMaps;