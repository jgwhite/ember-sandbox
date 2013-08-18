ES.LocalRoute = Ember.Route.extend
  model: ->
    ES.DEFAULT_SANDBOX

  setupController: (controller, sandbox) ->
    controller.send('setSandbox', sandbox)