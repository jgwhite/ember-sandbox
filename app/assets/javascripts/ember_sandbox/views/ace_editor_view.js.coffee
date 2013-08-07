ES.AceEditorView = Ember.View.extend
  classNames: [ "ace-view" ]
  theme: "ember"
  focus: true
  aceEditor: null

  didInsertElement: ->
    @_createEditor()

  _editorDidChange: ->
    @set('controller.activeFile.data', @get('aceEditor').getValue())

  _createEditor: ->
    editor = ace.edit(@get("element"))

    editor.setTheme "ace/theme/" + @get("theme")
    editor.setShowFoldWidgets false
    editor.setHighlightActiveLine false
    editor.setHighlightGutterLine false
    editor.renderer.setShowGutter false

    # editor.getSelection().clearSelection()
    editor.focus()
    editor.on('change', $.proxy(this, "_editorDidChange"))

    @set('aceEditor', editor)
    @_activeFileChanged()
  
  _activeFileChanged: (->
    @get('aceEditor').setSession(@get('controller.activeFile.session'))
  ).observes 'controller.activeFile'


  # _contentChanged: (->
  #   @get("controller.aceEditor").setValue @get("content") unless @get('guardingContentObserver')
  # ).observes 'content'