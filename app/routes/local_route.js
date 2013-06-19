App.LocalRoute = Ember.Route.extend(App.SandboxRoute, {
  model: function() {
    return App.Sandbox.create({
      js: localStorage.js || App.DEFAULT_JS,
      hbs: localStorage.hbs || App.DEFAULT_HBS,
      css: localStorage.css || App.DEFAULT_CSS
    });
  }
});
