// This file is nice to be untracked!
angular.module('config')
  .constant('LOCAL_CONFIG', {
    env: 'DEV',
  })
  .config(function(){
    // add some personal prefs for dev here too.
  })
  .run(function(User){
    // add a bunch of helper functions you like to use personally for dev
    // User.set('isLoggedIn', true); // should be done through an action!
  })
  // Anything else that we don't want shared in the repository