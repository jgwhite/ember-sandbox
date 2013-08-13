ESHTML.getSandboxFile = (name) ->
  applicationController = EmberSandbox.__container__.lookup('controller:application')
  filesController = applicationController.get('controllers.files')
  filesController.findProperty('name', name)
