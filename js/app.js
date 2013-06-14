App = Ember.Application.create();

App.EditorController = Ember.Controller.extend({
  js: localStorage['js'] || (
    'App = Ember.Application.create();\n\n'
  ),

  html: localStorage['html'] || (
    '<script type="text/x-handlebars">\n' +
    '  <h1>Hello, world!</h1>\n' +
    '</script>'
  ),

  jsDidChange: function() {
    localStorage.js = this.get('js');
  }.observes('js'),

  htmlDidChange: function() {
    localStorage.html = this.get('html');
  }.observes('html')
});

App.ViewerController = Ember.Controller.extend({
  needs: ['editor'],
  jsBinding: 'controllers.editor.js',
  htmlBinding: 'controllers.editor.html'
});

App.EditorView = Ember.View.extend({
  classNames: ['pane global editor']
});

App.ViewerView = Ember.View.extend({
  classNames: ['pane global viewer']
});

App.AceView = Ember.View.extend({
  classNames: ['ace-view'],

  didInsertElement: function() {
    var editor = ace.edit(this.get('element')),
        session = editor.getSession();

    editor.setTheme('ace/theme/twilight');

    session.setMode('ace/mode/' + this.get('mode'))
    session.setUseSoftTabs(true);
    session.setTabSize(2);

    editor.setValue(this.get('value'));

    editor.getSelection().clearSelection();
    if (this.get('focus')) { editor.focus() }

    editor.on('change', $.proxy(this, 'editorDidChange'));

    this.set('editor', editor);
  },

  editorDidChange: function() {
    var editor = this.get('editor');
    this.set('value', editor.getValue());
  }
});

Ember.Handlebars.helper('ace', App.AceView);

App.FrameView = Ember.View.extend({
  tagName: 'iframe',
  src: 'iframe.html',
  classNames: ['pane frame'],
  attributeBindings: ['src'],

  contentDidChange: function() {
    var el = this.get('element'),
        contentWindow = el.contentWindow,
        content = this.get('content');

    Ember.run(function() { contentWindow.postMessage(content, '*') });
  }.observes('content'),

  content: function() {
    return this.getProperties('html', 'js');
  }.property('html', 'js'),

  didInsertElement: function() {
    Ember.run.later(this, function() {
      this.notifyPropertyChange('content');
    }, 500);
  }
});

Ember.Handlebars.helper('frame', App.FrameView);
