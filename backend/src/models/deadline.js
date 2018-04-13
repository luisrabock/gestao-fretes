const mongoose = require('mongoose');

const deadlineSchema = mongoose.Schema({
    transportadora: {type: String, requirede: true},
    cgc: Number,
    uf: {type: String, uppercase: true},
    cidade: {type: String},
    regiao: {type: String, uppercase: true},
    prazo: {type: String}

});

module.exports = mongoose.model('deadlines', deadlineSchema);