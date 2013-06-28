(function() {

App = Ember.Application.create();


})();

(function() {

App.SandboxRoute = Ember.Mixin.create({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('editor', model).set('content', model);
    this.controllerFor('viewer', model).set('content', model);
  },

  renderTemplate: function() {
    this.render(this.routeName + '/nav', { outlet: 'nav' });
    this.render();
  }
});


})();

(function() {

App.DEFAULT_JS = (
 'App = Ember.Application.create();\n\n' +
 'App.Router.map(function() {\n' +
 '  this.route(\'about\');\n' +
 '});\n\n' +
 '// Your code here...'
);

App.DEFAULT_HBS = (
  '<script type="text/x-handlebars">\n' +
  '  <h1>Ember Sandbox</h1>\n\n' +
  '  <nav>\n' +
  '    {{#linkTo "index"}}Home{{/linkTo}}\n' +
  '    {{#linkTo "about"}}About{{/linkTo}}\n' +
  '  </nav>\n\n' +
  '  {{outlet}}\n' +
  '</script>\n\n' +
  '<script type="text/x-handlebars" data-template-name="index">\n' +
  '  <h2>Welcome</h2>\n' +
  '  <p>Edit the code on the left and see the result right here.</p>\n' +
  '  <p>All your code is kept in local storage, so it’ll be here when you get back.</p>\n' +
  '</script>\n\n' +
  '<script type="text/x-handlebars" data-template-name="about">\n' +
  '  <h2>About</h2>\n' +
  '  <p>A little live editor for Ember, written in Ember.</p>\n' +
  '</script>'
);

App.DEFAULT_CSS = (
  'body {\n' +
  '  padding: 1em;\n' +
  '}\n\n' +
  'nav .active {\n' +
  '  font-weight: bold;\n' +
  '}'
);


})();

(function() {

App.GistRoute = Ember.Route.extend(App.SandboxRoute, {
  model: function(params) {
    return $.getJSON('https://api.github.com/gists/' + params.gist_id)
    .then(function(gist) {
      return App.Sandbox.create({
        user_login: gist.user.login,
        gist_id: gist.id,
        js: gist.files['app.js'].content,
        hbs: gist.files['templates.html'].content,
        css: gist.files['style.css'].content
      });
    });
  },

  serialize: function(model) {
    return model.getProperties('user_login', 'gist_id');
  }
});

App.GistIndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('gist.js', this.modelFor('gist'));
  }
});

App.GistJsRoute =
App.GistHbsRoute =
App.GistCssRoute = Ember.Route.extend({
  model: function() { return this.modelFor('gist'); }
});


})();

(function() {

App.LoadingRoute = Ember.Route.extend();


})();

(function() {

App.LocalRoute = Ember.Route.extend(App.SandboxRoute, {
  model: function() {
    return App.Sandbox.create({
      js: localStorage.js || App.DEFAULT_JS,
      hbs: localStorage.hbs || App.DEFAULT_HBS,
      css: localStorage.css || App.DEFAULT_CSS
    });
  }
});

App.LocalIndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('local.js');
  }
});

App.LocalJsRoute =
App.LocalHbsRoute =
App.LocalCssRoute = Ember.Route.extend({
  model: function() { return this.modelFor('local'); }
});


})();

(function() {

App.Router.map(function() {
  this.resource('local', { path: '' }, function() {
    this.route('js');
    this.route('hbs');
    this.route('css');
  });

  this.resource('gist', { path: ':user_login/:gist_id' }, function() {
    this.route('js');
    this.route('hbs');
    this.route('css');
  });
});


})();

(function() {

App.Sandbox = Ember.Object.extend();


})();

(function() {

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


})();

(function() {

App.AceView = Ember.View.extend({
  classNames: ['ace-view'],
  theme: 'ember',
  focus: true,

  didInsertElement: function() {
    this._createEditor();
  },

  editorDidChange: function() {
    var editor = this.get('editor');
    this.set('value', editor.getValue());
  },

  _createEditor: function() {
    var editor = ace.edit(this.get('element')),
        session = editor.getSession();

    editor.setTheme('ace/theme/' + this.get('theme'));
    editor.setShowFoldWidgets(false);
    editor.setHighlightActiveLine(false);
    editor.setHighlightGutterLine(false);

    session.setMode('ace/mode/' + this.get('mode'));
    session.setUseSoftTabs(true);
    session.setTabSize(2);

    editor.setValue(this.get('value'));

    editor.getSelection().clearSelection();
    if (this.get('focus')) { editor.focus(); }

    editor.on('change', $.proxy(this, 'editorDidChange'));

    this.set('editor', editor);
  }
});


})();

(function() {

App.FrameView = Ember.View.extend({
  tagName: 'iframe',
  src: 'iframe.html',
  classNames: ['pane', 'frame'],
  attributeBindings: ['src'],

  contentDidChange: function() {
    if (!this.get('isReady')) return;

    var contentWindow = this.get('element').contentWindow,
        content = this.get('content');

    Ember.run(function() { contentWindow.postMessage(content, '*'); });
  }.observes('content'),

  content: function() {
    return this.getProperties('js', 'hbs', 'css');
  }.property('js', 'hbs', 'css'),

  didInsertElement: function() {
    $(window).on('message', $.proxy(this, 'messageReceived'));
  },

  messageReceived: function(event) {
    if (event.originalEvent.data === 'Ready!') {
      this.set('isReady', true);
      this.notifyPropertyChange('content');
    }
  }
});


})();

(function() {

App.LoadingView = Ember.View.extend({
  classNames: ['loading-view'],
  layout: Ember.Handlebars.compile(
    '<div class="loading-message">{{yield}}</div>'
  )
});


})();

(function() {

Ember.Handlebars.helper('ace', App.AceView);
Ember.Handlebars.helper('frame', App.FrameView);


})();