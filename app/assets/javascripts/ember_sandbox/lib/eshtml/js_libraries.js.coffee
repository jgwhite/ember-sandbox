ESHTML.getJSLibraryURL = (name, version) ->
  switch name
    when 'jquery'        then "http://code.jquery.com/jquery-#{version}.js"
    when 'ember'         then "http://builds.emberjs.com.s3.amazonaws.com/ember-#{version}.js"
    when 'handlebars'    then "http://builds.emberjs.com.s3.amazonaws.com/handlebars-#{version}.js"