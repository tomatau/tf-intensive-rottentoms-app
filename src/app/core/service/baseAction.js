angular.module('core')
  // EXAMPLE:
  // This file is currently unused
  // would be easy to make different base actions of diff functionality
  .factory('baseAction', function(
    $q
  ){
    return function baseAction(action){
      // logging
      // analytics
      // default progress bar settings
      // default promise wrapper
      return $q(function(resolve, reject){
        var act = action();
        if (act) resolve(act)
        else reject();
      })
    }
  })