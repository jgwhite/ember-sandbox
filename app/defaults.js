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
);

App.DEFAULT_CSS = (
  'body {\n' +
  '  padding: 1em;\n' +
  '}\n\n' +
  'nav .active {\n' +
  '  font-weight: bold;\n' +
  '}'
);
