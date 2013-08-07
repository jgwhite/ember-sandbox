Handlebars.registerHelper 'embed', (name, options) ->
  applicationController = EmberSandbox.__container__.lookup('controller:application')
  filesController = applicationController.get('controllers.files')
  file = filesController.findProperty('name', name)

  switch file.get('extension')
    when "css" then new Handlebars.SafeString("""<style>\n#{file.get('data')}\n</style>""")
    when "js" then new Handlebars.SafeString("""<script>\n#{file.get('data')}\n</script>""")
    else new Handlebars.SafeString("#{file.get('data')}")

Handlebars.registerHelper 'style', (name, version) ->
  url =
    switch name
      when 'normalize'     then "http://cdnjs.cloudflare.com/ajax/libs/normalize/2.1.0/normalize.css"
      else null

  new Handlebars.SafeString("""<link rel="stylesheet" href="#{url}">""")

Handlebars.registerHelper 'script', (name, version) ->
  url =
    switch name
      when 'jquery'        then "http://code.jquery.com/jquery-#{version}.js"
      when 'ember'         then "http://builds.emberjs.com.s3.amazonaws.com/ember-#{version}.js"
      when 'handlebars'    then "http://builds.emberjs.com.s3.amazonaws.com/handlebars-#{version}.js"
      else null

  new Handlebars.SafeString("""<script src="#{url}"></script>""")