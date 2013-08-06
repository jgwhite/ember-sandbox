ES.PaneController = Ember.ObjectController.extend
  needs: [ 'application', 'panes' ]

  sandbox: Ember.computed.alias('controllers.application.activeSandbox')
  width: Ember.computed.alias('controllers.panes.width')