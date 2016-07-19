'use strict';


var equipApp = angular.module('equipApp', []);
equipApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from main controller");

    $http.get('/contactlist').success(function(response){
      console.log('Received data from mainCtrl');
      $scope.contactlist = response;
    });
    $scope.addContact = function(){
      console.log('New Staff Added!');
      $http.post('/contactlist', $scope.contact);
    };

// var equipApp = angular.module('equipApp', []);
// equipApp.controller('mainCtrl', function($scope) {
//      console.log('hello from mainCtrl!');


//$scope with this allows use of contactList in .html file
//$scope.contactlist = contactlist;

//close mainCtrl fxn
}]);
