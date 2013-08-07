ES.Router.map ->
  @resource "local", path: "/", ->
    @route "edit", path: "/edit/:fileName"

  # @route "gist",  path: "/:user_login/:gist_id"