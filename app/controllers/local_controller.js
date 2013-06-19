App.LocalController = Ember.ObjectController.extend({
  jsDidChange: function() {
    localStorage.js = this.get('js');
  }.observes('js'),

  hbsDidChange: function() {
    localStorage.hbs = this.get('hbs');
  }.observes('hbs'),

  cssDidChange: function() {
    localStorage.css = this.get('css');
  }.observes('css')
});
