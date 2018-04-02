const restful = require('node-restful');
const mongoose = require('mongoose');

const gestaoFretesSchema = new mongoose.Schema({
  nota: { type: Number },
  serie: { type: String },
  cgc: { type: Number },
  emissao: { type: Date },
  conhecimento: { type: Number },
  freteCalculado: { type: Number },
  frete: { type: Number },
  situacaoDoCte: { type: String },
  statusEntrega: { type: Boolean },
  percentualFrete: { type: Number },
  percentualCobrado: { type: Number },
  origem: { type: String },
  destino: { type: String },
});

module.exports = restful.model('GestaoFretes', gestaoFretesSchema);
