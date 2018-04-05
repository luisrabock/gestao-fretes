//configuração de localização incial do mapa
export const mapConfig = {
  center: [-26.4861,-49.0666],
  zoom: 6
};

export const replaceSpaces = (city) => {
  return city.replace(/ /g, "+")
};

