/**
 * Created by Oleg Galaburda on 18.12.15.
 */
(function() {
  'use strict';

  function FocusDirectiveFactory() {
    return {
      restrict: 'A',
      link: FocusDirectiveLink
    };
  }

  function FocusDirectiveLink($scope, element, attrs) {
    element[0].focus();
  }

  angular.module('app.core').directive('focus', FocusDirectiveFactory);
})();
