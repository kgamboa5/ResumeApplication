
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resume', ['resume']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/resume', function (req, res) {
  console.log('I received a GET request');

  db.resume.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/resume', function (req, res) {
  console.log(req.body);
  db.resume.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/resume/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.resume.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/resume/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.resume.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/resume/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.school);
  db.resume.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {school: req.body.school, degree: req.body.degree, lastyear: req.body.lastyear}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(8080);
console.log("Server running on port 8080");