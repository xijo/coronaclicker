class HomeController < ApplicationController
  def show
    @game = Game.where(session_id: session.id).first_or_initialize(counter: 17800)
  end
end
