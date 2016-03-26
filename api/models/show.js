var mongoose = require('mongoose');
var CommentSchema = require('./comment').schema;

var Schema = mongoose.Schema;

var ShowSchema = new Schema({
  date: Date,
  address: String,
  details: String,
  comments: [CommentSchema]
});

var Show = mongoose.model('Show', ShowSchema);

module.exports = Show;
