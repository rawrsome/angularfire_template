'use strict';

// *inject firebase.js module from cdn
var App = angular.module('myApp.home', ['ngRoute', 'firebase'])
   // ====> Declared route 
App.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home', {
       templateUrl: 'home/home.html',
       controller: 'HomeCtrl'
    });

}])
// ====> Home controller
App.controller('HomeCtrl', [
   '$scope', '$rootScope',
   function($scope) {
      var ref = new Firebase('https://purestripe.firebaseio.com/');

      
   }
]);

// <==== end Home controller