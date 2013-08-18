ES.LocalEditRoute = Ember.Route.extend
  serialize: (sandboxFile) ->
    fileName: sandboxFile.name

  model: (params) ->
    for file in @modelFor('local').files
      return file if file.name is params.fileName

  setupController: (controller, sandboxFile) ->
    controller.send('editFile', sandboxFile)