angular.module('core')
  .constant('SECRETPASSWORD', 'cheese')
  .constant('USER_KEY', 'localStorageUser')
  .factory('lsUserGateway', function(
    $q,
    $localStorage,
    USER_KEY,
    SECRETPASSWORD
  ){
    return {
      validCredentials: function(credentials){
        return $q(function(resolve, reject){
          if (credentials.password == SECRETPASSWORD) resolve()
          else reject()
        })
      },
      saveToClient: function(user){
        return $q(function(resolve, reject){
          $localStorage[USER_KEY] = user
          resolve();
        })
      },
      getFromClient: function(){
        return $q(function(resolve, reject){
          resolve($localStorage[USER_KEY])
        })
      }
    }
  })