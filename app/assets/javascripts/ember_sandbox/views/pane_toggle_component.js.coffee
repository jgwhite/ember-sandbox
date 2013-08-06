ES.PaneToggleComponent = Ember.Component.extend
  tagName: "span"
  togglePane: ->
    @get('pane').toggleProperty('enabled')