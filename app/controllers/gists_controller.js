App.GistsController = Ember.ArrayController.extend({

  sandboxGists: Ember.computed.equal('isSandbox', true)

});
