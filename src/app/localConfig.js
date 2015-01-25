angular.module('config')
  .constant('LOCAL_CONFIG', {
    env: 'DEV',
  })
  // faking login step
  .constant('isAdmin', true)
  .config(function(){
    // add some personal prefs for dev here too.
  })
  .run(function(){
    // add a bunch of helper functions I like to use personally for dev
  })
  // Whatever that won't be shared!