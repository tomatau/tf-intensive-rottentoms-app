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
        resolve: {
          redir: function(User, $location){
            if (User.isLoggedIn()) $location.path('/')
          }
        }
      });
  })
  .controller('SigninCtrl', function(login, $state){
    var vm = this;
    // if editing, worth making a copy now or one way binding
    // this is where it can get tricky
    vm.user = {};
    vm.submitLogin = function(entity){
      // entity === vm.user;
      return login(vm.user)
        .then(function(){
          $state.go('root.home')
        })
    }
  })