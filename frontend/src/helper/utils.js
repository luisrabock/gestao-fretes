const URL_MARKERS = 'http://localhost:3000/data/markers';
import axios from 'axios'

//configuração de localização incial do mapa
export const mapConfig = {
  center: [-26.4861,-49.0666],
  zoom: 6
};

export const markers = [
  {
    //
    name: 'Jaragua do sul',
    latlng: [-26.4822, -49.0735]
  }
];

export function data() {
    axios.get(`${URL_MARKERS}`)
        .then(res => res.data)
        .then(data => {
            this.setState({
              markers:[data.cidadeDest,data.coordenadas]
            })
        })
}
