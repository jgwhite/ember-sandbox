ES.Router.map ->
  @resource "local", path: "", ->
    @route "js"
    @route "hbs"
    @route "css"

  @resource "gist", path: ":user_login/:gist_id", ->
    @route "js"
    @route "hbs"
    @route "css"

