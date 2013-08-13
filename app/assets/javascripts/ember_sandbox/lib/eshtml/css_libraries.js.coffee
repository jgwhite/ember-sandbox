ESHTML.getCSSLibraryURL = (name, version) ->
  switch name
    when 'normalize'   then "http://cdnjs.cloudflare.com/ajax/libs/normalize/2.1.0/normalize.css"