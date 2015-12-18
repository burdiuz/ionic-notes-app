/**
 * Created by Oleg Galaburda on 17.12.15.
 */
(function() {

  /**
   * @constructor
   */
  function NoteService() {

    this.getTitle = function(item) {
      var title = item.title;
      if (!title) {
        title = item.text;
        if (title.length > 25) {
          var space = title.replace(/\s+/g, ' ').match(/.{20,25}(?=\s)/);
          if (space) {
            title = space[0];
          } else {
            title = title.substr(0, 25);
          }
          title += '...';
        }
      }
      return title;
    };
  }

  angular.module('app.core').service('noteService', NoteService);
})();
