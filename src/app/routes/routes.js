'use strict';
angular.module('routes', [
  'core',
  'modules',
  'ui.router'
]).constant('ROUTESURL', 'app/routes/')
  .constant('URLMAP', { // make sure they have a leading slash
    'home'  : '/',
    'search': '/search',
    'signin': '/login'
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      // $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');
  })
  .factory('globalResolve', function($q, fetchUserFromClient){
    // invoke the promises straight away, only happens once per page load
    //  i.e. doesn't happen after each route change
    return $q.all([fetchUserFromClient()])
  })
  .run(function(globalResolve, $rootScope, User, $state, $stateParams){
    // Authentication Solution
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      if (toState.publicRoute) { return true }
      event.preventDefault();
      globalResolve.then(function(){
        if (User.get('isAdmin') != true )
          $state.transitionTo('root.signin')
        else
          $state.transitionTo(toState.name, toParams, { notify: false }).then(function(){
            // must broadcast here as uiRouter views expect this event
            $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams)
          })
      })
    })

    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.error(error)
      });
  })