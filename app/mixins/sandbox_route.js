App.SandboxRoute = Ember.Mixin.create({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('editor', model).set('content', model);
    this.controllerFor('viewer', model).set('content', model);
  },

  renderTemplate: function() {
    this.render(this.routeName + '/nav', { outlet: 'nav' });
    this.render(this.routeName + '/main');
  }
});
