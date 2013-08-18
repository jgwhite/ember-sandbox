ES.SandboxFilesController = Ember.ArrayController.extend
  itemController: 'sandboxFile'
  needs: [ 'sandbox' ]
  contentBinding: 'controllers.sandbox.files'