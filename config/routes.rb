EmberSandbox::Application.routes.draw do
  root to: 'ember#editor'
  get 'runner' => 'ember#runner'
end
