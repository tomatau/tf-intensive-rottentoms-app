angular.module('core')
  .factory('fetchUserFromClient', function(
    User,
    userGateway
  ){
    return function fetchUserFromClient(){
      return userGateway.getFromClient()
        .then(function(user){
          if (user != null) User.set(user)
        })
    }
  })