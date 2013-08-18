ES.ApplicationRoute = Ember.Route.extend
  events:
    setSandbox: (sandbox) ->
      @controller.get('controllers.sandbox').set('model', sandbox)
  
    editFile: (sandboxFile) ->
      @controller.get('controllers.editor').send('editFile', sandboxFile)