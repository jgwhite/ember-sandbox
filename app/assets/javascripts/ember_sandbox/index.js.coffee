#= require_self
#= require_tree ./defaults
#= require_tree ./mixins
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./templates
#= require_tree ./routes
#= require_tree ./helpers
#= require ./router

Ember.ENV.HELPER_PARAM_LOOKUPS = true

window.ES = window.EmberSandbox = Ember.Application.create()