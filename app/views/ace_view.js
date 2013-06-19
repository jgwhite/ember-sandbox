App.AceView = Ember.View.extend({
  classNames: ['ace-view'],
  theme: 'ember',
  focus: true,

  didInsertElement: function() {
    this._createEditor();
  },

  editorDidChange: function() {
    var editor = this.get('editor');
    this.set('value', editor.getValue());
  },

  _createEditor: function() {
    var editor = ace.edit(this.get('element')),
        session = editor.getSession();

    editor.setTheme('ace/theme/' + this.get('theme'));
    editor.setShowFoldWidgets(false);
    editor.setHighlightActiveLine(false);
    editor.setHighlightGutterLine(false);

    session.setMode('ace/mode/' + this.get('mode'));
    session.setUseSoftTabs(true);
    session.setTabSize(2);

    editor.setValue(this.get('value'));

    editor.getSelection().clearSelection();
    if (this.get('focus')) { editor.focus(); }

    editor.on('change', $.proxy(this, 'editorDidChange'));

    this.set('editor', editor);
  }
});
