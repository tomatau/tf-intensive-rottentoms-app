'use strict';
angular.module('routes', [
  'core',
  'ui.router'
]).constant('ROUTESURL', 'app/routes/')
  .constant('URLMAP', {
    'home'  : '/',
    'search': 'search'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .factory('globalResolve', function($q){
    return $q.all([])
  })