App = Ember.Application.create();

// Routes

App.Router.map(function() {
  this.route('js');
  this.route('hbs');
  this.route('css');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('js');
  }
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return App.Sandbox.create({
      js: localStorage.js || App.DEFAULT_JS,
      hbs: localStorage.hbs || App.DEFAULT_HBS,
      css: localStorage.css || App.DEFAULT_CSS,
    });
  }
});

App.JsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('application');
  }
});

App.HbsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('application');
  }
});

App.CssRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('application');
  }
});

// Models

App.Sandbox = Ember.Object.extend({
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

// Views

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

    session.setMode('ace/mode/' + this.get('mode'))
    session.setUseSoftTabs(true);
    session.setTabSize(2);

    editor.setValue(this.get('value'));

    editor.getSelection().clearSelection();
    if (this.get('focus')) { editor.focus() }

    editor.on('change', $.proxy(this, 'editorDidChange'));

    this.set('editor', editor);
  }
});

App.FrameView = Ember.View.extend({
  tagName: 'iframe',
  src: 'iframe.html',
  classNames: ['pane', 'frame'],
  attributeBindings: ['src'],

  contentDidChange: function() {
    var contentWindow = this.get('element').contentWindow,
        content = this.get('content');

    Ember.run(function() { contentWindow.postMessage(content, '*') });
  }.observes('content'),

  content: function() {
    return this.getProperties('js', 'hbs', 'css');
  }.property('js', 'hbs', 'css'),

  didInsertElement: function() {
    $(window).on('message', $.proxy(this, 'messageReceived'));
  },

  messageReceived: function(event) {
    event = event.originalEvent;
    if (event.data === 'Ready!') { this.notifyPropertyChange('content') }
  }
});

// Helpers

Ember.Handlebars.helper('ace', App.AceView);
Ember.Handlebars.helper('frame', App.FrameView);

// Defaults

App.DEFAULT_JS = (
 'App = Ember.Application.create();\n\n' +
 'App.Router.map(function() {\n' +
 '  this.route(\'about\');\n' +
 '});\n\n' +
 '// Your code here...'
)

App.DEFAULT_HBS = (
  '<script type="text/x-handlebars">\n' +
  '  <h1>Ember Sandbox</h1>\n\n' +
  '  <nav>\n' +
  '    {{#linkTo index}}Home{{/linkTo}}\n' +
  '    {{#linkTo about}}About{{/linkTo}}\n' +
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
)

App.DEFAULT_CSS = (
  'body {\n' +
  '  padding: 1em;\n' +
  '}\n\n' +
  'nav .active {\n' +
  '  font-weight: bold;\n' +
  '}'
)
