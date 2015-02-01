'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('root.home', {
        url: URLMAP.home,
        templateUrl: ROUTESURL + 'home/home.tmpl.html',
        controller: 'HomeCtrl',
        publicRoute: true,
        resolve: { }
      });
  })
  .controller('HomeCtrl', function(){
    var vm = this;
  })