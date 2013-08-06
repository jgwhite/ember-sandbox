ES.SandboxPaneComponent = Ember.Component.extend
  tagName: "section"
  classNames: [ "pane" ]
  attributeBindings: [ "style" ]

  style: (->
    "width: #{@get('width')*100}%;"
  ).property('width')