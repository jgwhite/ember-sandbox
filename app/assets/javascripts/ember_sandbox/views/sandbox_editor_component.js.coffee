ES.SandboxEditorComponent = Ember.Component.extend

  classNames: [ 'sandbox-editor' ]

  sandboxProperty: (-> @get "sandbox.#{@get('type')}").property('type')

  content: Ember.computed.alias('sandboxProperty.content')
  format: Ember.computed.alias('sandboxProperty.format')

  mode: (-> @_chooseMode(@get('format'))).property('format')

  _chooseMode: (format) ->
    switch format
      when "javascript" then "javascript"
      when "templates"  then "html"
      when "css"        then "css"
      else "text"
