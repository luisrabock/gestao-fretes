const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    cidade: {type: String, uppercase: true},
    uf: {type: String, uppercase: true},
    regiao: {type: String, uppercase: true},
    latitude: {type: Number},
    longitude: {type: Number},
    coordenadas: {type: Array, required: true}

});
module.exports = mongoose.model('location', locationSchema);