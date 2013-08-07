ES.LocalRoute = Ember.Route.extend
  model: ->
    ES.DEFAULT_SANDBOX

  setupController: (controller, sandbox) ->
    @controllerFor('application').set('sandbox', sandbox)