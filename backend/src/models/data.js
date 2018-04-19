const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const dataSchema = mongoose.Schema({
    nota: {type: Number, unique: true, index:true, dropDups:true},
    serie: String,
    cgc: Number,
    cgcTransp: Number,
    peso: Number,
    volumes: Number,
    emissao: Date,
    embarque: Date,
    previsao: Date,
    estado: String,
    cidade: String,
    estadoDest: String,
    cidadeDest: String,
    coordenadas: Array,
    ocorrencia: {type: String, default: 'Aguardando atualização'},
    codOcorr: Number,
    cor: {type: Boolean, default: true},
    entrega: {type: Boolean, default: false}
});

dataSchema.plugin(uniqueValidator);
module.exports = mongoose.model('data', dataSchema);