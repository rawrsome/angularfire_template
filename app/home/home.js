'use strict';

// *inject firebase.js module from cdn
var App = angular.module('myApp.home', ['ngRoute', 'firebase', 'angularPayments'])

var ref = new Firebase('https://jimmyapp.firebaseio.com/');

// ====> Declared route 
App.config(['$routeProvider', function($routeProvider, $window) {
    /*
    $routeProvider.when('/home', {
       templateUrl: 'home/home.html',
       controller: 'HomeCtrl'
    });
    */
    $routeProvider.when('/', {
      templateUrl: 'index.html',
      controller: 'HomeCtrl'
    });
    Stripe.setPublishableKey('pk_test_d9xwF4xvdNliKcLOSTAb8uXs');

}])


// ====> Home controller
App.controller('HomeCtrl', [
   '$scope',
    function($scope, $http, stripe) {
      // Stripe Response Handler
  		$scope.stripeCallback = function(status, res) {
  		    if(res.error) {
  		        console.log('it failed! error: ' + res.error.message);
  		    } else {
              // Insert the token into the form so it gets submitted to the server
              var $form = $('#checkoutForm');
              $form.append($('<input type="hidden" name="stripeToken" />').val(res.id));
              $form.get(0).submit();

  		        console.log('success! token: ' + res.id);
  		        console.log('status: ' + status);
  		        console.log(res);
  		    }
  		};
   	}

]);
// <==== end Home controller