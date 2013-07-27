ES.GistRoute = Ember.Route.extend ES.SandboxRoute,
  model: (params) ->
    $.getJSON('https://api.github.com/gists/' + params.gist_id)
    .then (gist) ->
      ES.Sandbox.create
        user_login: gist.user.login
        gist_id:    gist.id
        js:         gist.files['app.js'].content
        hbs:        gist.files['templates.html'].content
        css:        gist.files['style.css'].content

  serialize: (model) ->
    model.getProperties('user_login', 'gist_id')


ES.GistIndexRoute = Ember.Route.extend
  beforeModel: ->
    @transitionTo('gist.js', @modelFor('gist'))


ES.GistJsRoute =
ES.GistHbsRoute =
ES.GistCssRoute = Ember.Route.extend
  model: ->
    @modelFor('gist')
