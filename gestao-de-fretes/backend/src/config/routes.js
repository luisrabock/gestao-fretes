const express = require('express');
const GestaoFretes = require('../api/gestaoFretesService');

module.exports = function rotas(server) {
  const router = express.Router();
  server.use('/api', router);

  GestaoFretes.register(router, '/gestaoFretes');
};
