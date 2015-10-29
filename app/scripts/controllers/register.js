'use strict';

/**
 * @ngdoc function
 * @name psjwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the psjwtApp
 */
angular.module('psjwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function(){
      // console.log('submit');
      var url= '/';
      var user = {};
      $http.post(url, user)
        .success(function(res){
          alert('success', 'Ok!', 'You are now register');
        })
        .error(function(res){
            alert('warning', 'Opps!', 'Could not register');
        });
    }
  });
