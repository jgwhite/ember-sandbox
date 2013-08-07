ES.SandboxFile = Ember.Object.extend
  name: null
  data: null

  extension: (->
    @get('name').split(".").pop().toLowerCase()
  ).property('name')

  mode: (->
    switch @get('extension')
      when 'js'          then 'javascript'
      when 'coffee'      then 'coffeescript'
      when 'css'         then 'css'
      when 'handlebars'  then 'handlebars'
      when 'hbs'         then 'handlebars'
      when 'eshtml'      then 'html'
      when 'html'        then 'html'
  ).property('extension')