class GamesController < ApplicationController
  def show
    @game = Game.find(params[:id]) #.first_or_initialize(counter: 17800)
    session[:game_id] = @game.id
  end
end
