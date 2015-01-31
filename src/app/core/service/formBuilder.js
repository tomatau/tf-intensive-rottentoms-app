'use strict';
// service for creating form directives... similar to 'extending a base form'
// automatically registers validators for the form as a whole
angular.module('core')
  .factory('formBuilder', function($q) {
    return function(formDDO) { // form Directive Definition Object
      return angular.extend({}, {
        scope: {
          entity: '=entity',
          submitFn: '&submitFn'
        },
        transclude: true,
        bindToController: true,
        controllerAs: 'form',
        controller: function($scope) {
          if (this.entity == null) throw new Error('Form requires entity');

          var original = this.original = angular.copy(this.entity);

          this.submit = function() {
            $q.when(this.submitFn()(this.entity))
              .then(function() {
                $scope[formDDO.formName].$setPristine();
                $scope[formDDO.formName].$setUntouched();
              });
          };

          // Automatic validators that supply the current entity as a whole and the original
          // this is very useful for methods such as 'isUnique' when checking on client
          $scope.$watchCollection('form.entity', function validate(entity) {
            // entity changed
            // is it pristine?
            if ($scope[formDDO.formName].$pristine) {
              // no id, so creating, so set defaults (first load)
              if (entity.id == null)
                angular.extend($scope.form.entity, formDDO.defaults);
              return true;
            }
            // not pristine, check each validator function
            angular.forEach(formDDO.validators, function(fn, name) {
              $scope[formDDO.formName].$setValidity(name,
                fn(entity, original)
              );
            });
          });
          // these don't work as expected...
          this.modelOptions = {
            updateOn: 'default blur',
            debounce: {
              'default': 200,
              'blur': 0
            }
          };
        }
      }, formDDO);
    };
  });