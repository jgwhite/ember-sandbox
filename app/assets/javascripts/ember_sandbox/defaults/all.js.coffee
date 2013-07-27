ES.DEFAULT_JS =
"""
App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
});

// Your code here...
"""

ES.DEFAULT_HBS =
"""
<script type="text/x-handlebars">
  <h1>Ember Sandbox</h1>

  <nav>
    {{#linkTo "index"}}Home{{/linkTo}}
    {{#linkTo "about"}}About{{/linkTo}}
  </nav>

  {{outlet}}
</script>

<script type="text/x-handlebars" data-template-name="index">
  <h2>Welcome</h2>
  <p>Edit the code on the left and see the result right here.</p>
  <p>All your code is kept in local storage, so it’ll be here when you get back.</p>
</script>

<script type="text/x-handlebars" data-template-name="about">
  <h2>About</h2>
  <p>A little live editor for Ember, written in Ember.</p>
</script>
"""

ES.DEFAULT_CSS =
"""
body {
  padding: 1em;
}

nav .active {
  font-weight: bold;
}
"""