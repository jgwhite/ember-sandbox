Handlebars.registerHelper 'include', (name, options) ->
  file = ES.getSandboxFile(name)
  output = file.get('data')

  new Handlebars.SafeString(output)