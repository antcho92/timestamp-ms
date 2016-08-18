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
  var time,
      regex = /^\d{8,}$/;
  //checks for a unix string passed
  if (regex.test(req.params.timestamp)) {
    time = moment(req.params.timestamp, 'X');
    console.log("unix time: " + time);
  } else {
    time = moment(req.params.timestamp, 'MMMM DD, YYYY');
    console.log('natural time: ' + time);
  }
  if (time.isValid()) {
    res.json({
      'natural': time.format('MMMM DD, YYYY'),
      'unix': time.format('X')
    });
  //returns the null response for invalid times
  } else {
    res.json({
      'natural': null,
      'unix': null
    });
  }
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});