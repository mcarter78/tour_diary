var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/tour_diary');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/../public'));



// include controllers
var blogController = require('./controllers/blogController');
var showsController = require('./controllers/showsController');
var commentsController = require('./controllers/commentsController');

// blog routes
app.get('/api/blog', blogController.index);
app.post('/api/blog', blogController.create);
app.get('/api/blog/:id', blogController.show);
app.put('/api/blog/:id', blogController.update);
app.delete('/api/blog/:id', blogController.delete);

// show routes
app.get('/api/shows', showsController.index);
app.post('/api/shows', showsController.create);
app.get('/api/shows/:id', showsController.show);
app.put('/api/shows/:id', showsController.update);
app.delete('/api/shows/:id', showsController.delete);

// // blog comment routes
// app.route('/api/blog/:id/comments')
//   .post(commentsController.blogCommentsController.create);
//
// app.route('/api/blog/:id/comments/:id')
//   .put(commentsController.blogCommentsController.update)
//   .delete(commentsController.blogCommentsController.delete);
//
// // show comment routes
// app.route('/api/shows/:id/comments')
//   .get(commentsController.blogCommentsController.index)
//   .post(commentsController.blogCommentsController.create);
//
// app.route('/api/shows/:id/comments/:id')
//   .put(commentsController.blogCommentsController.update)
//   .delete(commentsController.blogCommentsController.delete);

// layout route
app.get('*', function(req, res) {
  res.render('../../views/index');
});

// start server
app.listen(port, function(err){
  if (err) console.log(err);
  console.log('listening on port:', port);
});
