App.LocalIndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('local.js');
  }
});
