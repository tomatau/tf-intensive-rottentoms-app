'use strict';
angular.module('search')
  .directive('searchForm', function(
    formBuilder,
    SEARCHURL
  ) {
    return formBuilder({
      templateUrl: SEARCHURL + 'components/form.tmpl.html',
      formName: 'searchForm'
    });
  });