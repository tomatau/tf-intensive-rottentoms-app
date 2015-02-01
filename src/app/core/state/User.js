angular.module('core')
  .factory('User', function(BaseEntity) {
    var User = BaseEntity.extend({
      constructor: function() {
        BaseEntity.apply(this, arguments);
        this.set('isLoggedIn', false);
      },
      isLoggedIn: function(){
        return this.get('isLoggedIn');
      }
    })
    return new User();
  });