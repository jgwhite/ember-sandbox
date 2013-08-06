ES.PanesController = Ember.ArrayController.extend
  itemController: 'pane'
  width: (->
    1 / @get('content').filterProperty('enabled').length
  ).property('@each.enabled')