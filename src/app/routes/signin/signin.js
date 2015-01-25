'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('signin', {
        url: URLMAP.signin,
        templateUrl: ROUTESURL + 'signin/signin.tmpl.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin',
      });
  })
  .controller('SigninCtrl', function(){
    var vm = this;
    // if editing, worth making a copy now or one way binding
    // this is where it can get tricky
    vm.user = {};
    vm.submitLogin = function(entity){
      entity === vm.user;
      // call login action
    }
  })