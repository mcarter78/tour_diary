var Show = require('../models/show');

var showsController = {
  index: function(req, res) {
    Show.find({}, function(err, shows) {
      if (err) console.log(err);
      res.json(shows);
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    Show.findById(id, function(err, show) {
      if (err) console.log(err);
      res.json(show);
    });
  },
  create: function(req, res) {
    var newShow = req.body;
    Show.create(newShow, function(err, show) {
      console.log('show created:', show);
      res.json(show);
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    var updatedShow = req.body;
    Show.findById(id, function(err, show) {
      if (err) console.log(err);
      show.save(updatedShow, function(err, updShow) {
        if (err) console.log(err);
        console.log('show updated', updShow);
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Show.findByIdAndRemove(id, function(err, show){
      if (err) console.log(err);
      console.log('show deleted');
      res.json(show);
    });
  }
};

module.exports = showsController;
