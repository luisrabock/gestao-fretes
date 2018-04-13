const mongoose = require('mongoose');

const destSchema = mongoose.Schema({
    cgc: String,
    notaSerie: Array,
    emissao: Date,
    estado: String,
    cidade: String,
    estadoDest: String,
    cidadeDest: String,
    valor: Number,
    situacao: {type: String, default: 'ANALISE'}

});

const freightSchema = mongoose.Schema({
    conhecimento: Number,
    serie: String,
    cgcEmit: Number,
    peso: Number,
    volumes: Number,
    emissao: Date,
    estadoDest: String,
    cidadeDest: String,
    situacao: {type: String, default: 'ANALISE'},
    destInfo:[destSchema]
});

module.exports = mongoose.model('freights', freightSchema);