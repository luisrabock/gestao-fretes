import turfRandom from '@turf/random';
import Immutable from 'immutable';

export function slugify(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

//Latitude e longitude dos marcadores, incluir dinamicamente de acordo com ultimas entregas
export const markers = [
  {
    name: 'Jaragua do sul',
    latlng: [-26.4822, -49.0735]
  }
];

//configuração de localização incial do mapa
export const mapConfig = {
  center: [-26.4861,-49.0666],
  zoom: 6
};

const points = turfRandom('points', 50000, { bbox: [13.0535, 52.3303, 13.7262, 52.6675] });
export const locations = Immutable.fromJS(points.features.map(feat => feat.geometry.coordinates));


export const scatterPlotData = points.features.map(feat => (
  { position: feat.geometry.coordinates,
    radius: 1,
    color: [255, 0, 0]
  }
));

