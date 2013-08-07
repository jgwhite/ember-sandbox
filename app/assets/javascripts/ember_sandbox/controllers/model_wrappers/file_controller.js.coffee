ES.FileController = Ember.ObjectController.extend
  needs: [ 'files' ]
  session: null

  isActive: (->
    @get('name') is @get('controllers.files.activeFile.name')
  ).property('controllers.files.activeFile')