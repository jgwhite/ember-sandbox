ES.LocalRoute = Ember.Route.extend ES.SandboxRoute,
  model: ->
    ES.Sandbox.create
      js:  localStorage.js  || ES.DEFAULT_JS
      hbs: localStorage.hbs || ES.DEFAULT_HBS
      css: localStorage.css || ES.DEFAULT_CSS


ES.LocalIndexRoute = Ember.Route.extend
  beforeModel: ->
    @transitionTo('local.js')


ES.LocalJsRoute =
ES.LocalHbsRoute =
ES.LocalCssRoute = Ember.Route.extend
  model: ->
    @modelFor('local')
