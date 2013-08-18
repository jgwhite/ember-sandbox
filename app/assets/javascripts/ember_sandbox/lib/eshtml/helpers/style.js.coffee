Handlebars.registerHelper 'style', (name, version) ->
  if name.match(/^(http:\/\/|https:\/\/|\/\/)/)
    url = name
  else if name.indexOf(".") is -1
    url = ESHTML.getCSSLibraryURL(name, version)
  
  if url
    output = """<link rel="stylesheet" href="#{url}">"""
  else
    file = ES.getSandboxFile(name)
    output = """<style>\n#{file.get('data')}\n</style>"""
    
  new Handlebars.SafeString(output)