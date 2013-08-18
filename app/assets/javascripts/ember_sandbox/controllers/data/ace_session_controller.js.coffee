ES.AceSessionController = Ember.ObjectController.extend
  init: (->
    @session = new ace.EditSession("")
    @session.setUseSoftTabs(true)
    @session.setTabSize(2)
  )

  _modeDidChange: (->
    @session.setMode("ace/mode/" + @get('mode'))
  ).observes('mode')

  _contentChanged: (->
    @session.setValue(@get('data'))
  ).observes('content')