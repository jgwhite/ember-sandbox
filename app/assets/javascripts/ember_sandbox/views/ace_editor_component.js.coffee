ES.AceEditorComponent = Ember.Component.extend
  classNames: [ "ace-view" ]
  theme: "ember"
  focus: true

  didInsertElement: ->
    @_createEditor()

  editorDidChange: ->
    editor = @get("editor")
    @set "content", editor.getValue()

  _createEditor: ->
    editor = ace.edit(@get("element"))
    editor.setTheme "ace/theme/" + @get("theme")
    editor.setShowFoldWidgets false
    editor.setHighlightActiveLine false
    editor.setHighlightGutterLine false

    session = editor.getSession()
    session.setMode "ace/mode/" + @get("mode")
    session.setUseSoftTabs true
    session.setTabSize 2

    editor.setValue @get("content")
    editor.getSelection().clearSelection()
    editor.focus()  if @get("focus")
    editor.on "change", $.proxy(this, "editorDidChange")
    @set "editor", editor