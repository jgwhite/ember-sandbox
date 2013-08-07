ES.EditorController = Ember.Controller.extend
  needs: [ 'application']
  aceInstance: null
  activeFile: null

  openFile: (sandboxFile) ->
    unless sandboxFile.get('session')
      session = new ace.EditSession(sandboxFile.get('data'), "ace/mode/" + sandboxFile.get('mode'))
      session.setUseSoftTabs true
      session.setTabSize 2
      sandboxFile.set('session', session)

    @set('activeFile', sandboxFile)