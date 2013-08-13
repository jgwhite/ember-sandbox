#= require_self
#= require_tree ./initializers
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./components
#= require_tree ./templates
#= require_tree ./routes
#= require ./router
#= require ./defaults
#= require ./lib/eshtml

Ember.ENV.HELPER_PARAM_LOOKUPS = true
# Ember.LOG_BINDINGS = true

window.ES = window.EmberSandbox = Ember.Application.create()