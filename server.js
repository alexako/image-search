'use strict';

var express = require('express');
var path = require('path');
var api = require('./api/search/img/abstraction_layer.js');

var app = express();

var port = proecess.env.PORT || 8000;

app.listen(port, function() {
  console.log('API is listening on port', port);
});
