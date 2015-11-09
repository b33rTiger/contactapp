var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a get request');
  db.contactlist.find(function (error, data) {
  res.json(data);
  })
});

app.post('/contactlist', function (req, res) {
  db.contactlist.insert(req.body, function (error, data) {
    res.json(data);
  })
});

app.listen(3000);
console.log('listening on port 3000');