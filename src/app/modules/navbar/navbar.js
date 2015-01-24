angular.module('navbar', [
    'core',
    'mgcrea.ngStrap',
    'ui.router'
  ])
  .constant('NAVBARURL', 'app/modules/navbar/')
  .directive('navigationBar', function(
    NAVBARURL
  ){
    return {
      scope: {
        navigation: '='
      },
      templateUrl: NAVBARURL + 'navbar.tmpl.html',
      controllerAs: 'navbar',
      bindToController: true,
      controller: function(){
        var vm = this;
        vm.brand = _.find(vm.navigation, { brand: true }) || vm.navigation[0];
      }
    }
  });