var Blog = require('../models/blog');
var Show = require('../models/show');
var Comment = require('../models/comment');

var blogCommentsController = {
  index: function(req, res) {
    var id = req.params.id;
    Blog.findById(id, function(err, post) {
      if (err) console.log(err);
      res.json(post.comments);
    });
  },
  create: function(req, res) {
    var id = req.params.id;
    Blog.findById(id, function(err, post) {
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
    Comment.findById(id, function(err, comment) {
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
  index: function(req, res) {
    var id = req.params.id;
    Show.findById(id, function(err, show) {
      if (err) console.log(err);
      res.json(show.comments);
    });
  },
  create: function(req, res) {
    var id = req.params.id;
    Show.findById(id, function(err, post) {
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
    Comment.findById(id, function(err, comment) {
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
