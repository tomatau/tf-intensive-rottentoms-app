angular.module('login')
  .factory('login', function(
    User,
    userGateway
  ){
    return function(credentials){
      return userGateway.validCredentials(credentials)
        .then(function(){
          user = {
            username: credentials.username,
            isAdmin: true
          }
          userGateway.saveToClient(user)
          User.set(user)
        })
    }
  })