var app = angular.module('tourDiary', ['ngRoute', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  console.log('config loaded');
  $stateProvider
    .state('blog', {
      url: '/blog',
      controller: 'BlogController',
      controllerAs: 'blog',
      templateUrl: 'templates/blog-index.hbs'
    })
    .state('shows', {
      url: '/shows',
      controller: 'ShowsController',
      controllerAs: 'shows',
      templateUrl: 'templates/shows-index.hbs'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}]);

app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
  console.log('BlogController loaded');
  $scope.allBlogPosts = [];
  $scope.newPost = {};
  $scope.editorEnabled = false;
  $scope.getAll = function() {
    $http
      .get('/api/blog')
      .then(function(res) {
        $scope.allBlogPosts = res.data;
      });
  };
  $scope.addPost = function() {
    $http
      .post('/api/blog', $scope.newPost)
      .then(function(res) {
        console.log('posted', res.data);
        $scope.allBlogPosts.push(res.data);
        $scope.newPost = {};
      });
  };
  $scope.editPost = function(post) {
    $http
      .put('/api/blog/' + post._id, post)
      .then(function(err) {
        if (err) console.log('error editing post');
      });
  };
  $scope.deletePost = function(post) {
    $http
      .delete('/api/blog/' + post._id, post)
      .then(function(err) {
        if (err) console.log('error deleting post');
        var index = $scope.allBlogPosts.indexOf(post);
        $scope.allBlogPosts.splice(index, 1);
      });
  };
  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableBandMember = $scope.bandMember;
    $scope.editableContent = $scope.content;
  };

  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };

  $scope.save = function() {
    $scope.bandMember = $scope.editableBandMember;
    $scope.content = $scope.editableContent;
    $scope.disableEditor();
  };
  $scope.getAll();
}]);
