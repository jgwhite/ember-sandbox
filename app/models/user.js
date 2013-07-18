App.User = Ember.Object.extend({

  login: 'jgwhite',

  gists: function() {
    return this._getJSON('gists').then(function(gists) {
      return gists.map(function(gist) {
        return App.Gist.create(gist);
      });
    });
  }.property(),

  _getJSON: function(path) {
    return $.getJSON(
      'https://api.github.com/users/' + this.get('login') + '/' + path
    );
  }

});
