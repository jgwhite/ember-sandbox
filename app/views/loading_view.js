App.LoadingView = Ember.View.extend({
  classNames: ['loading-view'],
  layout: Ember.Handlebars.compile(
    '<div class="loading-message">{{yield}}</div>'
  )
});
