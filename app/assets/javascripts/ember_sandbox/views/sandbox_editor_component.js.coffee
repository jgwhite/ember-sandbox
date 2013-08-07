ES.SandboxEditorComponent = Ember.Component.extend

  classNames: [ 'sandbox-editor' ]

  # sandboxProperty: (-> @get "sandbox.#{@get('type')}").property('type')

  # content: Ember.computed.alias('sandboxProperty.content')
  # format: Ember.computed.alias('sandboxProperty.format')

  # mode: (-> @_chooseMode(@get('format'))).property('format')

  # _chooseMode: (format) ->
  #   switch format
  #     when "javascript" then "javascript"
  #     when "templates"  then "html"
  #     when "css"        then "css"
  #     else "text"


ES.SandboxRunnerComponent = Ember.Component.extend()

ES.SandboxStylesEditorComponent = ES.SandboxEditorComponent.extend
  mode: "css"

ES.SandboxExtrasEditorComponent = ES.SandboxEditorComponent.extend
  mode: "html"
  
ES.SandboxTemplatesEditorComponent = ES.SandboxEditorComponent.extend
  mode: "html"

ES.SandboxCodeEditorComponent = ES.SandboxEditorComponent.extend
  mode: Ember.computed.alias('codeLang')

  codeLangText: (->
    switch @get('codeLang')
      when "coffeescript" then "CoffeeScript"
      when "javascript"   then "JavaScript"
      else "Unknown"
  ).property('codeLang')
