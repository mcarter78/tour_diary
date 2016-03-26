var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/tour_diary');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));

app.listen(port, function(err){
  if (err) console.log(err);
  console.log('listening on port:', port);
});
