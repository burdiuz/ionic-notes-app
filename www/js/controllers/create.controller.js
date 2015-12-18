/**
 * Created by Oleg Galaburda on 17.12.15.
 */
(function() {
  /**
   * @param $state
   * @param dataService {DataService}
   * @constructor
   */
  function CreateController($state, dataService) {
    /**
     * @type {Note}
     * @private
     */
    var _item = dataService.createItem();

    /**
     * @returns {boolean}
     */
    this.invalid = function() {
      return !_item.text;
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

  CreateController.$inject = ['$state', 'dataService'];

  angular.module('starter.controllers').controller('CreateController', CreateController);
})();
