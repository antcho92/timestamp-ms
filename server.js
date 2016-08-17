var express = require('express');
var http = require('http');
var moment = require('moment');
var path = require('path');
var app = express();

//GET home page
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});