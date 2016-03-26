var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  date: { type : Date, default: Date.now },
  name: String,
  content: String
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
