Handlebars.registerHelper 'script', (name, version) ->
  if name.match(/^(http:\/\/|https:\/\/|\/\/)/)
    url = name
  else if name.indexOf(".") is -1
    url = ESHTML.getJSLibraryURL(name, version)
  
  if url
    output = """<script src="#{url}"></script>"""
  else
    file = ESHTML.getSandboxFile(name)
    output = """<script>\n#{file.get('data')}\n</script>"""
    
  new Handlebars.SafeString(output)