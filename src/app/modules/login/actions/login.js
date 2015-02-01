angular.module('login')
  .factory('login', function(
    User,
    userGateway,
    cfpLoadingBar
  ){
    return function(credentials){
      cfpLoadingBar.start();
      return userGateway.validCredentials(credentials)
        .then(function(){
          user = {
            username: credentials.username,
            isLoggedIn: true
          }
          userGateway.saveToClient(user)
          User.set(user)
          cfpLoadingBar.complete()
        })
    }
  })