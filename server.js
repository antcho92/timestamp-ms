var express = require('express');
var http = require('http');
var moment = require('moment');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

//GET home page
app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

app.get('/:timestamp', function(req, res) {
  var time = moment(req.params.timestamp);
  res.json({
    'natural': time.format('MM DD, YYYY'),
    'unix': time.format('X')
  });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});