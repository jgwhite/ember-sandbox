Handlebars.registerHelper 'include', (name, options) ->
  file = ESHTML.getSandboxFile(name)
  output = file.get('data')

  new Handlebars.SafeString(output)