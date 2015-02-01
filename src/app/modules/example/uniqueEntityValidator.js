'use strict';
angular.module('example')
  // placeholder state entity for validator below example
  .factory('UserList', function(){
    return { get: function(){ return [] } };
  })
  // This is an example validator that checks a user name and email combo is unique
  .factory('uniqueNameAndEmailValidator', function(CourseList) {
    return function(entity, original) {
      var valid = false,
        nameExists = _.where(UserList.get(), {
          name: entity.name
        });

      // editing
      if ((entity.id != null) && _.isEqual(entity, original)) {
        // not unique because editing existing user
        valid = true;
      } else
      // creating
      if (!nameExists.length) {
        valid = true;
      } else
      // the name exists... do any of them have the same email address?
      if (!_.find(nameExists, { email: entity.email })) {
        valid = true;
      }
      return valid;
    };
  });