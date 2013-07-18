App.GistRoute = Ember.Route.extend(App.SandboxRoute, {

  serialize: function(model) {
    return {
      user_login: model.get('userLogin'),
      gist_id: model.get('id')
    };
  },

  setupController: function(controller, model) {
    this._super(controller, model);
  }

});

App.GistIndexRoute = Ember.Route.extend({

  beforeModel: function() {
    this.transitionTo('gist.js');
  }

});

App.GistJsRoute =
App.GistHbsRoute =
App.GistCssRoute = Ember.Route.extend({
  model: function() { return this.modelFor('gist'); }
});
