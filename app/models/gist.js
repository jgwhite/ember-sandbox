App.Gist = Ember.Object.extend({

  userLoginBinding: 'user.login',

  js: function() {
    return this._getFileContent('app.js');
  }.property('files.@each'),

  hbs: function() {
    return this._getFileContent('templates.html');
  }.property('files.@each'),

  css: function() {
    return this._getFileContent('style.css');
  }.property('files.@each'),

  then: function(resolve, reject) {
    return this.load().then(resolve, reject);
  },

  load: function() {
    var self = this;

    if (!this.promise) {
      this.promise = self._fetchData().then(function(gist) {
        self.setProperties(gist);
        self.then = self.promise = null;
        return self;
      });
    }

    return this.promise;
  },

  _fetchData: function() {
    return $.getJSON('https://api.github.com/gists/' + this.get('id'));
  },

  _getFileContent: function(file) {
    var data = this.get('files')[file];
    return data && data.content;
  }

});

App.Gist.reopenClass({

  find: function(id) {
    return App.Gist.create({ id: id });
  }

});
