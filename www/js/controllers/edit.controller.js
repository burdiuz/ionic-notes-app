/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {

  /**
   * @param $state
   * @param $stateParams
   * @param noteService {NoteService}
   * @param dataService {DataService}
   * @constructor
   */
  function EditController($state, $stateParams, noteService, dataService) {
    var _item;

    function checkAvailability() {
      var result = true;
      if (!dataService.hasItem($stateParams.id)) {
        $state.go('app.create');
        result = false;
      }
      return result;
    }

    Object.defineProperties(this, {
      item: {
        get: function() {
          return _item;
        }
      },
      title: {
        get: function() {
          return _item ? noteService.getTitle(_item) : '';
        }
      }
    });

    this.save = function() {
      dataService.saveItem(_item);
    }

    if (checkAvailability()) {
      _item = dataService.getItem($stateParams.id);
    }
  }

  EditController.$inject = ['$state', '$stateParams', 'noteService', 'dataService'];

  angular.module('starter.controllers').controller('EditController', EditController);
})();
