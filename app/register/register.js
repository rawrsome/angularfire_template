'use strict';

var App = angular.module('myApp.register', ['ngRoute', 'firebase'])

// Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])

// Register controller
App.controller('RegisterCtrl', ['$scope', function($scope) {

	var ref = new Firebase("https://purestripe.firebaseio.com");


}]);