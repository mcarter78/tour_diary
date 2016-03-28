var app = angular.module('tourDiary', ['ngRoute', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  console.log('config loaded');
  $stateProvider
    .state('blog', {
      url: '/',
      controller: 'BlogController',
      controllerAs: 'blog',
      templateUrl: 'templates/blog-index.hbs'
    })
    .state('blog-show', {
      url: '/blog/:id',
      controller: 'BlogController',
      controllerAs: 'blog',
      templateUrl: 'templates/blog-show.hbs'
    })
    .state('shows', {
      url: '/shows',
      controller: 'ShowsController',
      controllerAs: 'shows',
      templateUrl: 'templates/shows-index.hbs'
    })
    .state('shows-show', {
      url: '/shows/:id',
      controller: 'ShowsController',
      controllerAs: 'shows',
      templateUrl: 'templates/shows-show.hbs'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}]);
