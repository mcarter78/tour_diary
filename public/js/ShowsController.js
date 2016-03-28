app.controller('ShowsController', ['$scope', '$http', function($scope, $http) {
  console.log('ShowsController loaded');
  $scope.allShows = [];
  $scope.newShow = {};
  $scope.editorEnabled = false;
  $scope.getAll = function() {
    $http
      .get('/api/shows')
      .then(function(res) {
        $scope.allShows = res.data;
      });
  };
  $scope.showShow = function(show) {
    console.log(show._id);
    $http
      .get('api/shows/' + show._id, show)
      .then(function(err, res) {
        if (err) console.log('error getting show');
        $scope.show = res.data;
        console.log($scope.show);
      });
  };
  $scope.addShow = function() {
    $http
      .post('/api/shows', $scope.newShow)
      .then(function(res) {
        console.log('added:', res.data);
        $scope.allShows.push(res.data);
        $scope.newShow = {};
      });
  };
  $scope.editShow = function(show) {
    $http
      .put('/api/shows/' + show._id, show)
      .then(function(err) {
        if (err) console.log('error editing show');
      });
  };
  $scope.deleteShow = function(show) {
    $http
      .delete('/api/shows/' + show._id, show)
      .then(function(err) {
        if (err) console.log('error deleting show');
        var index = $scope.allShows.indexOf(show);
        $scope.allShows.splice(index, 1);
      });
  };
  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableDate = $scope.date;
    $scope.editablePrice = $scope.price;
    $scope.editableAddress = $scope.address;
    $scope.editableDetails = $scope.details;
  };

  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };

  $scope.save = function() {
    $scope.date = $scope.editableDate;
    $scope.price = $scope.editablePrice;
    $scope.address = $scope.editableAddress;
    $scope.details = $scope.editableDetails;
    $scope.disableEditor();
  };
}]);
