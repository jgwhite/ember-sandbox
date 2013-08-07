ES.FilesController = Ember.ArrayController.extend
  itemController: 'file'
  needs: [ 'application', 'editor' ]
  contentBinding: 'controllers.application.sandbox.files'

  activeFile: null