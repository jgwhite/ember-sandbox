ES.ApplicationController = Ember.Controller.extend
  needs: [ 'files', 'editor', 'runner' ]

  compiledOutput: (->
    indexFile = @get('sandbox.files').findProperty('name', 'index.eshtml')
    do Handlebars.compile(indexFile.get('data'))
  ).property 'controllers.editor.activeFile.data'

  # Move this into RunnerController
  _compiledOutputChanged: (->
    $runner = document.getElementById('runner')
    if $runner
      $runner.contentDocument.open()
      $runner.contentDocument.write(@get('compiledOutput'))
      $runner.contentDocument.close()
  ).observes 'compiledOutput'

  openFile: (sandboxFile) ->
    @get('controllers.editor').send('openFile', sandboxFile)
