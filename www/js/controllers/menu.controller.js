/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {
  /**
   *
   * @param $scope
   * @param $ionicModal
   * @param $timeout
   * @param dataService DataService
   * @constructor
   */
  function MenuController($scope, $ionicModal, dataService) {
    var _modal;
    var _this = this;
    var _items = dataService.getList();

    _this.openCreateModal = function() {
      $scope.item = dataService.createItem();
      _modal.show();
    };

    _this.confirmCreateNote = function(item) {
      _this.closeCreateModal();
    }

    _this.closeCreateModal = function() {
      _modal.hide();
      _modal = null;
    };

    Object.defineProperties(this, {
      items: {
        get: function() {
          return _items;
        }
      }
    });

    $ionicModal.fromTemplateUrl('templates/create.html', {
      scope: $scope
    }).then(function(modal) {
      _modal = modal;
    });

    $scope.save = _this.confirmCreateNote;
    $scope.close = _this.closeCreateModal;
  }

  MenuController.$inject = ['$scope', '$ionicModal', 'dataService'];

  angular.module('starter.controllers').controller('MenuController', MenuController);
})();
