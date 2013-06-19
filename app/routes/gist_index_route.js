App.GistIndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('gist.js', this.modelFor('gist'));
  }
});
