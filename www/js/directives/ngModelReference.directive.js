/**
 * Created by Oleg Galaburda on 18.12.15.
 */
(function() {

  function NgModelReferenceDirectiveFactory() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: NgModelReferenceDirectiveLink
    };
  }

  function NgModelReferenceDirectiveLink($scope, element, attrs, controller) {
    eval('$scope.' + attrs.ngModelReference + ' = controller;');

  }

  angular.module('app.core').directive('ngModelReference', NgModelReferenceDirectiveFactory);
})();
