angular.module('core')
  .factory('User', function(BaseEntity) {
    var User = BaseEntity.extend({
      constructor: function() {
        BaseEntity.apply(this, arguments);
        this.set('isAdmin', false);
      }
    })
    return new User();
  });