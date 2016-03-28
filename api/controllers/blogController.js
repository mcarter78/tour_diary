var Blog = require('../models/blog');

var blogController = {
  index: function(req, res) {
    console.log('indexing');
    Blog.find({}, function(err, posts) {
      if (err) console.log(err);
      res.json(posts);
    });
  },
  show: function(req, res) {
    console.log('showing', req);
    var id = req.params.id;
    Blog.findById(id, function(err, post) {
      if (err) console.log(err);
      res.json(post);
    });
  },
  create: function(req, res) {
    var newPost = req.body;
    Blog.create(newPost, function(err, post) {
      console.log('post created:', post);
      res.json(post);
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    var updatedPost = req.body;
    Blog.findById(id, function(err, post) {
      if (err) console.log(err);
      post.save(updatedPost, function(err, updPost) {
        if (err) console.log(err);
        console.log('post updated', updPost);
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Blog.findByIdAndRemove(id, function(err, post){
      if (err) console.log(err);
      console.log('post deleted');
      res.json(post);
    });
  }
};

module.exports = blogController;
