ES.LocalController = Ember.ObjectController.extend
  jsDidChange:  (-> localStorage.js  = @get('js')).observes('js')
  hbsDidChange: (-> localStorage.hbs = @get('hbs')).observes('hbs')
  cssDidChange: (-> localStorage.css = @get('css')).observes('css')