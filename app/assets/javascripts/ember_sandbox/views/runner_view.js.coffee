# ES.FrameView = Ember.View.extend
#   tagName: "iframe"
#   src: "runner.html"
#   classNames: [ "pane", "frame" ]
#   attributeBindings: [ "src" ]

#   contentDidChange: (->
#     return  unless @get("isReady")
#     contentWindow = @get("element").contentWindow
#     content = @get("content")
#     Ember.run ->
#       contentWindow.postMessage content, "*"
#   ).observes("content")

#   content: (->
#     @getProperties "js", "hbs", "css"
#   ).property("js", "hbs", "css")

#   didInsertElement: ->
#     $(window).on "message", $.proxy(this, "messageReceived")

#   messageReceived: (event) ->
#     if event.originalEvent.data is "Ready!"
#       @set "isReady", true
#       @notifyPropertyChange "content"