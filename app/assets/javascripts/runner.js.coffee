didReceiveMessage = (event) ->
  if event.data.name == "embersandbox"
    loadData event.data

loadData = (data) ->
  destroyApps()
  Ember.run ->
    $("#css").html(data.css)
    $("body").html(data.hbs)
    eval(data.js)

destroyApps = ->
  Ember.run ->
    $(window).off()
    for name of window
      try
        obj = window[name]
        if obj and obj.constructor is Ember.Application
          obj.destroy()
          delete window[name]
      catch error
        console.log error
    Ember.TEMPLATES = {}

window.addEventListener "message", didReceiveMessage, false
$ -> parent.postMessage "Ready!", "*"
