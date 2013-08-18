ES.LocalIndexRoute = Ember.Route.extend
  setupController: (controller) ->
    controller.send('editFile', null)