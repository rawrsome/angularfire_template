'use strict';

// *inject firebase.js module from cdn
var App = angular.module('myApp.home', ['ngRoute', 'firebase', 'angularPayments'])



// ====> Declared route 
App.config(['$routeProvider', function($routeProvider, $window) {

    $routeProvider.when('/home', {
       templateUrl: 'home/home.html',
       controller: 'HomeCtrl'
    });
    Stripe.setPublishableKey('pk_test_ir3pQ7Xr2fy8TgUcYrDWXmkG');

}])


// ====> Home controller
App.controller('HomeCtrl', [
   '$scope', '$rootScope',
   function($scope) {
      var ref = new Firebase('https://purestripe.firebaseio.com/');
      // Stripe Response Handler
		$scope.stripeCallback = function (code, result) {
		    if (result.error) {
		        window.alert('it failed! error: ' + result.error.message);
		    } else {
		        window.alert('success! token: ' + result.id);
		    }
		};
      
   }
   
]);
// <==== end Home controller