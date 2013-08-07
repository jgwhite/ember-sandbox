ES.GistRoute = Ember.Route.extend
  model: (params) ->
    gistURL = "https://api.github.com/gists/#{params.gist_id}"
    $.getJSON(gistURL).then (gist) ->
      console.dir gist
      ES.Sandbox.create
        codeLang:  "javascript"
        code:      gist.files['app.js'].content
        styles:    gist.files['style.css'].content
        templates: gist.files['templates.html'].content
        extras:    ""

  setupController: (controller, model) ->
    @controllerFor('application').set('activeSandbox', model)