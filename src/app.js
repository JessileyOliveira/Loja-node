const express = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const consign = require('consign');

mongoose.connect("mongodb://localhost/loja", {useNewUrlParser: true})

const consignProperties = {
  cwd: "src",
  locale: 'pt-br',
  logger: console,
  verbose: true,
  extensions: [ '.js', '.json', '.node' ],
  loggingType: 'info'
}

consign(consignProperties)
  .include('Model')
  .then('Controller')
  .then("Route")
  .into(app);

module.exports = app;