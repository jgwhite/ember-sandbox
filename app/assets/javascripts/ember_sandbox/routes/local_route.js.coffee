ES.LocalRoute = Ember.Route.extend
  model: ->
    ES.Sandbox.create
      code:      Ember.Object.create(format: "javascript", content: ES.DEFAULT_JS)
      styles:    Ember.Object.create(format: "css", content: ES.DEFAULT_CSS)
      templates: Ember.Object.create(format: "templates", content: ES.DEFAULT_HBS)
      includes:  Ember.Object.create(content: "")

      # js:  localStorage.js  || ES.DEFAULT_JS
      # hbs: localStorage.hbs || ES.DEFAULT_HBS
      # css: localStorage.css || ES.DEFAULT_CSS

  setupController: (controller, model) ->
    application = @controllerFor('application')
    application.set('activeSandbox', model)

    panes = application.get('controllers.panes')
    panes.pushObject ES.EditorPane.create(enabled: false, id: "includes")
    panes.pushObject ES.EditorPane.create(enabled: true,  id: "templates")
    panes.pushObject ES.EditorPane.create(enabled: true,  id: "styles")
    panes.pushObject ES.EditorPane.create(enabled: true,  id: "code")
    panes.pushObject ES.RunnerPane.create(enabled: false, id: "runner")