ES.EditorController = Ember.Controller.extend
  needs: ['aceSessions']

  editFile: (sandboxFile) ->
    @set('activeFile', sandboxFile)

  activeSession: (->
    @get('controllers.aceSessions').getSession(@get('activeFile'))
  ).property('activeFile')

  aceEditorDidChange: (event) ->
    @set('activeFile.data', event.session.getValue())