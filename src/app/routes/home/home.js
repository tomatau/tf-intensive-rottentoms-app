'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('home', {
        url: URLMAP.home,
        templateUrl: ROUTESURL + 'home/home.tmpl.html',
        controller: 'HomeCtrl'
      });
  })
  .controller('HomeCtrl', function(){
    var vm = this;
  })