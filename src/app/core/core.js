angular.module('core', [
    'ngCookies',
    'ngTouch',
    'ngAnimate',
    'ngSanitize'
  ])
  .constant('COREURL', 'app/core/')
  .config(function(iocMapProvider){
    iocMapProvider.map({
      'userGateway': 'lsUserGateway'
    })
  });