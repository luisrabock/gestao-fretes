const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/gestaoFretes', {
  useMongoClient: true,
});

// Colocar mensagens de tratamento de erros
