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
  function EditController($state, $stateParams, $scope, noteService, dataService) {
    /**
     * @type Note
     */
    var _item;
    /**
     * @type NgModelController
     */
    var _textModel;
    /**
     * @type Function
     */
    var _changeRemoveListener;

    this.save = function() {
      dataService.saveItem(_item);
      if (_textModel) {
        _textModel.$setPristine();
        _textModel.$setUntouched();
      }
    };

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
      },
      textModel: {
        get: function() {
          return _textModel;
        },
        set: function(value) {
          _textModel = value;
        }
      }
    });

    if (checkAvailability()) {
      _item = dataService.getItem($stateParams.id);
    }

    _changeRemoveListener = dataService.onChange(function() {
      if (!dataService.hasItem(_item.id)) {
        $state.go('app.create');
      }
    });

    $scope.$on('$destroy', function() {
      console.log('destroy!');
      _changeRemoveListener();
    });

  }

  EditController.$inject = ['$state', '$stateParams', '$scope', 'noteService', 'dataService'];

  angular.module('starter.controllers').controller('EditController', EditController);
})();
