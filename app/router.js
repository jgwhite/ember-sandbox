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
