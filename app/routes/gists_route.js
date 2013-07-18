App.GistsRoute = Ember.Route.extend({

  model: function() {
    return this.controllerFor('user').get('gists');
  },

  renderTemplate: function() {
    this.render('gists/nav', { outlet: 'nav' });
    this.render('gists/main');
  }

});
