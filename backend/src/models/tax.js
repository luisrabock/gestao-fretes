const mongoose = require('mongoose');

const taxSchema = mongoose.Schema({
    transp: {type: Number},
    estadoOrig: String,
    cidadeOrig: String,
    estadoDest: String,
    cidadeDest: String,
    previsao: Number,
    pedagio: Number,
    indice: Number,
    seguro: Number,
    trt: {type: Number, default: 0},
    tas: {type: Number, default: 0},
    tfd: {type: Number, default: 0},
    sf: {type: Number, default: 0},
    trf: {type: Number, default: 0},
    ta: {type: Number, default: 0},
    vd: {type: Number, default: 0},
    tda: {type: Number, default: 0},
    min: {type: Number, default: 0},
    perc: {type: Number, default: 0},
    pesoUn: {type: Number, default: 0},
    pesoMin: {type: Number, default: 0},
});

module.exports = mongoose.model('tax', taxSchema);