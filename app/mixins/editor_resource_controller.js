App.EditorResourceController = Ember.ObjectController.extend({
  needs: ['editor'],
  contentBinding: 'controllers.editor.content'
});
