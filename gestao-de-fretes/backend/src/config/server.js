const express = require('express');
const bodyParser = require('body-parser');
const queryParser = require('express-query-int');
const cors = require('cors');

const port = 3020;

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(queryParser());

server.listen(port, () => {
  console.log(`Servidor escutando na porta: ${port}`);
});

module.exports = server;
