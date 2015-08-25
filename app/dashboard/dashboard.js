'use strict';

var App = angular.module('myApp.dashboard', ['ngRoute', 'firebase'])

// Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
}])

// Register controller
App.controller('DashboardCtrl', ['$scope', function($scope) {

	var ref = new Firebase("https://jimmyapp.firebaseio.com");


}]);