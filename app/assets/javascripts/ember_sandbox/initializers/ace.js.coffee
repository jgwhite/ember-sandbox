Ember.Application.initializer
  name: "ace"
 
  initialize: ->
    ace.config.set("modePath", "/ace")
    ace.config.set("themePath", "/ace")
    ace.config.set("workerPath", "/ace")