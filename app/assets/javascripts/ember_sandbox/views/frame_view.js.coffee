ES.FrameView = Ember.View.extend
  tagName: "iframe"
  src: "runner.html"
  classNames: [ "pane", "frame" ]
  attributeBindings: [ "src" ]
  name: "embersandbox"

  contentDidChange: (->
    return  unless @get("isReady")
    contentWindow = @get("element").contentWindow
    content = @get("content")
    Ember.run ->
      contentWindow.postMessage content, "*"
  ).observes("content")

  content: (->
    @getProperties "name", "js", "hbs", "css"
  ).property("name", "js", "hbs", "css")

  didInsertElement: ->
    $(window).on "message", $.proxy(this, "messageReceived")

  messageReceived: (event) ->
    if event.originalEvent.data is "Ready!"
      @set "isReady", true
      @notifyPropertyChange "content"
