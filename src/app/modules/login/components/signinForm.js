'use strict';
angular.module('login')
  .directive('signinForm', function(
    formBuilder,
    LOGINURL
  ) {
    return formBuilder({
      templateUrl: LOGINURL + 'components/form.tmpl.html',
      formName: 'signinForm'
    });
  });