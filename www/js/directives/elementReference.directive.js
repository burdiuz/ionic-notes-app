/**
 * Created by Oleg Galaburda on 18.12.15.
 */
(function() {
  'use strict';

  function ElementReferenceDirectiveFactory() {
    return {
      restrict: 'A',
      link: ElementReferenceDirectiveLink
    };
  }

  function ElementReferenceDirectiveLink($scope, element, attrs) {
    eval('$scope.' + attrs.elementReference + ' = element;');

  }

  angular.module('app.core').directive('elementReference', ElementReferenceDirectiveFactory);
})();
