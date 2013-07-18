App.ApplicationRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    this.controllerFor('user').set('content', App.User.create());
    this.controllerFor('viewer').set('content', App.Sandbox.create());
  }

});
