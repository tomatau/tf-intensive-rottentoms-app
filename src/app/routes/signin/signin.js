'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('root.signin', {
        url: URLMAP.signin,
        templateUrl: ROUTESURL + 'signin/signin.tmpl.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin',
        publicRoute: true,
      });
  })
  .controller('SigninCtrl', function(login){
    var vm = this;
    // if editing, worth making a copy now or one way binding
    // this is where it can get tricky
    vm.user = {};
    vm.submitLogin = function(entity){
      // entity === vm.user;
      return login(vm.user)
    }
  })