ES.SandboxRoute = Ember.Mixin.create
  setupController: (controller, model) ->
    @_super(controller, model)
    @controllerFor('editor', model).set('content', model)
    @controllerFor('viewer', model).set('content', model)

  renderTemplate: ->
    @render(@routeName + '/nav', { outlet: 'nav' })
    @render(@routeName + '/main')
