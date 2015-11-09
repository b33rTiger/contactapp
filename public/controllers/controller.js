var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  var refresh = function () {
    $http.get('/contactlist')
      .success(function (response) {
        console.log('I have the requested data');
        $scope.contactlist = response;
        $scope.contact = '';
      });
  };

  refresh();

    $scope.addContact = function() {
      $http.post('/contactlist', $scope.contact)
        .success(function (data) {
          // res.json(data);
          refresh();
        });
    };
}]);