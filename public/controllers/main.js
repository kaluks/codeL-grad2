'use strict';


var equipApp = angular.module('equipApp', []);
equipApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from main controller");

    $http.get('/contactlist').success(function(response){
      console.log('Receiving data from mainCtrl');

      $scope.contactlist = response.contactlist;
    });
    $scope.addContact = function(){
      console.log('New Staff Added!');
      $http.post('/contactlist', $scope.contact);
    };

    $scope.deleteContact = function (item) {
    var index = $scope.contactlist.indexOf(item);
    $scope.contactlist.splice(index, 1);
    return $scope.removed = 'Contact successfully removed.';
  };



}]);
