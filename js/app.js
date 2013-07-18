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
    this.render(this.routeName + '/main');
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

App.ApplicationRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    this.controllerFor('user').set('content', App.User.create());
    this.controllerFor('viewer').set('content', App.Sandbox.create());
  }

});


})();

(function() {

App.GistRoute = Ember.Route.extend(App.SandboxRoute, {

  serialize: function(model) {
    return {
      user_login: model.get('userLogin'),
      gist_id: model.get('id')
    };
  },

  setupController: function(controller, model) {
    this._super(controller, model);
  }

});

App.GistIndexRoute = Ember.Route.extend({

  beforeModel: function() {
    this.transitionTo('gist.js');
  }

});

App.GistJsRoute =
App.GistHbsRoute =
App.GistCssRoute = Ember.Route.extend({
  model: function() { return this.modelFor('gist'); }
});


})();

(function() {

App.GistsRoute = Ember.Route.extend({

  model: function() {
    return this.controllerFor('user').get('gists');
  },

  renderTemplate: function() {
    this.render('gists/nav', { outlet: 'nav' });
    this.render('gists/main');
  }

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

  this.resource('gists');

  this.resource('gist', { path: ':user_login/:gist_id' }, function() {
    this.route('js');
    this.route('hbs');
    this.route('css');
  });
});


})();

(function() {

App.Gist = Ember.Object.extend({

  userLoginBinding: 'user.login',

  js: function() {
    return this._getFileContent('app.js');
  }.property('files.@each'),

  hbs: function() {
    return this._getFileContent('templates.html');
  }.property('files.@each'),

  css: function() {
    return this._getFileContent('style.css');
  }.property('files.@each'),

  then: function(resolve, reject) {
    return this.load().then(resolve, reject);
  },

  load: function() {
    var self = this;

    if (!this.promise) {
      this.promise = self._fetchData().then(function(gist) {
        self.setProperties(gist);
        self.then = self.promise = null;
        return self;
      });
    }

    return this.promise;
  },

  _fetchData: function() {
    return $.getJSON('https://api.github.com/gists/' + this.get('id'));
  },

  _getFileContent: function(file) {
    var data = this.get('files')[file];
    return data && data.content;
  }

});

App.Gist.reopenClass({

  find: function(id) {
    return App.Gist.create({ id: id });
  }

});


})();

(function() {

App.Sandbox = Ember.Object.extend();


})();

(function() {

App.User = Ember.Object.extend({

  login: 'jgwhite',

  gists: function() {
    return this._getJSON('gists').then(function(gists) {
      return gists.map(function(gist) {
        return App.Gist.create(gist);
      });
    });
  }.property(),

  _getJSON: function(path) {
    return $.getJSON(
      'https://api.github.com/users/' + this.get('login') + '/' + path
    );
  }

});


})();

(function() {

App.GistsController = Ember.ArrayController.extend({

  sandboxGists: Ember.computed.equal('isSandbox', true)

});


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

App.UserController = Ember.ObjectController.extend();


})();

(function() {

App.ViewerController = Ember.ObjectController.extend();


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