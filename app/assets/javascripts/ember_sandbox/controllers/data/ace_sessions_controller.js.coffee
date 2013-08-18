ES.AceSessionsController = Ember.ArrayController.extend
  itemController: 'aceSession'
  needs: [ 'sandbox' ]
  contentBinding: 'controllers.sandbox.files'

  getSessionController: (file) ->
    @findProperty('content', file)

  getSession: (file) ->
    @findProperty('content', file)?.session