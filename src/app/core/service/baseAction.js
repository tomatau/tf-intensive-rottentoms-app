angular.module('core')
  // EXAMPLE:
  // This file is currently unused
  // would be easy to make different base actions each with a type of functionality
  //  e,g, fetch actions, mutate actions, promise actions,...
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