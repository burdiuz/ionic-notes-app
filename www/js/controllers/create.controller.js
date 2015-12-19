/**
 * Created by Oleg Galaburda on 17.12.15.
 */
(function() {
  /**
   * @param $state
   * @param dataService {DataService}
   * @constructor
   */
  function CreateController($state, $stateParams, dataService) {
    /**
     * @type {Note}
     * @private
     */
    var _item = dataService.createItem();

    if ($stateParams.id) {
      _item.id = $stateParams.id;
    }

    /**
     * @returns {boolean}
     */
    this.invalid = function() {
      return !_item.text && !_item.title;
    };

    this.save = function() {
      dataService.saveItem(_item);
      $state.go('app.notes', {
        id: _item.id
      });
    };

    this.saveAndNew = function() {
      dataService.saveItem(_item);
      _item = dataService.createItem();
    };

    Object.defineProperties(this, {
      item: {
        get: function() {
          return _item;
        }
      }
    });
  }

  CreateController.$inject = ['$state', '$stateParams', 'dataService'];

  angular.module('starter.controllers').controller('CreateController', CreateController);
})();
