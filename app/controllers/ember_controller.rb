class EmberController < ApplicationController
  def editor
    render layout: false
  end
  def runner
    render layout: false
  end
end
