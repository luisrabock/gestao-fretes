const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

const dataRoutes = require('./src/routes/data');
const locationRoutes = require('./src/routes/locations');
const taxRoutes = require('./src/routes/tax');
const regionsRoutes = require('./src/routes/regions');



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tms', {
  useMongoClient: true,
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Routes which should handle requests
app.use("/data", dataRoutes);
app.use("/locations", locationRoutes);
app.use("/tax", taxRoutes);
app.use("/regions", regionsRoutes);


//refactoring this soon
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
