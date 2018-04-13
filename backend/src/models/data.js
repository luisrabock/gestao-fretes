const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    nota: Number,
    serie: String,
    cgc: Number,
    cgcTransp: Number,
    peso: Number,
    volumes: Number,
    emissao: Date,
    embarque: Date,
    previsao: Date,
    prazo: Number,
    estado: String,
    cidade: String,
    estadoDest: String,
    cidadeDest: String,
    coordenadas: Array,
    ocorrencia: {type: String, default: 'Aguardando atualização'},
    codOcorr: Number,
    cor: Boolean,
    entrega: Boolean
});

module.exports = mongoose.model('data', dataSchema);