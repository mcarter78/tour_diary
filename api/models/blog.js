var mongoose = require('mongoose');
var CommentSchema = require('./comment').schema;

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  date: { type : Date, default: Date.now },
  bandMember: String,
  content: String,
  comments: [CommentSchema]
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
