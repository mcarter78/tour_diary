// include express router
var express = require('express'),
    router = express.Router();

// include controllers
var blogController = require('../controllers/blogController');
var showsController = require('../controllers/showsController');
var commentsController = require('../controllers/commentsController');

// blog routes
router.route('/api/blog')
  .get(blogController.index)
  .post(blogController.create);

router.route('/api/blog/:id')
  .put(blogController.update)
  .delete(blogController.delete);

// blog comment routes
router.route('/api/blog/:id/comments')
  .post(commentsController.blogCommentsController.create);

router.route('/api/blog/:id/comments/:id')
  .put(commentsController.blogCommentsController.update)
  .delete(commentsController.blogCommentsController.delete);

// show routes
router.route('/api/shows')
  .get(showsController.index)
  .post(showsController.create);

router.route('/api/shows/:id')
  .get(showsController.show)
  .put(showsController.update)
  .delete(showsController.delete);

// show comment routes
router.route('/api/shows/:id/comments')
  .get(commentsController.blogCommentsController.index)
  .post(commentsController.blogCommentsController.create);

router.route('/api/shows/:id/comments/:id')
  .put(commentsController.blogCommentsController.update)
  .delete(commentsController.blogCommentsController.delete);


module.exports = router;
