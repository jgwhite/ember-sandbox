ES.RunnerController = Ember.Controller.extend
  needs: [ 'sandbox' ]
  
  init: ->
    @notifyPropertyChange('compiledOutput')
  
  compiledOutput: (->
    indexFile = @get('controllers.sandbox.files').findProperty('name', 'index.eshtml')
    do Handlebars.compile(indexFile.get('data'))
  ).property 'controllers.sandbox.files.@each.data'

  compiledOutputDidChange: (->
    Ember.run.debounce(@, @injectCode, 400)
  ).observes 'compiledOutput'

  injectCode: ->
    runnerContainer = document.getElementById('runner-container')
    runnerContainer.innerHTML = ""
    runnerFrame = document.createElement('iframe')
    runnerFrame.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts")
    runnerFrame.setAttribute("seamless", "")
    runnerContainer.appendChild(runnerFrame)

    # contentDocument.open() causes the iframe's location hash to be replaced
    # with the parent frame's current location hash, so we make sure to reset it.
    runnerFrame.contentDocument.open()
    runnerFrame.contentWindow.location.hash = ""
    runnerFrame.contentDocument.write('')
    runnerFrame.contentDocument.write(@get('compiledOutput'))
    runnerFrame.contentDocument.close()