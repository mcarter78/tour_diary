var Blog = require('../models/blog');
var Show = require('../models/show');
var Comment = require('../models/comment');

var blogCommentsController = {
  create: function(req, res) {
    var id = req.params.id;
    Blog.find(id, function(err, post) {
      if (err) console.log(err);
      var newComment = req.body;
      Comment.create(newComment, function(err, comment) {
        if (err) console.log(err);
        post.comments.push(comment);
        console.log('comment created', comment);
      });
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    Comment.find(id, function(err, comment) {
      if (err) console.log(err);
      var updatedComment = req.body;
      comment.save(updatedComment, function(err, updComment) {
        if (err) console.log(err);
        console.log('comment updated', updComment);
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Comment.findByIdAndRemove(id, function(err, comment) {
      if (err) console.log(err);
    });
  }
};

var showCommentsController = {
  create: function(req, res) {
    var id = req.params.id;
    Show.find(id, function(err, post) {
      if (err) console.log(err);
      var newComment = req.body;
      Comment.create(newComment, function(err, comment) {
        if (err) console.log(err);
        post.comments.push(comment);
        console.log('comment created', comment);
      });
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    Comment.find(id, function(err, comment) {
      if (err) console.log(err);
      var updatedComment = req.body;
      comment.save(updatedComment, function(err, updComment) {
        if (err) console.log(err);
        console.log('comment updated', updComment);
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Comment.findByIdAndRemove(id, function(err, comment) {
      if (err) console.log(err);
    });
  }
};

module.exports = {
  blogCommentsController: blogCommentsController,
  showCommentsController: showCommentsController
};
