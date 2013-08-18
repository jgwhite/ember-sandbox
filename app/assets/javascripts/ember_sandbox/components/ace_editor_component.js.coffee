ES.AceEditorComponent = Ember.Component.extend
  willDestroyElement: ->
    @editor.getSession().removeAllListeners('change')
    @editor.destroy()
    
  didInsertElement: ->
    @editor = ace.edit(@get("element"))
    @editor.setTheme "ace/theme/ember"
    @editor.setHighlightActiveLine false
    @editor.setHighlightGutterLine false
    @editor.focus()

    if @initialSession
      @set('session', @initialSession)
      delete @initialSession
      
  session: ((key, session) ->
    return @initialSession = session unless @editor
    
    if arguments.length is 1
      @editor.getSession()
    else
      if session
        session.on 'change', (event) =>
          event.editor = @editor
          event.session = session
          Ember.run.once(@, @sendAction, 'didChange', event)

        @editor.getSession().removeAllListeners('change')
        @editor.setSession(session)
        
        @editor.focus()
        @editor.clearSelection()
      @editor.getSession()
  ).property()